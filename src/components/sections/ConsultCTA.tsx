import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";

export function ConsultCTA() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <Section variant="navy" ariaLabelledBy="consult-cta-heading">
      <div
        data-hide-wa-float="true"
        className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"
      >
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-tint-strong">
            Jadwal &amp; Konsultasi
          </p>
          <h2
            id="consult-cta-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-background sm:text-3xl"
          >
            Diskusikan keluhan gigi atau tanyakan jadwal dokter via WhatsApp
          </h2>
          <p className="mt-2.5 text-base leading-relaxed text-background/85">
            Admin kami siap menginformasikan slot jam praktik yang tersedia serta kisaran biaya awal sebelum Anda datang ke klinik.
          </p>
        </div>

        <div className="shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="interactive-transition inline-flex min-h-[48px] items-center justify-center gap-2 rounded-[10px] bg-whatsapp px-6 py-3 text-base font-medium text-background hover:bg-whatsapp-hover"
          >
            <MessageCircle className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            <span>Konsultasi via WhatsApp</span>
          </a>
        </div>
      </div>
    </Section>
  );
}
