import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { galleryItems } from "@/content/gallery";
import { faqItems } from "@/content/faq";
import { buildPageMetadata, buildFaqJsonLd } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { ConsultCTA } from "@/components/sections/ConsultCTA";

export const metadata: Metadata = buildPageMetadata({
  title: `Pertanyaan Umum (FAQ) Perawatan Gigi`,
  description: `Jawaban lengkap seputar pendaftaran via WhatsApp, kisaran biaya pemeriksaan gigi, prosedur scaling, tambal gigi, dan gigi anak di ${siteConfig.name}.`,
  path: "/faq",
});

export default function FAQPage() {
  const waitingRoomImage = galleryItems[1] ?? siteConfig.heroImage;
  const faqJsonLd = buildFaqJsonLd(faqItems);
  const whatsappUrl = buildWhatsAppUrl(
    "Halo Admin, saya ingin bertanya mengenai perawatan gigi di klinik."
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header dengan Gambar Latar & Lapisan Gelap */}
      <section
        aria-labelledby="faq-page-heading"
        className="relative overflow-hidden border-b border-border bg-cta-section py-[72px] text-background lg:py-[104px]"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={waitingRoomImage.src}
            alt={waitingRoomImage.alt}
            width={waitingRoomImage.width}
            height={waitingRoomImage.height}
            priority
            fetchPriority="high"
            sizes="100vw"
            style={{ objectPosition: waitingRoomImage.objectPosition ?? "center center" }}
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-text/75"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="teal">Pusat Informasi Pasien</Badge>
            <h1
              id="faq-page-heading"
              className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-background sm:text-4xl"
            >
              Pertanyaan yang Sering Diajukan (FAQ)
            </h1>
            <p className="mt-4 text-base leading-[1.6] text-background/90 sm:text-lg">
              Kumpulan jawaban atas pertanyaan umum mengenai cara reservasi jadwal melalui WhatsApp, persiapan sebelum perawatan, hingga estimasi biaya tindakan di {siteConfig.shortName}.
            </p>
          </div>

          {siteConfig.isDemo && (
            <p className="mt-4 text-xs text-background/75">
              Latar: {waitingRoomImage.demoCaption}
            </p>
          )}
        </Container>
      </section>

      <Section variant="white" ariaLabelledBy="semua-faq-heading">
        <div className="mx-auto max-w-4xl">
          <h2 id="semua-faq-heading" className="sr-only">
            Daftar Pertanyaan dan Jawaban
          </h2>
          <Accordion items={faqItems} />

          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[10px] border border-border bg-tint p-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-semibold tracking-[-0.01em] text-text">
                Pertanyaan Anda belum terjawab di atas?
              </h2>
              <p className="mt-1 text-sm leading-[1.6] text-text-muted">
                Jangan ragu menghubungi admin kami melalui WhatsApp atau lihat{" "}
                <Link href="/layanan" className="font-semibold text-accent hover:text-accent-hover underline">
                  penjelasan detail tiap layanan
                </Link>
                .
              </p>
            </div>

            <Button href={whatsappUrl} variant="whatsapp" size="sm">
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
              <span>Tanya Admin via WhatsApp</span>
            </Button>
          </div>
        </div>
      </Section>

      <ConsultCTA />
    </>
  );
}
