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
      className="border-b border-border bg-background py-[72px] lg:py-[104px]"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Kolom Teks Kiri (Mobile: teks dulu, foto di bawah) */}
          <div className="lg:col-span-6">
            <h1
              id="hero-heading"
              className="text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-[42px] lg:leading-[1.18]"
            >
              Klinik gigi keluarga di {siteConfig.city} untuk pemeriksaan dan perawatan harian
            </h1>

            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Kami melayani pembersihan karang gigi, penambalan, perawatan saluran akar, dan pemeriksaan gigi anak dengan penjelasan rencana tindakan serta biaya sebelum perawatan dimulai.
            </p>

            {/* Dua Tombol */}
            <div
              data-hide-wa-float="true"
              className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <Button href={whatsappUrl} variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span>Konsultasi via WhatsApp</span>
              </Button>
              <Button href="/layanan" variant="secondary" size="lg">
                <span>Lihat Layanan</span>
                <ArrowRight className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
              </Button>
            </div>

            {/* Satu baris status buka dan lokasi */}
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-xs text-text-muted sm:text-sm">
              <OpenHoursBadge />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <span>
                  {siteConfig.district}, {siteConfig.city}{" "}
                  {siteConfig.isDemo ? "(Lokasi Contoh)" : ""}
                </span>
              </span>
            </div>
          </div>

          {/* Kolom Foto Nyata Kanan */}
          <div className="lg:col-span-6">
            <figure>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[12px] border border-border bg-tint">
                <Image
                  src={heroImage.src}
                  alt={heroImage.alt}
                  width={heroImage.width}
                  height={heroImage.height}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  style={{ objectPosition: heroImage.objectPosition ?? "center center" }}
                  className="h-full w-full object-cover"
                />
              </div>
              {siteConfig.isDemo && (
                <figcaption className="mt-2 text-xs text-text-muted">
                  {heroImage.demoCaption}
                </figcaption>
              )}
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
