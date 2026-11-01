import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Phone, Navigation, Clock } from "lucide-react";
import { siteConfig } from "@/content/site";
import { buildPageMetadata } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { WhatsAppForm } from "@/components/sections/WhatsAppForm";
import { LocationMap } from "@/components/sections/LocationMap";

export const metadata: Metadata = buildPageMetadata({
  title: `Kontak, Lokasi & Konsultasi WhatsApp di ${siteConfig.city}`,
  description: `Hubungi ${siteConfig.name} melalui WhatsApp atau telepon, lihat alamat lengkap, jam operasional, dan petunjuk rute Google Maps.`,
  path: "/kontak",
});

export default function KontakPage() {
  const { locationImage } = siteConfig;
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <>
      {/* Header dengan Gambar Latar & Lapisan Gelap */}
      <section
        aria-labelledby="kontak-page-heading"
        className="relative overflow-hidden border-b border-border bg-cta-section py-[72px] text-background lg:py-[104px]"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={locationImage.src}
            alt={locationImage.alt}
            width={locationImage.width}
            height={locationImage.height}
            priority
            fetchPriority="high"
            sizes="100vw"
            style={{ objectPosition: locationImage.objectPosition ?? "center center" }}
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-text/75"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="teal">Hubungi Kami</Badge>
            <h1
              id="kontak-page-heading"
              className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-background sm:text-4xl"
            >
              Kontak, Jadwal &amp; Lokasi Klinik
            </h1>
            <p className="mt-4 text-base leading-[1.6] text-background/90 sm:text-lg">
              Cara tercepat untuk menanyakan jadwal praktik dokter atau berkonsultasi mengenai keluhan gigi Anda adalah melalui WhatsApp. Tim admin kami siap membantu pada jam operasional klinik.
            </p>
          </div>

          {siteConfig.isDemo && (
            <p className="mt-4 text-xs text-background/75">
              Latar: {locationImage.demoCaption}
            </p>
          )}
        </Container>
      </section>

      <Section variant="white" ariaLabelledBy="jalur-komunikasi-heading">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          {/* Kolom Kiri: Kontak Langsung */}
          <div className="space-y-6 lg:col-span-5">
            <h2 id="jalur-komunikasi-heading" className="text-2xl font-semibold tracking-[-0.01em] text-text">
              Saluran Kontak Langsung
            </h2>

            <Card data-hide-wa-float="true">
              <div className="flex items-start gap-3.5">
                <MessageCircle
                  className="mt-1 h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-text">Chat WhatsApp Admin</h3>
                    {siteConfig.isDemo && (
                      <Badge variant="demo">Contoh / belum diverifikasi</Badge>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-text-muted">
                    Nomor: <strong className="text-text">{siteConfig.contact.whatsappDisplay}</strong>
                  </p>
                  <p className="mt-1 text-xs text-text-muted">
                    Untuk konfirmasi jadwal kunjungan, tanya estimasi biaya, atau keluhan sakit gigi.
                  </p>
                  <div className="mt-4">
                    <Button href={whatsappUrl} variant="whatsapp" size="sm">
                      <MessageCircle className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                      <span>Chat WhatsApp Sekarang</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-3.5">
                <Phone
                  className="mt-1 h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-text">Telepon Klinik</h3>
                  <p className="mt-1 text-sm text-text-muted">
                    Nomor: <strong className="text-text">{siteConfig.contact.phoneDisplay}</strong>
                  </p>
                  <p className="mt-1 text-xs text-text-muted">
                    Aktif selama jam operasional klinik ({siteConfig.hoursSummary}).
                  </p>
                  <div className="mt-4">
                    <Button
                      href={`tel:${siteConfig.contact.phoneNumber}`}
                      variant="secondary"
                      size="sm"
                    >
                      <Phone className="h-4 w-4 text-accent" strokeWidth={1.75} aria-hidden="true" />
                      <span>Panggil Telepon</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start gap-3.5">
                <Clock
                  className="mt-1 h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-text">Petunjuk Rute &amp; Jam Buka</h3>
                  <p className="mt-1 text-sm text-text-muted">{siteConfig.address.street}</p>
                  <p className="mt-1 text-xs text-text-muted">{siteConfig.hoursSummary}</p>
                  <div className="mt-4">
                    <Button
                      href={siteConfig.maps.directionsUrl}
                      variant="primary"
                      size="sm"
                      external
                    >
                      <Navigation className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                      <span>Buka Rute di Google Maps</span>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Kolom Kanan: Formulir Perangkai Pesan WhatsApp */}
          <div className="lg:col-span-7">
            <WhatsAppForm />
          </div>
        </div>
      </Section>

      <LocationMap />
    </>
  );
}
