import Image from "next/image";
import { MapPin, Navigation, Clock, Car, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { OpenHoursBadge } from "./OpenHoursBadge";

export function LocationMap() {
  const { locationImage } = siteConfig;

  return (
    <Section id="lokasi-klinik" variant="white" ariaLabelledBy="location-heading">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Lokasi &amp; Jam Praktik
        </p>
        <h2
          id="location-heading"
          className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl"
        >
          Alamat dan petunjuk arah ke {siteConfig.shortName}
        </h2>
        <p className="mt-2 text-base text-text-muted">
          Informasi alamat, patokan jalan, jadwal operasional harian, serta peta lokasi klinik.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-5">
          <Card>
            <figure className="mb-6">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[12px] border border-border bg-tint">
                <Image
                  src={locationImage.src}
                  alt={locationImage.alt}
                  width={locationImage.width}
                  height={locationImage.height}
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 440px"
                  style={{ objectPosition: locationImage.objectPosition ?? "center center" }}
                  className="h-full w-full object-cover"
                />
              </div>
              {siteConfig.isDemo && (
                <figcaption className="mt-1.5 text-xs text-text-muted">
                  {locationImage.demoCaption}
                </figcaption>
              )}
            </figure>

            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <OpenHoursBadge />
              {siteConfig.isDemo && (
                <Badge variant="demo">Contoh Lokasi Demo</Badge>
              )}
            </div>

            <div className="space-y-4 text-sm text-text-muted">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-text">Alamat Klinik</h3>
                  <p className="mt-0.5">
                    {siteConfig.address.street}, {siteConfig.address.city},{" "}
                    {siteConfig.address.province} {siteConfig.address.postalCode}
                  </p>
                  <p className="mt-1 text-xs text-text-muted">
                    <strong>Patokan:</strong> {siteConfig.address.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Car className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-text">Akses &amp; Parkir</h3>
                  <p className="mt-0.5">{siteConfig.address.parkingInfo}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-text">Telepon &amp; WhatsApp</h3>
                  <p className="mt-0.5">
                    Telepon:{" "}
                    <a
                      href={`tel:${siteConfig.contact.phoneNumber}`}
                      className="font-medium text-accent underline"
                    >
                      {siteConfig.contact.phoneDisplay}
                    </a>
                  </p>
                  <p className="mt-0.5">WhatsApp: {siteConfig.contact.whatsappDisplay}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-5">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-text">
                <Clock className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
                <span>Rincian Jam Operasional</span>
              </h3>
              <dl className="mt-3 divide-y divide-border text-xs sm:text-sm">
                {siteConfig.schedule.map((item) => (
                  <div key={item.dayName} className="flex justify-between py-2">
                    <dt className="font-medium text-text">{item.dayName}</dt>
                    <dd className="text-text-muted">
                      {item.isOpen && item.openTime && item.closeTime
                        ? `${item.openTime.replace(":", ".")} – ${item.closeTime.replace(":", ".")} WIB`
                        : "Tutup"}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-6">
              <Button
                href={siteConfig.maps.directionsUrl}
                variant="primary"
                fullWidth
                external
              >
                <Navigation className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span>Buka Rute di Google Maps</span>
              </Button>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-7">
          <div className="overflow-hidden rounded-[12px] border border-border bg-background shadow-2xs">
            <div className="flex items-center justify-between border-b border-border bg-tint px-4 py-3 text-xs text-text-muted">
              <span className="font-medium text-text">
                Peta Lokasi: {siteConfig.district}, {siteConfig.city}
              </span>
              {siteConfig.isDemo && (
                <Badge variant="demo">Koordinat Contoh Demo</Badge>
              )}
            </div>
            <div className="relative h-[420px] w-full bg-tint sm:h-[580px]">
              <iframe
                src={siteConfig.maps.embedUrl}
                title={`Peta lokasi ${siteConfig.name} di ${siteConfig.city}`}
                width="700"
                height="580"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
