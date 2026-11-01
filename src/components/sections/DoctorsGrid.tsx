import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle, AlertCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { doctors } from "@/content/doctors";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface DoctorsGridProps {
  showViewAllButton?: boolean;
}

export function DoctorsGrid({ showViewAllButton = true }: DoctorsGridProps) {
  const whatsappUrl = buildWhatsAppUrl(
    "Halo Admin, saya ingin menanyakan jadwal praktik dokter gigi yang tersedia minggu ini."
  );

  return (
    <Section id="profil-dokter" variant="white" ariaLabelledBy="doctors-heading">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Tim Dokter
          </p>
          <h2
            id="doctors-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl"
          >
            Profil dokter gigi dan jadwal praktik
          </h2>
          <p className="mt-2 text-base text-text-muted">
            Informasi dokter yang bertugas beserta pembagian jadwal hari praktik di klinik.
          </p>
        </div>

        {showViewAllButton && (
          <div className="shrink-0">
            <Button href="/dokter" variant="secondary" size="sm">
              <span>Lihat Profil Lengkap</span>
              <ArrowRight className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
            </Button>
          </div>
        )}
      </div>

      {doctors.length === 0 ? (
        <Card className="mt-8 border-dashed text-center">
          <div className="mx-auto max-w-lg py-6">
            <AlertCircle className="mx-auto h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
            <h3 className="mt-3 text-lg font-semibold text-text">
              Informasi profil dokter akan segera tersedia
            </h3>
            <p className="mt-2 text-sm text-text-muted">
              Silakan hubungi admin melalui WhatsApp untuk menanyakan jadwal dokter yang bertugas hari ini.
            </p>
            <div className="mt-5">
              <Button href={whatsappUrl} variant="whatsapp" size="sm">
                <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                <span>Tanya Jadwal Dokter via WhatsApp</span>
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {doctors.map((doc) => (
            <Card
              key={doc.id}
              as="article"
              className="grid grid-cols-1 items-start gap-6 sm:grid-cols-12"
            >
              {/* Foto Potret 4:5 (rounded-[12px]) */}
              <figure className="sm:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[12px] border border-border bg-tint">
                  <Image
                    src={doc.image.src}
                    alt={doc.image.alt}
                    width={doc.image.width}
                    height={doc.image.height}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 240px"
                    style={{ objectPosition: doc.image.objectPosition ?? "center top" }}
                    className="h-full w-full object-cover"
                  />
                </div>
                {siteConfig.isDemo && (
                  <figcaption className="mt-1.5 text-xs text-text-muted">
                    {doc.image.demoCaption}
                  </figcaption>
                )}
              </figure>

              {/* Nama, Bidang, Jadwal & Tautan Profil */}
              <div className="flex h-full flex-col justify-between sm:col-span-7">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-medium text-accent">{doc.role}</span>
                    {siteConfig.isDemo && (
                      <Badge variant="demo">Contoh / belum diverifikasi</Badge>
                    )}
                  </div>

                  <h3 className="mt-2 text-xl font-semibold text-text">{doc.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{doc.bio}</p>

                  <div className="mt-4 border-t border-border pt-3">
                    <p className="text-xs font-semibold text-text">Fokus layanan:</p>
                    <p className="mt-1 text-xs leading-relaxed text-text-muted">
                      {doc.focusAreas.join(" • ")}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="text-xs text-text-muted">{doc.scheduleSummary}</span>
                  <Link
                    href="/dokter"
                    className="interactive-transition inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
                  >
                    <span>Lihat profil</span>
                    <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </Section>
  );
}
