"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, ShieldAlert } from "lucide-react";
import { services } from "@/content/services";
import { buildConsultationFormWhatsAppUrl } from "@/lib/whatsapp";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function WhatsAppForm() {
  const [name, setName] = useState("");
  const [need, setNeed] = useState(services[0]?.name ?? "Konsultasi Umum");
  const [preferredTime, setPreferredTime] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = buildConsultationFormWhatsAppUrl({
      name,
      need,
      preferredTime,
      notes,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Card padding="lg">
      <h2 className="text-xl font-semibold text-text sm:text-2xl">
        Kirim pesan konsultasi ke WhatsApp
      </h2>
      <p className="mt-2 text-sm text-text-muted">
        Isi kolom singkat di bawah ini untuk menyusun teks konsultasi secara otomatis sebelum diteruskan ke aplikasi WhatsApp.
      </p>

      <div className="mt-4 flex items-start gap-2.5 rounded-[10px] border border-border bg-tint p-3.5 text-xs text-text">
        <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
        <p>
          <strong>Privasi &amp; Transparansi:</strong> Website ini tidak menyimpan atau merekam data formulir di server. Saat tombol kirim ditekan, pesan dibuka langsung di aplikasi WhatsApp Anda.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>
          <label
            htmlFor="consult-name"
            className="block text-sm font-semibold text-text"
          >
            Nama Lengkap Pasien
          </label>
          <input
            id="consult-name"
            name="name"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            enterKeyHint="next"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-describedby="consult-name-hint"
            className="form-control mt-1.5 block min-h-[44px] w-full rounded-[10px] border border-border bg-background px-4 py-2.5 text-base text-text"
          />
          <span id="consult-name-hint" className="mt-1 block text-xs text-text-muted">
            Nama yang akan dicantumkan pada pesan sapaan WhatsApp.
          </span>
        </div>

        <div>
          <label
            htmlFor="consult-need"
            className="block text-sm font-semibold text-text"
          >
            Keperluan atau Layanan yang Ditanyakan
          </label>
          <select
            id="consult-need"
            name="need"
            required
            value={need}
            onChange={(e) => setNeed(e.target.value)}
            className="form-control mt-1.5 block min-h-[44px] w-full rounded-[10px] border border-border bg-background px-4 py-2.5 text-base text-text"
          >
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Keluhan Sakit Gigi Mendadak">
              Keluhan Sakit Gigi Mendadak
            </option>
            <option value="Pertanyaan Umum / Lainnya">Pertanyaan Umum / Lainnya</option>
          </select>
        </div>

        <fieldset>
          <legend className="block text-sm font-semibold text-text">
            Rencana Waktu Kunjungan (Opsional)
          </legend>
          <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-3">
            {[
              "Hari Ini / Segera",
              "Sesi Pagi (09.00–14.00)",
              "Sesi Sore/Malam (15.00–20.00)",
            ].map((slot) => (
              <label
                key={slot}
                className={`interactive-transition flex min-h-[44px] cursor-pointer items-center gap-2.5 rounded-[10px] border px-3.5 py-2 text-xs font-medium ${
                  preferredTime === slot
                    ? "border-accent bg-tint text-text"
                    : "border-border bg-background text-text-muted hover:bg-tint"
                }`}
              >
                <input
                  type="radio"
                  name="preferredTime"
                  value={slot}
                  checked={preferredTime === slot}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="h-4 w-4 accent-accent"
                />
                <span>{slot}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div>
          <label
            htmlFor="consult-notes"
            className="block text-sm font-semibold text-text"
          >
            Keluhan Singkat atau Pertanyaan (Opsional)
          </label>
          <textarea
            id="consult-notes"
            name="notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            aria-describedby="consult-notes-hint"
            className="form-control mt-1.5 block w-full rounded-[10px] border border-border bg-background px-4 py-2.5 text-base text-text"
          />
          <span id="consult-notes-hint" className="mt-1 block text-xs text-text-muted">
            Ceritakan singkat keluhan gigi Anda atau waktu kunjungan yang diinginkan.
          </span>
        </div>

        <div className="pt-2">
          <Button type="submit" variant="whatsapp" size="lg" fullWidth>
            <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            <span>Buka WhatsApp &amp; Kirim Pesan</span>
          </Button>
        </div>
      </form>
    </Card>
  );
}
