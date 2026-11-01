"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/content/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
    }
  }, [isOpen]);

  const whatsappUrl = buildWhatsAppUrl();

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        aria-label={isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
        onClick={() => setIsOpen((prev) => !prev)}
        className="interactive-transition inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-[10px] border border-border bg-background p-2 text-text hover:bg-tint"
      >
        {isOpen ? (
          <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <>
          <div
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-[96px] z-40 bg-text/30"
          />
          <div
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Menu Navigasi Mobile"
            className="fixed inset-x-0 top-[64px] z-50 max-h-[calc(100vh-64px)] overflow-y-auto border-b border-border bg-background px-4 py-5 sm:px-6"
          >
            <nav aria-label="Navigasi Utama Mobile">
              <ul className="space-y-1">
                {navItems.map((item, idx) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);

                  return (
                    <li key={item.href}>
                      <Link
                        ref={idx === 0 ? firstLinkRef : undefined}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`interactive-transition flex min-h-[44px] items-center justify-between rounded-[10px] px-3 py-2.5 text-base font-medium ${
                          isActive
                            ? "bg-tint text-accent"
                            : "text-text hover:bg-tint"
                        }`}
                      >
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-5 space-y-4 border-t border-border pt-4">
              <div className="text-xs leading-relaxed text-text-muted">
                <p className="font-medium text-text">{siteConfig.hoursSummary}</p>
                <p className="mt-1">{siteConfig.address.street}</p>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="interactive-transition inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] bg-whatsapp px-4 py-2.5 text-sm font-medium text-background hover:bg-whatsapp-hover"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <span>Chat via WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.phoneNumber}`}
                  onClick={() => setIsOpen(false)}
                  className="interactive-transition inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[10px] border border-border bg-background px-4 py-2.5 text-sm font-medium text-text hover:bg-tint"
                >
                  <Phone className="h-5 w-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden="true" />
                  <span>Telepon Klinik</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
