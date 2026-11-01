import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { faqItems } from "@/content/faq";
import { buildPageMetadata, buildFaqJsonLd } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { DoctorsGrid } from "@/components/sections/DoctorsGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { ConsultCTA } from "@/components/sections/ConsultCTA";
import { LocationMap } from "@/components/sections/LocationMap";

export const metadata: Metadata = buildPageMetadata({
  title: `Dokter Gigi di ${siteConfig.city} untuk Keluarga`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  const homeFaqs = faqItems.filter((item) => item.featuredOnHome);
  const faqJsonLd = buildFaqJsonLd(homeFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* 1. Hero */}
      <Hero />
      {/* 2. Layanan Unggulan */}
      <ServicesGrid showAllLink={true} />
      {/* 4. Profil Dokter */}
      <DoctorsGrid showViewAllButton={true} />
      {/* 5. Keunggulan Klinik */}
      <WhyUs />
      {/* 6. Galeri Fasilitas */}
      <Gallery limit={4} showMoreLink={true} />
      {/* 7. Ulasan (Otomatis disembunyikan bila belum ada data ulasan nyata) */}
      <Reviews />
      {/* 8. FAQ */}
      <FAQ items={homeFaqs} showAllLink={true} />
      {/* 9. CTA Konsultasi */}
      <ConsultCTA />
      {/* 10. Lokasi & Peta */}
      <LocationMap />
    </>
  );
}
