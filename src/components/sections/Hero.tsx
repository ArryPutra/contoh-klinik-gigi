import Image from "next/image";
import { MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { OpenHoursBadge } from "./OpenHoursBadge";

export function Hero() {
  const whatsappUrl = buildWhatsAppUrl();
  const { heroImage } = siteConfig;

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#0A192F] pt-36 pb-20 sm:pt-44 sm:pb-24 lg:pt-[204px] lg:pb-32"
    >
      {/* Background Image: Full-bleed cover */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          style={{ objectPosition: heroImage.objectPosition ?? "center center" }}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Desktop Gradient Overlay: Horizontal dari kiri (navy gelap) ke kanan (transparan) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(7, 21, 38, 0.94) 0%, rgba(7, 21, 38, 0.90) 36%, rgba(7, 21, 38, 0.65) 58%, rgba(7, 21, 38, 0.25) 78%, rgba(7, 21, 38, 0.04) 95%, rgba(7, 21, 38, 0) 100%)",
        }}
      />

      {/* Mobile Gradient Overlay: Vertikal dari bawah (navy gelap) ke atas (transparan/lembut) */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] block lg:hidden"
        style={{
          background:
            "linear-gradient(0deg, rgba(7, 21, 38, 0.96) 0%, rgba(7, 21, 38, 0.90) 45%, rgba(7, 21, 38, 0.68) 75%, rgba(7, 21, 38, 0.38) 100%)",
        }}
      />

      {/* Konten Hero */}
      <Container className="relative z-10">
        <div className="max-w-2xl lg:max-w-3xl">
          <h1
            id="hero-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[44px] lg:leading-[1.18]"
          >
            Klinik gigi keluarga di {siteConfig.city} untuk pemeriksaan dan perawatan harian
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg sm:leading-relaxed">
            Kami melayani pembersihan karang gigi, penambalan, perawatan saluran akar, dan pemeriksaan gigi anak dengan penjelasan rencana tindakan serta biaya sebelum perawatan dimulai.
          </p>

          {/* Dua Tombol */}
          <div
            data-hide-wa-float="true"
            className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <Button
              href={whatsappUrl}
              variant="whatsapp"
              size="lg"
              className="shadow-lg shadow-emerald-950/30"
            >
              <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              <span>Konsultasi via WhatsApp</span>
            </Button>
            <Button
              href="/layanan"
              variant="secondary"
              size="lg"
              className="!border-white/25 !bg-white/10 !text-white backdrop-blur-sm transition-all hover:!border-white/45 hover:!bg-white/20"
            >
              <span>Lihat Layanan</span>
              <ArrowRight className="h-5 w-5 shrink-0 text-teal-300" strokeWidth={1.75} aria-hidden="true" />
            </Button>
          </div>

          {/* Satu baris status buka dan lokasi */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2.5 border-t border-white/15 pt-5 text-xs text-slate-300 sm:text-sm [&_.bg-tint-strong]:!bg-teal-950/80 [&_.bg-tint]:!bg-slate-800/80 [&_.border-border]:!border-white/20 [&_.text-text-muted]:!text-slate-300 [&_.text-text]:!text-teal-200">
            <OpenHoursBadge />
            <span className="inline-flex items-center gap-1.5 text-slate-200">
              <MapPin className="h-5 w-5 shrink-0 text-teal-400" strokeWidth={1.75} aria-hidden="true" />
              <span>
                {siteConfig.district}, {siteConfig.city}{" "}
                {siteConfig.isDemo ? "(Lokasi Contoh)" : ""}
              </span>
            </span>
          </div>
        </div>
      </Container>

      {/* Demo Caption */}
      {siteConfig.isDemo && (
        <div className="absolute bottom-3 right-4 z-10 hidden rounded-md border border-white/15 bg-slate-950/50 px-2.5 py-1 text-[11px] text-slate-300/80 backdrop-blur-sm sm:block">
          {heroImage.demoCaption}
        </div>
      )}
    </section>
  );
}
