import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import type { FAQItem } from "@/content/faq";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
}

export function buildPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${siteConfig.siteUrl}${cleanPath === "/" ? "" : cleanPath}`;
  const fullTitle = `${title} | ${siteConfig.name}`;
  const ogImageUrl = `${siteConfig.siteUrl}${siteConfig.ogImage.src}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: siteConfig.ogImage.width,
          height: siteConfig.ogImage.height,
          alt: siteConfig.ogImage.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
  };
}

/**
 * Menghasilkan JSON-LD bertipe Dentist dari data di siteConfig.
 * Tidak menyertakan aggregateRating palsu sesuai aturan kredibilitas layanan kesehatan.
 */
export function buildDentistJsonLd() {
  const dayCodeMap: Record<number, string> = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
  };

  const openingHoursSpecification = siteConfig.schedule
    .filter((day) => day.isOpen && day.openTime && day.closeTime)
    .map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayCodeMap[day.dayIndex],
      opens: day.openTime,
      closes: day.closeTime,
    }));

  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    telephone: siteConfig.contact.phoneNumber,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.coordinates.lat,
      longitude: siteConfig.coordinates.lng,
    },
    openingHoursSpecification,
  };
}

/**
 * Menghasilkan JSON-LD FAQPage hanya untuk daftar pertanyaan yang tampil di halaman.
 */
export function buildFaqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
