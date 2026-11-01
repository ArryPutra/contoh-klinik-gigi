import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, MessageCircle, Info } from "lucide-react";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { buildPageMetadata } from "@/lib/seo";
import { buildServiceWhatsAppUrl, buildPediatricWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ConsultCTA } from "@/components/sections/ConsultCTA";

export const metadata: Metadata = buildPageMetadata({
  title: `Daftar Layanan Perawatan Gigi di ${siteConfig.city}`,
  description: `Informasi layanan pemeriksaan gigi, scaling karang gigi, tambal gigi estetik, perawatan estetika, kawat gigi ortodonti, dan gigi anak di ${siteConfig.name}.`,
  path: "/layanan",
});

export default function LayananPage() {
  const { heroImage } = siteConfig;

  return (
    <>
      <section
        aria-labelledby="layanan-page-heading"
        className="relative overflow-hidden border-b border-border bg-cta-section py-[72px] text-background lg:py-[104px]"
      >
        {/* Gambar Latar Ruang Praktik dengan Lapisan Gelap agar Teks Terbaca Jelas */}
        <div className=" absolute inset-0 z-0">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            width={heroImage.width}
            height={heroImage.height}
            priority
            fetchPriority="high"
            sizes="100vw"
            style={{ objectPosition: heroImage.objectPosition ?? "center center" }}
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-text/75"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="teal">Daftar Layanan Klinik</Badge>
            <h1
              id="layanan-page-heading"
              className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-background sm:text-4xl"
            >
              Layanan Perawatan Gigi di {siteConfig.city}
            </h1>
            <p className="mt-4 text-base leading-[1.6] text-background/90 sm:text-lg">
              Kami menyediakan layanan perawatan gigi dasar, pencegahan, restorasi, estetika, ortodonti, hingga perawatan gigi anak. Pilih layanan di bawah ini untuk membaca tahapan prosedur dan kisaran waktu kunjungan.
            </p>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-[10px] border border-background/25 bg-text/80 p-4 text-xs text-background/95 sm:text-sm">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-tint-strong"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <p>{siteConfig.medicalDisclaimer}</p>
          </div>

          {siteConfig.isDemo && (
            <p className="mt-3 text-xs text-background/75">
              Latar: {heroImage.demoCaption}
            </p>
          )}
        </Container>
      </section>

      <Section variant="white" ariaLabelledBy="daftar-layanan-heading">
        <h2 id="daftar-layanan-heading" className="sr-only">
          Rincian Seluruh Layanan
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service) => {
            const waUrl =
              service.slug === "perawatan-gigi-anak"
                ? buildPediatricWhatsAppUrl()
                : buildServiceWhatsAppUrl(service.name);

            return (
              <Card
                key={service.slug}
                as="article"
                padding="none"
                className="flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Foto Layanan (Rasio 3:2 — 900x600) */}
                  <figure className="border-b border-border p-3 pb-0">
                    <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[12px] bg-tint">
                      <Image
                        src={service.image.src}
                        alt={service.image.alt}
                        width={service.image.width}
                        height={service.image.height}
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 540px"
                        style={{ objectPosition: service.image.objectPosition ?? "center center" }}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {siteConfig.isDemo && (
                      <figcaption className="px-1 py-2 text-xs font-medium text-text-muted">
                        {service.image.demoCaption}
                      </figcaption>
                    )}
                  </figure>

                  <div className="p-6 sm:p-7">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <Badge variant="teal">{service.category}</Badge>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted">
                        <Clock className="h-4 w-4 text-accent" strokeWidth={1.75} aria-hidden="true" />
                        <span>{service.durationEstimate}</span>
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-semibold tracking-[-0.01em] text-text">
                      <Link
                        href={`/layanan/${service.slug}`}
                        className="hover:text-accent hover:underline"
                      >
                        {service.name}
                      </Link>
                    </h3>

                    <p className="mt-3 text-sm leading-[1.6] text-text-muted sm:text-base">
                      {service.summary}
                    </p>

                    {service.priceRange && (
                      <div className="mt-5 rounded-[10px] border border-border bg-tint p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-xs font-semibold uppercase tracking-wider text-text">
                            Kisaran Biaya
                          </span>
                          {siteConfig.isDemo && (
                            <Badge variant="demo">Contoh / belum diverifikasi</Badge>
                          )}
                        </div>
                        <p className="mt-1 text-base font-semibold text-accent">
                          {service.priceRange.label}
                        </p>
                        <p className="mt-1 text-xs text-text-muted">{service.priceRange.note}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-6 py-5 sm:px-7">
                  <Link
                    href={`/layanan/${service.slug}`}
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover hover:underline"
                  >
                    <span>Baca panduan &amp; tahapan</span>
                    <ArrowRight className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                  </Link>

                  <Button href={waUrl} variant="whatsapp" size="sm">
                    <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    <span>Konsultasi Layanan Ini</span>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 rounded-[10px] border border-border bg-tint p-6 sm:p-8">
          <h2 className="text-lg font-semibold tracking-[-0.01em] text-text">
            Belum yakin perawatan mana yang Anda butuhkan?
          </h2>
          <p className="mt-2 text-sm leading-[1.6] text-text-muted">
            Anda tidak perlu mendiagnosis keluhan sendiri. Lihat profil{" "}
            <Link href="/dokter" className="font-semibold text-accent hover:text-accent-hover underline">
              dokter gigi kami
            </Link>
            , halaman khusus{" "}
            <Link href="/gigi-anak" className="font-semibold text-accent hover:text-accent-hover underline">
              perawatan gigi anak
            </Link>
            , atau kunjungi halaman{" "}
            <Link href="/kontak" className="font-semibold text-accent hover:text-accent-hover underline">
              kontak &amp; lokasi
            </Link>{" "}
            untuk menceritakan keluhan Anda melalui WhatsApp.
          </p>
        </div>
      </Section>

      <ConsultCTA />
    </>
  );
}
