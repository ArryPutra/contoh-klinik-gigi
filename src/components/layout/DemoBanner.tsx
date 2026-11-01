import { siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function DemoBanner() {
  if (!siteConfig.isDemo) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Pemberitahuan Mode Demo Portofolio"
      className="border-b border-border bg-tint-strong py-2 text-xs text-text"
    >
      <Container className="flex items-center justify-between gap-4">
        <p className="leading-snug">
          <strong className="font-semibold text-text">DEMO / CONTOH:</strong>{" "}
          {siteConfig.demoNotice}
        </p>
      </Container>
    </div>
  );
}
