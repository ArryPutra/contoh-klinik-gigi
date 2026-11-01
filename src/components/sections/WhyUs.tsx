import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/content/site";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function WhyUs() {
  const firstVisitSteps = [
    {
      step: "01",
      title: "Konfirmasi jadwal via WhatsApp",
      description:
        "Hubungi admin untuk menanyakan ketersediaan jam dokter dan menyampaikan keluhan singkat sebelum berkunjung.",
    },
    {
      step: "02",
      title: "Pemeriksaan dan penjelasan rencana tindakan",
      description:
        "Dokter memeriksa kondisi gigi dan gusi, lalu menjelaskan pilihan perawatan serta estimasi biaya di awal.",
    },
    {
      step: "03",
      title: "Pelaksanaan perawatan sesuai persetujuan",
      description:
        "Tindakan medis dilakukan setelah Anda menyetujui rencana perawatan, diikuti panduan perawatan di rumah.",
    },
  ];

  const consultationPhoto = siteConfig.consultationImage;
  const pediatricPhoto = siteConfig.pediatricImage;

  return (
    <Section id="kunjungan-pertama" variant="soft" ariaLabelledBy="why-us-heading">
      {/* Kunjungan Pertama: Tiga langkah horizontal bernomor (vertikal di mobile) */}
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Alur Kunjungan Pertama
        </p>
        <h2
          id="why-us-heading"
          className="mt-2 text-2xl font-semibold tracking-tight text-text sm:text-3xl"
        >
          Tiga langkah sederhana sebelum memulai perawatan
        </h2>
        <p className="mt-2 text-base text-text-muted">
          Alur kunjungan dirancang jelas agar Anda mengetahui jadwal, prosedur, dan perkiraan biaya sejak awal.
        </p>
      </div>

      <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {firstVisitSteps.map((item) => (
          <li
            key={item.step}
            className="rounded-[10px] border border-border bg-background p-6 shadow-2xs"
          >
            <span className="text-sm font-semibold text-accent">{item.step}</span>
            <h3 className="mt-2 text-lg font-semibold text-text">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ol>

      {/* Variasi ritme: Dua blok teks-dan-foto bergantian */}
      <div className="mt-16 space-y-16 border-t border-border pt-16">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Standar Kebersihan &amp; Edukasi
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-text">
              Prosedur sterilisasi instrumen dan komunikasi yang transparan
            </h3>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Setiap instrumen pemeriksaan melewati tahapan pencucian dan sterilisasi autoclave sebelum digunakan. Dokter menjelaskan kondisi gigi Anda menggunakan bahasa awam agar Anda memahami alasan setiap perawatan.
            </p>
            <div className="mt-6">
              <Button href="/tentang" variant="secondary" size="sm">
                <span>Lihat Fasilitas Klinik</span>
                <ArrowRight className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
              </Button>
            </div>
          </div>

          <figure className="lg:col-span-6">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[12px] border border-border bg-background">
              <Image
                src={consultationPhoto.src}
                alt={consultationPhoto.alt}
                width={consultationPhoto.width}
                height={consultationPhoto.height}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 540px"
                style={{ objectPosition: consultationPhoto.objectPosition ?? "center 25%" }}
                className="h-full w-full object-cover"
              />
            </div>
            {siteConfig.isDemo && (
              <figcaption className="mt-1.5 text-xs text-text-muted">
                {consultationPhoto.demoCaption}
              </figcaption>
            )}
          </figure>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <figure className="lg:order-1 lg:col-span-6">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-[12px] border border-border bg-background">
              <Image
                src={pediatricPhoto.src}
                alt={pediatricPhoto.alt}
                width={pediatricPhoto.width}
                height={pediatricPhoto.height}
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 540px"
                style={{ objectPosition: pediatricPhoto.objectPosition ?? "center 30%" }}
                className="h-full w-full object-cover"
              />
            </div>
            {siteConfig.isDemo && (
              <figcaption className="mt-1.5 text-xs text-text-muted">
                {pediatricPhoto.demoCaption}
              </figcaption>
            )}
          </figure>

          <div className="lg:order-2 lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Kunjungan Keluarga
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-text">
              Pendekatan bertahap untuk anak dan pasien yang baru pertama kali periksa
            </h3>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Bagi anak-anak atau pasien yang merasa cemas, kunjungan diawali dengan pengenalan ruang periksa dan alat secara perlahan tanpa paksaan. Orang tua dapat mendampingi anak selama sesi pemeriksaan berlangsung.
            </p>
            <div className="mt-6">
              <Button href="/gigi-anak" variant="secondary" size="sm">
                <span>Panduan Kunjungan Gigi Anak</span>
                <ArrowRight className="h-5 w-5 text-accent" strokeWidth={1.75} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
