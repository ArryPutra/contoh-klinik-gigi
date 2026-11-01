import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  Smile,
  SlidersHorizontal,
  HeartHandshake,
} from "lucide-react";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ServicesGridProps {
  showAllLink?: boolean;
}

export function ServicesGrid({ showAllLink = true }: ServicesGridProps) {
  const displayedServices = services.filter((s) => s.featured);

  const iconBySlug: Record<string, typeof Stethoscope> = {
    "pemeriksaan-dan-scaling": Sparkles,
    "pemeriksaan-gigi-rutin": Stethoscope,
    "tambal-gigi-estetik": ShieldCheck,
    "perawatan-estetika-gigi": Smile,
    "kawat-gigi-dan-estetika": SlidersHorizontal,
    "perawatan-gigi-anak": HeartHandshake,
  };

  return (
    <Section id="layanan-unggulan" variant="soft" ariaLabelledBy="services-heading">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Layanan Klinik
          </p>
          <h2
            id="services-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl"
          >
            Cakupan perawatan gigi rutin dan restorasi
          </h2>
          <p className="mt-2 text-base text-text-muted">
            Setiap tindakan dimulai dengan pemeriksaan kondisi gigi dan gusi terlebih dahulu.
          </p>
        </div>

        {showAllLink && (
          <div className="shrink-0">
            <Button href="/layanan" variant="secondary" size="sm">
              <span>Lihat Semua Layanan</span>
              <ArrowRight className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
            </Button>
          </div>
        )}
      </div>

      {/* Grid 1/2/3 kolom, kartu setinggi sama, ikon polos 20px stroke 1.75 tanpa kotak warna */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedServices.map((service) => {
          const IconComponent = iconBySlug[service.slug] ?? Stethoscope;

          return (
            <Card
              key={service.slug}
              as="article"
              className="flex h-full flex-col justify-between"
            >
              <div>
                <figure className="mb-5">
                  <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[12px] border border-border bg-tint">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      width={service.image.width}
                      height={service.image.height}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 360px"
                      style={{ objectPosition: service.image.objectPosition ?? "center center" }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {siteConfig.isDemo && (
                    <figcaption className="mt-1.5 text-xs text-text-muted">
                      {service.image.demoCaption}
                    </figcaption>
                  )}
                </figure>

                <div className="flex items-center gap-2 text-accent">
                  <IconComponent className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <span className="text-xs font-medium text-text-muted">
                    {service.category}
                  </span>
                </div>

                <h3 className="mt-2.5 text-lg font-semibold text-text">
                  <Link
                    href={`/layanan/${service.slug}`}
                    className="hover:text-accent"
                  >
                    {service.name}
                  </Link>
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-text-muted">
                  {service.shortDescription}
                </p>
              </div>

              <div className="mt-6 border-t border-border pt-4">
                <Link
                  href={`/layanan/${service.slug}`}
                  className="interactive-transition inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover"
                >
                  <span>Selengkapnya</span>
                  <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
