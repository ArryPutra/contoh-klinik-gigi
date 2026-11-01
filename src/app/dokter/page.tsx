import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  UserCheck,
  Calendar,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { doctors } from "@/content/doctors";
import { buildPageMetadata } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ConsultCTA } from "@/components/sections/ConsultCTA";

export const metadata: Metadata = buildPageMetadata({
  title: `Profil Dokter Gigi di ${siteConfig.city}`,
  description: `Informasi tim dokter gigi di ${siteConfig.name}, bidang fokus perawatan, serta jadwal praktik mingguan.`,
  path: "/dokter",
});

export default function DokterPage() {
  const { consultationImage } = siteConfig;

  return (
    <>
      {/* Header dengan Gambar Latar & Lapisan Gelap */}
      <section
        aria-labelledby="dokter-page-heading"
        className="relative overflow-hidden border-b border-border bg-cta-section py-[72px] text-background lg:py-[104px]"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={consultationImage.src}
            alt={consultationImage.alt}
            width={consultationImage.width}
            height={consultationImage.height}
            priority
            fetchPriority="high"
            sizes="100vw"
            style={{ objectPosition: consultationImage.objectPosition ?? "center 25%" }}
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-text/75"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="teal">Profil Dokter Gigi</Badge>
            <h1
              id="dokter-page-heading"
              className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-background sm:text-4xl"
            >
              Tim Dokter Gigi di {siteConfig.shortName}
            </h1>
            <p className="mt-4 text-base leading-[1.6] text-background/90 sm:text-lg">
              Kami memastikan setiap pasien mengetahui dengan jelas siapa dokter gigi yang menangani, bidang fokus pelayanannya, serta jadwal praktiknya sebelum datang ke klinik.
            </p>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-[10px] border border-background/25 bg-text/80 p-4 text-xs text-background/95 sm:text-sm">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-tint-strong" strokeWidth={1.75} aria-hidden="true" />
            <p>
              <strong className="text-background">Catatan Kredibilitas Layanan Kesehatan:</strong>{" "}
              {siteConfig.isDemo
                ? "Pada mode demo ini, identitas dan foto dokter di bawah ini adalah contoh tata letak dan belum diverifikasi. Untuk klinik nyata, ganti dengan nama resmi dokter praktik beserta foto asli."
                : "Seluruh dokter gigi yang berpraktik melayani sesuai jadwal operasional yang tercantum di bawah ini."}
            </p>
          </div>

          {siteConfig.isDemo && (
            <p className="mt-3 text-xs text-background/75">
              Latar: {consultationImage.demoCaption}
            </p>
          )}
        </Container>
      </section>

      <Section variant="white" ariaLabelledBy="daftar-dokter-heading">
        <h2 id="daftar-dokter-heading" className="sr-only">
          Daftar Dokter Gigi
        </h2>

        {doctors.length === 0 ? (
          <Card className="border-dashed text-center">
            <div className="mx-auto max-w-lg py-8">
              <AlertCircle className="mx-auto h-10 w-10 text-accent" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="mt-3 text-xl font-semibold tracking-[-0.01em] text-text">
                Informasi Dokter Akan Segera Tersedia
              </h3>
              <p className="mt-2 text-sm leading-[1.6] text-text-muted">
                Data profil dan jadwal dokter sedang diperbarui. Silakan hubungi admin kami via WhatsApp untuk menanyakan jadwal dokter yang bertugas hari ini.
              </p>
              <div className="mt-5">
                <Button href={buildWhatsAppUrl()} variant="whatsapp">
                  <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  <span>Tanya Jadwal Dokter via WhatsApp</span>
                </Button>
              </div>
            </div>
          </Card>
        ) : (
          <div className="space-y-8">
            {doctors.map((doc) => {
              const docWaUrl = buildWhatsAppUrl(
                `Halo Admin, saya ingin menanyakan ketersediaan jadwal konsultasi dengan ${doc.name}.`
              );

              return (
                <Card key={doc.id} as="article" padding="none" className="overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* Foto Dokter (Rasio 4:5 — 640x800) */}
                    <figure className="flex flex-col border-b border-border p-4 md:col-span-4 md:border-r md:border-b-0">
                      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[12px] bg-tint">
                        <Image
                          src={doc.image.src}
                          alt={doc.image.alt}
                          width={doc.image.width}
                          height={doc.image.height}
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 360px"
                          style={{ objectPosition: doc.image.objectPosition ?? "center top" }}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      {siteConfig.isDemo && (
                        <figcaption className="pt-2 text-xs font-medium text-text-muted">
                          {doc.image.demoCaption}
                        </figcaption>
                      )}
                    </figure>

                    <div className="flex flex-col justify-between p-6 sm:p-8 md:col-span-8">
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                            <UserCheck className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                            <span>{doc.role}</span>
                          </span>
                          {siteConfig.isDemo && (
                            <Badge variant="demo">Contoh / belum diverifikasi</Badge>
                          )}
                        </div>

                        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.01em] text-text">{doc.name}</h3>

                        <p className="mt-4 text-sm leading-[1.6] text-text-muted sm:text-base">
                          {doc.bio}
                        </p>

                        <div className="mt-5">
                          <h4 className="text-xs font-semibold uppercase tracking-wider text-text">
                            Bidang &amp; Fokus Pelayanan:
                          </h4>
                          <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                            {doc.focusAreas.map((area) => (
                              <li
                                key={area}
                                className="flex items-start gap-2 text-sm text-text-muted"
                              >
                                <CheckCircle2
                                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                                  strokeWidth={1.75}
                                  aria-hidden="true"
                                />
                                <span>{area}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 flex flex-col justify-between gap-4 border-t border-border pt-5 sm:flex-row sm:items-center">
                        <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                          <Calendar
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                          <div>
                            <span className="font-semibold text-text">Jadwal Praktik: </span>
                            <span className="text-text-muted">{doc.scheduleSummary}</span>
                          </div>
                        </div>

                        <Button href={docWaUrl} variant="whatsapp" size="sm">
                          <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                          <span>Tanya Slot Jadwal</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}

        <div className="mt-10 rounded-[10px] border border-border bg-tint p-6 text-sm leading-[1.6] text-text-muted">
          <p>
            Ingin melihat daftar tindakan yang tersedia di klinik kami? Kunjungi halaman{" "}
            <Link href="/layanan" className="font-semibold text-accent hover:text-accent-hover underline">
              Daftar Layanan Gigi
            </Link>{" "}
            atau lihat foto ruang tindakan kami di halaman{" "}
            <Link href="/tentang" className="font-semibold text-accent hover:text-accent-hover underline">
              Tentang &amp; Fasilitas Klinik
            </Link>
            .
          </p>
        </div>
      </Section>

      <ConsultCTA />
    </>
  );
}
