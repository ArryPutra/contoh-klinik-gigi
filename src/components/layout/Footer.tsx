import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { mainNavItems } from "@/content/navigation";

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl();
  const currentYear = new Date().getFullYear();

  return (
    <footer
      data-hide-wa-float="true"
      className="border-t border-border bg-cta-section text-background"
    >
      <Container className="py-16">
        {/* Empat Kolom: Kontak, Jam Praktik, Tautan, Sosial */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Kolom 1: Kontak & Identitas */}
          <div>
            <Link href="/" className="text-lg font-semibold tracking-tight text-background">
              {siteConfig.name} {siteConfig.isDemo ? "(Demo)" : ""}
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-background/85">
              {siteConfig.address.street}, {siteConfig.address.city},{" "}
              {siteConfig.address.province} {siteConfig.address.postalCode}
            </p>
            <p className="mt-3 text-sm text-background/90">
              Telepon:{" "}
              <a
                href={`tel:${siteConfig.contact.phoneNumber}`}
                className="underline hover:text-background"
              >
                {siteConfig.contact.phoneDisplay}
              </a>
            </p>
            <p className="mt-1 text-sm text-background/90">
              WhatsApp: {siteConfig.contact.whatsappDisplay}
            </p>
          </div>

          {/* Kolom 2: Jam Praktik */}
          <div>
            <h2 className="text-sm font-semibold text-background">Jam Praktik</h2>
            <dl className="mt-3 space-y-1.5 text-sm text-background/85">
              {siteConfig.schedule.map((day) => (
                <div key={day.dayName} className="flex justify-between gap-4">
                  <dt>{day.dayName}</dt>
                  <dd className="font-medium text-background">
                    {day.isOpen && day.openTime && day.closeTime
                      ? `${day.openTime.replace(":", ".")} – ${day.closeTime.replace(":", ".")}`
                      : "Tutup"}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Kolom 3: Tautan */}
          <div>
            <h2 className="text-sm font-semibold text-background">Tautan</h2>
            <ul className="mt-3 space-y-2 text-sm text-background/85">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-background hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/kebijakan-privasi"
                  className="hover:text-background hover:underline"
                >
                  Kebijakan Privasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Sosial & Konsultasi */}
          <div>
            <h2 className="text-sm font-semibold text-background">Sosial &amp; Kontak</h2>
            <ul className="mt-3 space-y-2 text-sm text-background/85">
              {siteConfig.socials.map((social) => (
                <li key={social.platform}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-background hover:underline"
                  >
                    {social.platform}: {social.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background hover:underline"
                >
                  Petunjuk Arah Google Maps
                </a>
              </li>
            </ul>
            <div className="mt-5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-transition inline-flex min-h-[44px] items-center gap-2 rounded-[10px] bg-whatsapp px-4 py-2 text-sm font-medium text-background hover:bg-whatsapp-hover"
              >
                <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span>Chat via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Catatan Medis & Hak Cipta */}
        <div className="mt-12 border-t border-background/20 pt-8 text-xs leading-relaxed text-background/80">
          <p>{siteConfig.medicalDisclaimer}</p>
          {siteConfig.isDemo && (
            <p className="mt-2 text-background">
              <strong>Pemberitahuan Portofolio:</strong> {siteConfig.demoNotice}
            </p>
          )}
          <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p>
              &copy; {currentYear} {siteConfig.name}. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/kebijakan-privasi" className="hover:text-background hover:underline">
                Kebijakan Privasi
              </Link>
              <Link href="/kontak" className="hover:text-background hover:underline">
                Hubungi Klinik
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
