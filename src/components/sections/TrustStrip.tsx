import { Clock, MapPin, ShieldCheck, ExternalLink } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

export function TrustStrip() {
  const iconMap: Record<string, typeof Clock> = {
    hours: Clock,
    location: MapPin,
    transparent: ShieldCheck,
  };

  return (
    <section
      aria-label="Ringkasan Informasi Praktik"
      className="border-b border-[#D9E2EC] bg-white py-10 lg:py-12"
    >
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {siteConfig.trustPoints.map((point) => {
            const IconComponent = iconMap[point.id] ?? ShieldCheck;
            return (
              <div
                key={point.id}
                className="flex flex-col justify-between rounded-[12px] border border-[#D9E2EC] bg-[#F4F8FA] p-5 sm:p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#E6F3F4] text-[#0B6E77]"
                    >
                      <IconComponent className="h-5 w-5" />
                    </span>
                    {siteConfig.isDemo && point.isSampleLocation ? (
                      <Badge variant="demo">Contoh / belum diverifikasi</Badge>
                    ) : (
                      point.badgeText && <Badge variant="teal">{point.badgeText}</Badge>
                    )}
                  </div>
                  <h2 className="mt-4 text-lg font-bold text-[#0F2A43]">{point.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#334E68]">
                    {point.description}
                  </p>
                </div>

                {point.id === "location" && (
                  <div className="mt-4 pt-2">
                    <a
                      href={siteConfig.maps.googleBusinessProfileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B6E77] hover:text-[#085860] hover:underline"
                    >
                      <span>Lihat titik lokasi &amp; profil Google Maps</span>
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
