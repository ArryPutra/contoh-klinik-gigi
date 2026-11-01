import { ExternalLink, MessageSquareQuote } from "lucide-react";
import { reviews } from "@/content/reviews";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Reviews() {
  const verifiedReviews = reviews.filter((r) => r.verifiedPermission);

  if (verifiedReviews.length === 0) {
    return null;
  }

  return (
    <Section id="ulasan-pasien" variant="soft" ariaLabelledBy="reviews-heading">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-wider text-accent">
            Ulasan Pasien
          </p>
          <h2
            id="reviews-heading"
            className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl"
          >
            Kutipan ulasan pasien di Google Maps
          </h2>
          <p className="mt-2 text-base text-text-muted">
            Ulasan di bawah ini dikutip dari profil Google Business klinik dengan izin pasien.
          </p>
        </div>

        <div className="shrink-0">
          <Button
            href={siteConfig.maps.googleBusinessProfileUrl}
            variant="secondary"
            size="sm"
            external
          >
            <span>Baca Ulasan di Google</span>
            <ExternalLink className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
          </Button>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {verifiedReviews.map((review) => (
          <Card key={review.id} as="article">
            <div className="flex items-start gap-4">
              <MessageSquareQuote
                className="mt-1 h-5 w-5 shrink-0 text-accent"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <div>
                <blockquote className="text-base leading-relaxed text-text">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <p className="mt-3 text-xs font-semibold text-text-muted">
                  {review.authorName} &bull; {review.treatmentContext} ({review.dateLabel})
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
