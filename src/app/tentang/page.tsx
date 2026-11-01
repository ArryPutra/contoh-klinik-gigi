import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { siteConfig } from "@/content/site";
import { galleryItems } from "@/content/gallery";
import { buildPageMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Gallery } from "@/components/sections/Gallery";
import { LocationMap } from "@/components/sections/LocationMap";
import { ConsultCTA } from "@/components/sections/ConsultCTA";

export const metadata: Metadata = buildPageMetadata({
  title: `Tentang Klinik & Galeri Fasilitas di ${siteConfig.city}`,
  description: `Profil ${siteConfig.name}, standar sterilisasi instrumen, kenyamanan ruang praktik, dan galeri fasilitas di ${siteConfig.city}.`,
  path: "/tentang",
});

export default function TentangPage() {
  const receptionImage = galleryItems[0] ?? siteConfig.heroImage;

  const values = [
    {
      icon: ShieldCheck,
      title: "Kebersihan & Sterilisasi Tanpa Kompromi",
      description:
        "Setiap alat pemeriksaan dan tindakan melewati proses disinfeksi dan sterilisasi autoclave sebelum digunakan pada pasien berikutnya.",
    },
    {
      icon: HeartHandshake,
      title: "Komunikasi Jujur & Tanpa Tekanan",
      description:
        "Kami menjelaskan kondisi gigi Anda apa adanya, mendiskusikan alternatif perawatan yang sesuai kebutuhan, serta menyampaikan estimasi biaya sejak awal.",
    },
    {
      icon: Sparkles,
      title: "Ramah untuk Anak & Seluruh Anggota Keluarga",
      description:
        "Suasana klinik dirancang tenang dan bersahabat agar baik anak-anak maupun orang dewasa merasa nyaman selama berkonsultasi.",
    },
  ];

  return (
    <>
      {/* Header dengan Gambar Latar & Lapisan Gelap */}
      <section
        aria-labelledby="tentang-page-heading"
        className="relative overflow-hidden border-b border-border bg-cta-section py-[72px] text-background lg:py-[104px]"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={receptionImage.src}
            alt={receptionImage.alt}
            width={receptionImage.width}
            height={receptionImage.height}
            priority
            fetchPriority="high"
            sizes="100vw"
            style={{ objectPosition: receptionImage.objectPosition ?? "center 25%" }}
            className="h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-text/75"
          />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <Badge variant="teal">Profil &amp; Fasilitas</Badge>
            <h1
              id="tentang-page-heading"
              className="mt-3 text-3xl font-semibold tracking-[-0.01em] text-background sm:text-4xl"
            >
              Tentang {siteConfig.name}
            </h1>
            <p className="mt-4 text-base leading-[1.6] text-background/90 sm:text-lg">
              Kami hadir di {siteConfig.city} untuk memberikan layanan kesehatan gigi dan mulut yang mengutamakan kejelasan edukasi pasien, prosedur yang higienis, serta kemudahan akses konsultasi.
            </p>
          </div>

          {siteConfig.isDemo && (
            <p className="mt-4 text-xs text-background/75">
              Latar: {receptionImage.demoCaption}
            </p>
          )}
        </Container>
      </section>

      <Section variant="white" ariaLabelledBy="prinsip-kami-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2
              id="prinsip-kami-heading"
              className="text-2xl font-semibold tracking-[-0.01em] text-text sm:text-3xl"
            >
              Prinsip Pelayanan Kesehatan Gigi Kami
            </h2>
            <p className="mt-3 text-sm leading-[1.6] text-text-muted sm:text-base">
              Kami memahami bahwa memilih klinik gigi memerlukan rasa percaya. Oleh karena itu, seluruh alur layanan kami berfokus pada tiga hal utama: keamanan klinis, kejelasan komunikasi dokter, dan kenyamanan ruang perawatan.
            </p>
            <p className="mt-4 text-sm leading-[1.6] text-text-muted">
              Kenali juga{" "}
              <Link href="/dokter" className="font-semibold text-accent hover:text-accent-hover underline">
                profil dokter gigi kami
              </Link>{" "}
              beserta{" "}
              <Link href="/layanan" className="font-semibold text-accent hover:text-accent-hover underline">
                cakupan layanan perawatan
              </Link>{" "}
              yang tersedia.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:col-span-7">
            {values.map((val) => {
              const IconComp = val.icon;
              return (
                <Card key={val.title} className="flex items-start gap-4">
                  <IconComp
                    className="mt-1 h-5 w-5 shrink-0 text-accent"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.01em] text-text">{val.title}</h3>
                    <p className="mt-1.5 text-sm leading-[1.6] text-text-muted">
                      {val.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Galeri Lengkap 5 Foto Fasilitas (resepsi, ruang tunggu, ruang tindakan, peralatan, eksterior) */}
      <Gallery limit={5} showMoreLink={false} />

      <LocationMap />

      <ConsultCTA />
    </>
  );
}
