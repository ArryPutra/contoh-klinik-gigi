"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const [isSuppressed, setIsSuppressed] = useState(true);
  const pathname = usePathname();
  const whatsappUrl = buildWhatsAppUrl();

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll('[data-hide-wa-float="true"]'));
    if (targets.length === 0) {
      const id = window.requestAnimationFrame(() => setIsSuppressed(false));
      return () => window.cancelAnimationFrame(id);
    }

    const visibleMap = new Map<Element, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleMap.set(entry.target, entry.isIntersecting);
        }
        const anyVisible = Array.from(visibleMap.values()).some(Boolean);
        setIsSuppressed(anyVisible);
      },
      {
        threshold: 0.1,
      }
    );

    for (const el of targets) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  if (isSuppressed) {
    return null;
  }

  return (
    <div className="fixed right-4 bottom-4 z-30 md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat dengan admin klinik gigi melalui WhatsApp"
        className="interactive-transition flex min-h-[48px] items-center gap-2 rounded-[10px] border border-background/20 bg-whatsapp px-4 py-2.5 text-sm font-medium text-background hover:bg-whatsapp-hover"
      >
        <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
        <span>Chat via WhatsApp</span>
      </a>
    </div>
  );
}
