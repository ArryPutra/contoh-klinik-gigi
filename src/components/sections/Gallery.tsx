import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { galleryItems } from "@/content/gallery";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface GalleryProps {
  limit?: number;
  showMoreLink?: boolean;
}

export function Gallery({ limit = 4, showMoreLink = true }: GalleryProps) {
  const displayedItems = limit ? galleryItems.slice(0, limit) : galleryItems;

  if (displayedItems.length === 0) {
    return null;
  }

  return (
    <Section id="galeri-fasilitas" variant="white" ariaLabelledBy="gallery-heading">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Ruang &amp; Fasilitas
          </p>
          <h2
            id="gallery-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl"
          >
            Ruang praktik dan fasilitas pendukung
          </h2>
          <p className="mt-2 text-base text-text-muted">
            Area pendaftaran, ruang tunggu, dan ruang tindakan ditata rapi untuk kenyamanan pasien selama berkunjung.
          </p>
        </div>

        {showMoreLink && (
          <div className="shrink-0">
            <Button href="/tentang" variant="secondary" size="sm">
              <span>Lihat Selengkapnya</span>
              <ArrowRight className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
            </Button>
          </div>
        )}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {displayedItems.map((item) => (
          <Card key={item.id} as="article" className="flex flex-col justify-between">
            <div>
              <figure>
                <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[12px] border border-border bg-tint">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 540px"
                    style={{ objectPosition: item.objectPosition ?? "center center" }}
                    className="h-full w-full object-cover"
                  />
                </div>
                {siteConfig.isDemo && (
                  <figcaption className="mt-1.5 text-xs text-text-muted">
                    {item.demoCaption}
                  </figcaption>
                )}
              </figure>

              <div className="mt-4">
                <Badge variant="teal">{item.category}</Badge>
                <h3 className="mt-2.5 text-lg font-semibold text-text">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
