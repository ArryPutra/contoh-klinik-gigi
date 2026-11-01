"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { DentalLogo } from "@/components/ui/Logo";
import { mainNavItems } from "@/content/navigation";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const whatsappUrl = buildWhatsAppUrl();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    // Sinkronisasi status scroll saat komponen pertama kali dimount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "border-b border-border/80 bg-white/95 shadow-xs backdrop-blur-md"
          : "border-b border-transparent bg-transparent shadow-none"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-[10px] focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-medium focus:text-background"
      >
        Lompat ke konten utama
      </a>

      {/* Banner Demo Portofolio (transparan saat di atas, collapse saat di-scroll) */}
      {siteConfig.isDemo && (
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isScrolled
              ? "max-h-0 opacity-0 pointer-events-none"
              : "max-h-20 opacity-100"
          }`}
        >
          <div className="border-b border-white/10 bg-slate-950/40 px-3 py-1 text-xs text-slate-200 backdrop-blur-xs sm:py-2 sm:px-0">
            <Container className="flex items-center justify-between gap-4">
              <p className="truncate text-[11px] leading-tight sm:whitespace-normal sm:leading-snug">
                <strong className="font-semibold text-white">DEMO / CONTOH:</strong>{" "}
                {siteConfig.demoNotice}
              </p>
            </Container>
          </div>
        </div>
      )}

      {/* Navbar Utama */}
      <Container className="flex h-14 items-center justify-between gap-2 sm:h-16 sm:gap-3">
        {/* Logo SVG & Wordmark Teks */}
        <Link
          href="/"
          className="interactive-transition flex min-w-0 shrink items-center gap-2 py-1 hover:opacity-90"
        >
          <DentalLogo
            variant={isScrolled ? "default" : "white"}
            className="h-7 w-7 shrink-0 sm:h-9 sm:w-9"
          />
          <div className="flex min-w-0 items-baseline gap-1.5 sm:gap-2">
            <span
              className={`truncate text-sm font-semibold tracking-tight transition-colors duration-300 sm:text-lg ${
                isScrolled ? "text-text" : "text-white"
              }`}
            >
              {siteConfig.shortName}
            </span>
            <span
              className={`hidden text-xs font-medium transition-colors duration-300 sm:inline ${
                isScrolled ? "text-text-muted" : "text-slate-300"
              }`}
            >
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
                  className={`interactive-transition inline-flex min-h-[44px] items-center rounded-[10px] px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isScrolled
                      ? "text-text hover:bg-tint hover:text-accent"
                      : "text-white hover:bg-white/15 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tombol WhatsApp & Menu Mobile */}
        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Konsultasi via WhatsApp"
            className="interactive-transition inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-[10px] bg-whatsapp px-2.5 py-1.5 text-xs font-medium text-background hover:bg-whatsapp-hover sm:min-h-[44px] sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
          >
            <MessageCircle className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" strokeWidth={1.75} aria-hidden="true" />
            <span className="text-xs sm:text-sm">WhatsApp</span>
          </a>

          <MobileMenu navItems={mainNavItems} isScrolled={isScrolled} />
        </div>
      </Container>
    </header>
  );
}
