import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { DentalLogo } from "@/components/ui/Logo";
import { MobileMenu, type NavItem } from "./MobileMenu";

export const mainNavItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  { label: "Layanan", href: "/layanan" },
  { label: "Gigi Anak", href: "/gigi-anak" },
  { label: "Dokter", href: "/dokter" },
  { label: "Tentang", href: "/tentang" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontak", href: "/kontak" },
];

export function Header() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-[10px] focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-background"
      >
        Lompat ke konten utama
      </a>

      <Container className="flex h-16 items-center justify-between gap-3">
        {/* Logo SVG & Wordmark Teks */}
        <Link
          href="/"
          className="interactive-transition flex min-w-0 items-center gap-2.5 py-1 pr-2 text-text hover:opacity-90"
        >
          <DentalLogo className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
          <div className="flex min-w-0 items-baseline gap-2">
            <span className="truncate text-base font-semibold tracking-tight text-text sm:text-lg">
              {siteConfig.shortName}
            </span>
            <span className="hidden text-xs font-medium text-text-muted sm:inline">
              {siteConfig.city} {siteConfig.isDemo ? "• Demo" : ""}
            </span>
          </div>
        </Link>

        {/* Navigasi Desktop */}
        <nav aria-label="Navigasi Utama" className="hidden lg:block">
          <ul className="flex items-center gap-1 xl:gap-2">
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="interactive-transition inline-flex min-h-[44px] items-center rounded-[10px] px-3 py-2 text-sm font-medium text-text hover:bg-tint hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tombol WhatsApp & Menu Mobile */}
        <div className="flex items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Konsultasi via WhatsApp"
            className="interactive-transition inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] bg-whatsapp px-3.5 py-2 text-xs font-medium text-background hover:bg-whatsapp-hover sm:px-4 sm:text-sm"
          >
            <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            <span>WhatsApp</span>
          </a>

          <MobileMenu navItems={mainNavItems} />
        </div>
      </Container>
    </header>
  );
}
