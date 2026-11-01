import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, CheckCircle2, HeartHandshake, SmilePlus } from "lucide-react";
import { siteConfig } from "@/content/site";
import { faqItems } from "@/content/faq";
import { buildPageMetadata, buildFaqJsonLd } from "@/lib/seo";
import { buildPediatricWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { ConsultCTA } from "@/components/sections/ConsultCTA";

export const metadata: Metadata = buildPageMetadata({
  title: `Perawatan Gigi Anak di ${siteConfig.city}`,
  description: `Layanan pemeriksaan gigi anak, pencegahan karies gigi susu, aplikasi fluoride, dan pendekatan ramah anak di ${siteConfig.name}.`,
  path: "/gigi-anak",
});

export default function GigiAnakPage() {
  const pediatricWaUrl = buildPediatricWhatsAppUrl();
  const { pediatricImage } = siteConfig;
  const childFaqs = faqItems.filter(
    (faq) => faq.category === "Gigi Anak" || faq.id === "faq-janji-temu" || faq.id === "faq-jadwal-kontrol"
  );
  const faqJsonLd = buildFaqJsonLd(childFaqs);

  const steps = [
    {
      title: "1. Perkenalan Suasana & Alat (Tell-Show-Do)",
      description:
        "Anak diajak mengenal kursi gigi, cermin kecil, dan semprotan air dengan bahasa sederhana sebelum pemeriksaan dimulai.",
    },
    {
      title: "2. Pemeriksaan Gigi Susu & Tumbuh Kembang Gigi Tetap",
      description:
        "Dokter mengecek kebersihan gigi susu, mendeteksi karies dini, serta memantau ruang tumbuh gigi tetap anak.",
    },
    {
      title: "3. Tindakan Sesuai Kesiapan Anak & Diskusi Orang Tua",
      description:
        "Perawatan seperti pembersihan ringan, oles fluoride, atau penambalan dilakukan tanpa paksaan disertai panduan menyikat gigi di rumah.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header dengan Gambar Latar & Lapisan Gelap */}
      <section
        aria-labelledby="gigi-anak-heading"
        className="relative overflow-hidden border-b border-border bg-cta-section py-[72px] text-background lg:py-[104px]"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={pediatricImage.src}
            alt={pediatricImage.alt}
            width={pediatricImage.width}
            height={pediatricImage.height}
            priority
            fetchPriority="high"
            sizes="100vw"
            style={{ objectPosition: pediatricImage.objectPosition ?? "center 30%" }}
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-text/75"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="warm">Ramah Anak &amp; Keluarga</Badge>
            <h1
              id="gigi-anak-heading"
              className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-background sm:text-4xl"
            >
              Perawatan &amp; Pemeriksaan Gigi Anak di {siteConfig.city}
            </h1>
            <p className="mt-4 text-base leading-[1.6] text-background/90 sm:text-lg">
              Pengalaman pertama ke dokter gigi sangat menentukan kebiasaan kesehatan mulut anak hingga dewasa. Kami mengutamakan pendekatan sabar dan bertahap agar anak merasa nyaman dan aman.
            </p>

            <div data-hide-wa-float="true" className="mt-7 flex flex-wrap gap-3">
              <Button href={pediatricWaUrl} variant="whatsapp" size="lg">
                <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span>Tanya Jadwal Anak via WhatsApp</span>
              </Button>
              <Button href="/layanan/perawatan-gigi-anak" variant="secondary" size="lg">
                <span>Rincian Layanan Gigi Anak</span>
              </Button>
            </div>

            {siteConfig.isDemo && (
              <p className="mt-4 text-xs text-background/75">
                Latar: {pediatricImage.demoCaption}
              </p>
            )}
          </div>
        </Container>
      </section>

      <Section variant="white" ariaLabelledBy="pendekatan-anak-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2
              id="pendekatan-anak-heading"
              className="text-2xl font-semibold tracking-[-0.01em] text-text sm:text-3xl"
            >
              Apa Saja yang Dilakukan Saat Kunjungan Gigi Anak?
            </h2>
            <p className="mt-3 text-sm leading-[1.6] text-text-muted sm:text-base">
              Orang tua dapat mendampingi anak di dalam ruang periksa selama sesi konsultasi berlangsung. Berikut adalah cakupan perawatan gigi anak yang tersedia:
            </p>

            <ul className="mt-5 space-y-3 text-sm text-text">
              {[
                "Pemeriksaan berkala pertumbuhan gigi susu dan gigi tetap",
                "Pencegahan gigi berlubang (Topikal Aplikasi Fluoride & Fissure Sealant)",
                "Penambalan gigi susu yang berlubang",
                "Pencabutan gigi susu yang sudah goyang atau persistensi",
                "Edukasi cara menyikat gigi yang menyenangkan bagi anak",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 lg:col-span-7">
            {steps.map((step) => (
              <Card key={step.title} className="flex items-start gap-4">
                <SmilePlus
                  className="mt-1 h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-text">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-[1.6] text-text-muted">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}

            <div className="rounded-[10px] border border-border bg-tint p-5 text-sm leading-[1.6] text-text">
              <p className="flex items-start gap-2.5">
                <HeartHandshake className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <span>
                  <strong>Tips untuk Orang Tua:</strong> Pilih waktu kunjungan ketika anak sudah cukup istirahat dan tidak sedang mengantuk atau lapar (misalnya pagi hari). Lihat juga{" "}
                  <Link href="/dokter" className="font-semibold text-accent hover:text-accent-hover underline">
                    jadwal dokter gigi kami
                  </Link>
                  .
                </span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section variant="soft" ariaLabelledBy="faq-anak-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="faq-anak-heading" className="text-2xl font-semibold tracking-[-0.01em] text-text">
            Pertanyaan Orang Tua Seputar Kunjungan Gigi Anak
          </h2>
          <p className="mt-2 mb-6 text-sm leading-[1.6] text-text-muted">
            Jawaban untuk pertanyaan yang paling sering diajukan orang tua sebelum membawa anak ke klinik:
          </p>
          <Accordion items={childFaqs} />
        </div>
      </Section>

      <ConsultCTA />
    </>
  );
}
