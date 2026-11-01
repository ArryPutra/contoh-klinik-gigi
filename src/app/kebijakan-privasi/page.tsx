import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = buildPageMetadata({
  title: "Kebijakan Privasi",
  description: `Informasi kebijakan privasi pengunjung situs web ${siteConfig.name}.`,
  path: "/kebijakan-privasi",
});

export default function KebijakanPrivasiPage() {
  return (
    <Section variant="white" ariaLabelledBy="privacy-heading">
      <div className="mx-auto max-w-3xl">
        <Badge variant="teal">Dokumen Legalitas &amp; Privasi</Badge>
        <h1
          id="privacy-heading"
          className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-text sm:text-4xl"
        >
          Kebijakan Privasi Situs Web
        </h1>
        <p className="mt-3 text-sm text-text-muted">
          Terakhir diperbarui: November 2026 &bull; Berlaku untuk situs web{" "}
          <strong className="text-text">{siteConfig.name}</strong>
        </p>

        {/* Catatan Tinjauan Pemilik Klinik */}
        <div className="mt-6 flex items-start gap-3 rounded-[10px] border border-border bg-tint p-4 text-xs text-text sm:text-sm">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
          <p>
            <strong>Catatan untuk Pemilik / Pengelola Klinik:</strong> Teks kebijakan privasi di bawah ini disusun secara jujur sesuai arsitektur teknis situs (tanpa database server). Harap tinjau dan sesuaikan bagian ini apabila di kemudian hari Anda menambahkan layanan analitik pihak ketiga.
          </p>
        </div>

        <Card className="mt-8 space-y-6 text-sm leading-[1.6] text-text-muted sm:text-base">
          <section>
            <h2 className="text-lg font-semibold tracking-[-0.01em] text-text">
              1. Tidak Ada Penyimpanan Data Pribadi atau Rekam Medis di Server Website
            </h2>
            <p className="mt-2">
              Situs web ini berjalan sepenuhnya sebagai halaman informasi publik (<em>frontend-only</em>). Kami <strong className="text-text">tidak menggunakan database server, sistem pendaftaran akun, maupun penyimpanan rekam medis elektronik</strong> di dalam situs web ini.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold tracking-[-0.01em] text-text">
              2. Penggunaan Formulir Konsultasi ke WhatsApp
            </h2>
            <p className="mt-2">
              Formulir konsultasi yang terdapat pada halaman{" "}
              <Link href="/kontak" className="font-semibold text-accent hover:text-accent-hover underline">
                Kontak
              </Link>{" "}
              hanya berfungsi untuk menyusun teks pesan secara otomatis di perangkat Anda (<em>browser</em>) lalu mengarahkannya ke fitur resmi <em>Click-to-Chat</em> WhatsApp (<code>wa.me</code>). Informasi yang Anda ketikkan tidak dikirim atau disimpan di server situs web ini.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold tracking-[-0.01em] text-text">
              3. Tautan dan Layanan Pihak Ketiga
            </h2>
            <p className="mt-2">
              Situs ini memuat tautan menuju layanan eksternal untuk memudahkan kunjungan Anda, meliputi:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5">
              <li>
                <strong className="text-text">WhatsApp (Meta Platforms, Inc.)</strong> ketika Anda menekan tombol konsultasi WhatsApp.
              </li>
              <li>
                <strong className="text-text">Google Maps / OpenStreetMap</strong> untuk menampilkan peta lokasi dan petunjuk arah menuju klinik.
              </li>
              <li>
                <strong className="text-text">Platform Media Sosial</strong> resmi klinik (seperti Instagram) apabila Anda membuka tautan profil sosial kami.
              </li>
            </ul>
            <p className="mt-2">
              Interaksi Anda pada layanan eksternal tersebut tunduk sepenuhnya pada kebijakan privasi masing-masing penyelenggara platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold tracking-[-0.01em] text-text">
              4. Log Teknis Standar &amp; Analitik
            </h2>
            <p className="mt-2">
              Penyedia layanan hosting situs web dapat mencatat log teknis standar (seperti alamat IP anonim, jenis peramban, dan waktu akses) semata-mata untuk menjaga keamanan jaringan dan keandalan pemuatan halaman. Apabila klinik mengaktifkan alat pengukuran trafik ringan di masa mendatang, halaman kebijakan ini akan diperbarui.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold tracking-[-0.01em] text-text">
              5. Kontak Pengelola Klinik
            </h2>
            <p className="mt-2">
              Apabila Anda memiliki pertanyaan mengenai kebijakan privasi situs web ini, silakan hubungi kami melalui informasi yang tertera di halaman{" "}
              <Link href="/kontak" className="font-semibold text-accent hover:text-accent-hover underline">
                Kontak &amp; Lokasi
              </Link>
              .
            </p>
          </section>
        </Card>
      </div>
    </Section>
  );
}
