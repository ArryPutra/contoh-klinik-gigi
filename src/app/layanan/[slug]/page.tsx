import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Clock,
  MessageCircle,
  Info,
  UserCheck,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { services, getServiceBySlug } from "@/content/services";
import { faqItems } from "@/content/faq";
import { buildPageMetadata, buildFaqJsonLd } from "@/lib/seo";
import { buildServiceWhatsAppUrl, buildPediatricWhatsAppUrl } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

interface ServiceDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return buildPageMetadata({
      title: "Layanan Tidak Ditemukan",
      description: siteConfig.description,
      path: "/layanan",
    });
  }

  return buildPageMetadata({
    title: `${service.name} di ${siteConfig.city}`,
    description: service.shortDescription,
    path: `/layanan/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const waUrl =
    service.slug === "perawatan-gigi-anak"
      ? buildPediatricWhatsAppUrl()
      : buildServiceWhatsAppUrl(service.name);

  const relatedFaqs = faqItems.filter((faq) => service.relatedFaqIds.includes(faq.id));
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const faqJsonLd = relatedFaqs.length > 0 ? buildFaqJsonLd(relatedFaqs) : null;

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Header Layanan */}
      <Section variant="soft" ariaLabelledBy="service-detail-heading">
        <div className="mb-5">
          <Link
            href="/layanan"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:text-accent-hover hover:underline"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
            <span>Kembali ke Daftar Layanan</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="teal">{service.category}</Badge>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-text-muted">
                <Clock className="h-4 w-4 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <span>Estimasi durasi: {service.durationEstimate}</span>
              </span>
            </div>

            <h1
              id="service-detail-heading"
              className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-text sm:text-4xl"
            >
              {service.name}
            </h1>

            <p className="mt-4 text-base leading-[1.6] text-text-muted sm:text-lg">
              {service.summary}
            </p>

            {/* Kartu Ringkasan Biaya & CTA WhatsApp */}
            <Card className="mt-6">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                {service.priceRange && (
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-semibold text-text-muted">
                        Kisaran Biaya:
                      </span>
                      {siteConfig.isDemo && (
                        <Badge variant="demo">Contoh / belum diverifikasi</Badge>
                      )}
                    </div>
                    <p className="mt-1 text-lg font-semibold text-accent">
                      {service.priceRange.label}
                    </p>
                    <p className="mt-0.5 text-xs text-text-muted">{service.priceRange.note}</p>
                  </div>
                )}

                <div data-hide-wa-float="true" className="shrink-0">
                  <Button href={waUrl} variant="whatsapp">
                    <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                    <span>Tanya Layanan Ini via WA</span>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Foto Layanan (Rasio 3:2 — 900x600) */}
          <div className="lg:col-span-5">
            <figure className="overflow-hidden rounded-[10px] border border-border bg-background p-3 shadow-xs">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[12px] bg-tint">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  width={service.image.width}
                  height={service.image.height}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  style={{ objectPosition: service.image.objectPosition ?? "center center" }}
                  className="h-full w-full object-cover"
                />
              </div>
              {siteConfig.isDemo && (
                <figcaption className="px-1 pt-2.5 text-xs font-medium text-text-muted">
                  {service.image.demoCaption}
                </figcaption>
              )}
            </figure>
          </div>
        </div>
      </Section>

      {/* Isi Utama: Untuk Siapa & Tahapan Prosedur */}
      <Section variant="white" ariaLabelledBy="service-process-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Kolom Kiri: Kapan Dibutuhkan */}
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold tracking-[-0.01em] text-text">
              Kapan Layanan Ini Dibutuhkan?
            </h2>
            <p className="mt-2 text-sm leading-[1.6] text-text-muted">
              Layanan ini umumnya direkomendasikan bagi pasien dengan kondisi berikut:
            </p>
            <ul className="mt-5 space-y-3.5">
              {service.whoIsItFor.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-[10px] border border-border bg-tint p-4 text-sm text-text"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-start gap-3 rounded-[10px] border border-border bg-tint p-4 text-xs leading-[1.6] text-text">
              <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
              <p>
                <strong>Catatan Pemeriksaan:</strong> Kebutuhan tindakan medis yang tepat selalu ditentukan setelah dokter memeriksa kondisi gigi dan gusi Anda secara langsung di klinik.
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Gambaran Proses */}
          <div className="lg:col-span-7">
            <h2 id="service-process-heading" className="text-2xl font-semibold tracking-[-0.01em] text-text">
              Gambaran Tahapan Prosedur
            </h2>
            <p className="mt-2 text-sm leading-[1.6] text-text-muted">
              Tahapan umum saat Anda menjalani perawatan di ruang praktik kami:
            </p>

            <ol className="mt-5 space-y-4">
              {service.processSteps.map((step) => (
                <li
                  key={step.stepNumber}
                  className="flex items-start gap-4 rounded-[10px] border border-border bg-background p-5 shadow-xs"
                >
                  <span
                    aria-hidden="true"
                    className="text-xs font-semibold tracking-wider text-accent"
                  >
                    0{step.stepNumber}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-text">{step.title}</h3>
                    <p className="mt-1 text-sm leading-[1.6] text-text-muted">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[10px] border border-border bg-tint p-5">
              <div className="flex items-center gap-3">
                <UserCheck className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <div className="text-sm">
                  <p className="font-semibold text-text">Ingin tahu siapa dokter yang menangani?</p>
                  <p className="text-xs text-text-muted">
                    Lihat profil dan jadwal praktik dokter gigi kami.
                  </p>
                </div>
              </div>
              <Button href="/dokter" variant="secondary" size="sm">
                <span>Lihat Profil Dokter</span>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Terkait Layanan Ini */}
      {relatedFaqs.length > 0 && (
        <Section variant="soft" ariaLabelledBy="related-faq-heading">
          <div className="mx-auto max-w-3xl">
            <h2 id="related-faq-heading" className="text-2xl font-semibold tracking-[-0.01em] text-text">
              Pertanyaan Umum Seputar {service.name}
            </h2>
            <p className="mt-2 mb-6 text-sm leading-[1.6] text-text-muted">
              Jawaban atas hal yang sering ditanyakan pasien sebelum menjalani layanan ini:
            </p>
            <Accordion items={relatedFaqs} />
          </div>
        </Section>
      )}

      {/* Tautan Layanan Lainnya */}
      <Section variant="white" ariaLabelledBy="other-services-heading">
        <h2 id="other-services-heading" className="text-2xl font-semibold tracking-[-0.01em] text-text">
          Layanan Perawatan Gigi Lainnya
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {otherServices.map((other) => (
            <Card key={other.slug} as="article" padding="none" className="flex flex-col justify-between overflow-hidden">
              <div>
                <figure className="border-b border-border p-3 pb-0">
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[12px] bg-tint">
                    <Image
                      src={other.image.src}
                      alt={other.image.alt}
                      width={other.image.width}
                      height={other.image.height}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 360px"
                      style={{ objectPosition: other.image.objectPosition ?? "center center" }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {siteConfig.isDemo && (
                    <figcaption className="px-1 py-1.5 text-[11px] font-medium text-text-muted">
                      {other.image.demoCaption}
                    </figcaption>
                  )}
                </figure>
                <div className="p-5">
                  <Badge variant="outline">{other.category}</Badge>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.01em] text-text">
                    <Link
                      href={`/layanan/${other.slug}`}
                      className="hover:text-accent hover:underline"
                    >
                      {other.name}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-[1.6] text-text-muted">{other.shortDescription}</p>
                </div>
              </div>
              <div className="border-t border-border px-5 py-3.5">
                <Link
                  href={`/layanan/${other.slug}`}
                  className="text-sm font-semibold text-accent hover:text-accent-hover hover:underline"
                >
                  Lihat detail layanan &rarr;
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
