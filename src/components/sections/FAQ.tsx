import { MessageCircle, ArrowRight } from "lucide-react";
import { faqItems, type FAQItem } from "@/content/faq";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";

interface FAQProps {
  items?: FAQItem[];
  showAllLink?: boolean;
}

export function FAQ({ items, showAllLink = true }: FAQProps) {
  const displayedFaqs = items ?? faqItems.filter((item) => item.featuredOnHome);
  const whatsappUrl = buildWhatsAppUrl(
    "Halo Admin, saya ingin menanyakan hal yang belum tercantum di halaman FAQ klinik."
  );

  return (
    <Section id="pertanyaan-umum" variant="soft" ariaLabelledBy="faq-heading">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Pertanyaan Umum
          </p>
          <h2
            id="faq-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl"
          >
            Informasi sebelum berkunjung ke klinik
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-muted">
            Jawaban seputar konfirmasi jadwal, perkiraan biaya pemeriksaan, serta prosedur perawatan gigi.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <Button href={whatsappUrl} variant="whatsapp" size="sm">
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              <span>Tanya via WhatsApp</span>
            </Button>
            {showAllLink && (
              <Button href="/faq" variant="ghost" size="sm">
                <span>Lihat Semua Pertanyaan</span>
                <ArrowRight className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </Button>
            )}
          </div>
        </div>

        <div className="lg:col-span-8">
          <Accordion items={displayedFaqs} />
        </div>
      </div>
    </Section>
  );
}
