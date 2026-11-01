export interface ContentImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  demoCaption: string;
  /** Titik fokus CSS object-position agar wajah/subjek utama tidak terpotong di mobile & desktop */
  objectPosition?: string;
}

export interface DaySchedule {
  /** 0 = Minggu, 1 = Senin, ..., 6 = Sabtu */
  dayIndex: number;
  dayName: string;
  isOpen: boolean;
  openTime?: string; // Format "HH:mm" WIB
  closeTime?: string; // Format "HH:mm" WIB
  note?: string;
}

export interface TrustPoint {
  id: string;
  title: string;
  description: string;
  badgeText?: string;
  isSampleLocation?: boolean;
}

export interface WhyUsItem {
  id: string;
  title: string;
  description: string;
}

export const siteConfig = {
  /**
   * Flag mode demo (`isDemo: true`).
   * Jika diubah menjadi `false`, maka banner demo, caption "Foto ilustrasi (demo)",
   * dan badge "Contoh / belum diverifikasi" akan otomatis disembunyikan di seluruh halaman.
   */
  isDemo: true,
  demoNotice:
    "DEMO PORTOFOLIO / CONTOH DESAIN — Seluruh nama klinik, identitas dokter, jadwal, dan foto pada halaman ini adalah contoh simulasi dan belum terverifikasi.",

  name: "Klinik Gigi Senyum Sehat",
  shortName: "Senyum Sehat Dental",
  tagline: "Klinik Gigi Keluarga & Perawatan Senyum",
  city: "Bandung",
  district: "Kec. Coblong",
  province: "Jawa Barat",
  postalCode: "40132",
  siteUrl: "https://demo-klinik-gigi.example.com",

  description:
    "Layanan pemeriksaan gigi keluarga, pembersihan karang gigi (scaling), tambal gigi, perawatan estetika, ortodonti, dan perawatan gigi anak di Bandung dengan konfirmasi jadwal via WhatsApp.",

  address: {
    street: "Jl. Contoh Kesehatan No. 45, Lebakgede, Kec. Coblong",
    city: "Kota Bandung",
    province: "Jawa Barat",
    postalCode: "40132",
    landmark: "Seberang Taman Kota / 300 meter dari Simpang Dago",
    parkingInfo: "Tersedia area parkir mobil dan motor di halaman depan klinik.",
  },

  coordinates: {
    lat: -6.8915,
    lng: 107.6107,
  },

  contact: {
    /** Nomor WhatsApp dalam format internasional tanpa tanda + atau spasi */
    whatsappNumber: "6281200000000",
    whatsappDisplay: "0812-0000-0000",
    phoneNumber: "+62222000000",
    phoneDisplay: "(022) 200-0000",
    email: "info@contoh-klinikgigi.id",
  },

  whatsappMessages: {
    general:
      "Halo Admin Klinik Gigi Senyum Sehat, saya ingin bertanya mengenai jadwal praktik dan konsultasi dokter gigi.",
    pediatric:
      "Halo Admin Klinik Gigi Senyum Sehat, saya ingin menanyakan jadwal dokter untuk pemeriksaan gigi anak.",
    urgent:
      "Halo Admin Klinik Gigi Senyum Sehat, saya sedang mengalami keluhan sakit gigi dan ingin menanyakan ketersediaan slot pemeriksaan hari ini.",
    servicePrefix: "Halo, saya ingin konsultasi mengenai ",
  },

  maps: {
    /** Tautan eksternal langsung ke rute Google Maps */
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=-6.8915,107.6107",
    /** URL profil Google Business */
    googleBusinessProfileUrl: "https://www.google.com/maps/search/?api=1&query=-6.8915,107.6107",
    embedUrl:
      "https://www.openstreetmap.org/export/embed.html?bbox=107.6007%2C-6.8995%2C107.6207%2C-6.8835&layer=mapnik&marker=-6.8915%2C107.6107",
  },

  socials: [
    {
      platform: "Instagram",
      label: "@klinikgigisenyumsehat",
      url: "https://www.instagram.com/",
    },
  ],

  hoursSummary: "Senin – Sabtu: 09.00 – 20.00 WIB (Minggu & Hari Libur Nasional Tutup)",
  timezone: "Asia/Jakarta",

  schedule: [
    { dayIndex: 1, dayName: "Senin", isOpen: true, openTime: "09:00", closeTime: "20:00" },
    { dayIndex: 2, dayName: "Selasa", isOpen: true, openTime: "09:00", closeTime: "20:00" },
    { dayIndex: 3, dayName: "Rabu", isOpen: true, openTime: "09:00", closeTime: "20:00" },
    { dayIndex: 4, dayName: "Kamis", isOpen: true, openTime: "09:00", closeTime: "20:00" },
    { dayIndex: 5, dayName: "Jumat", isOpen: true, openTime: "09:00", closeTime: "20:00" },
    {
      dayIndex: 6,
      dayName: "Sabtu",
      isOpen: true,
      openTime: "09:00",
      closeTime: "17:00",
      note: "Sesi Sabtu hingga sore",
    },
    {
      dayIndex: 0,
      dayName: "Minggu",
      isOpen: false,
      note: "Tutup (Hanya melayani konfirmasi jadwal via WhatsApp)",
    },
  ] satisfies DaySchedule[],

  /** Gambar Hero Beranda (Rasio 4:3 — 1200x900) */
  heroImage: {
    src: "/images/hero-ruang-praktik.jpg?v=2",
    alt: "Ruang praktik dokter gigi yang terang dengan kursi perawatan biru kehijauan, wastafel klinis, dan kabinet penyimpanan instrumen",
    width: 1200,
    height: 900,
    demoCaption: "Foto ilustrasi (demo)",
    objectPosition: "center center",
  } satisfies ContentImage,

  /** Gambar Open Graph Sosial & Metadata (1200x630) dari foto Hero */
  ogImage: {
    src: "/images/og-hero-klinik.jpg?v=2",
    alt: "Ruang praktik dokter gigi yang terang dengan kursi perawatan biru kehijauan, wastafel klinis, dan kabinet penyimpanan instrumen",
    width: 1200,
    height: 630,
    demoCaption: "Foto ilustrasi (demo)",
    objectPosition: "center center",
  } satisfies ContentImage,

  /** Gambar Seksi Alur Kunjungan Pertama / Komunikasi Dokter-Pasien (Rasio 3:2 — 900x600) */
  consultationImage: {
    src: "/images/kunjungan-konsultasi.jpg?v=2",
    alt: "Dokter gigi bermasker dan pasien duduk berhadapan sambil berdiskusi dengan ramah di kursi perawatan klinik yang terang",
    width: 900,
    height: 600,
    demoCaption: "Foto ilustrasi (demo)",
    objectPosition: "center 25%",
  } satisfies ContentImage,

  /** Gambar Bagian Lokasi (Rasio 3:2 — 900x600) */
  locationImage: {
    src: "/images/lokasi-klinik.jpg?v=2",
    alt: "Fasad bangunan modern berdinding kaca bersih yang memantulkan langit cerah",
    width: 900,
    height: 600,
    demoCaption: "Foto ilustrasi (demo)",
    objectPosition: "center center",
  } satisfies ContentImage,

  /** Gambar Halaman Khusus Gigi Anak /gigi-anak (Rasio 3:2 — 900x600) */
  pediatricImage: {
    src: "/images/gigi-anak-kunjungan.jpg?v=2",
    alt: "Dokter gigi mengatur lampu periksa di hadapan pasien yang duduk memakai kacamata pelindung di kursi perawatan",
    width: 900,
    height: 600,
    demoCaption: "Foto ilustrasi (demo)",
    objectPosition: "center 30%",
  } satisfies ContentImage,

  trustPoints: [
    {
      id: "hours",
      title: "Praktik Senin – Sabtu",
      description:
        "Buka pukul 09.00 – 20.00 WIB (Sabtu hingga 17.00 WIB) dengan konfirmasi jadwal terlebih dahulu melalui WhatsApp.",
      badgeText: "Jadwal Terencana",
    },
    {
      id: "location",
      title: "Akses Lokasi & Parkir Mudah",
      description:
        "Terletak di area Kec. Coblong, Bandung dengan petunjuk arah Google Maps dan area parkir kendaraan di halaman klinik.",
      badgeText: "Lokasi Strategis",
      isSampleLocation: true,
    },
    {
      id: "transparent",
      title: "Penjelasan Tindakan di Awal",
      description:
        "Dokter menjelaskan kondisi gigi, pilihan rencana perawatan, serta estimasi biaya sebelum tindakan medis dimulai.",
      badgeText: "Komunikasi Jelas",
    },
  ] satisfies TrustPoint[],

  whyUs: [
    {
      id: "sterilisasi",
      title: "Prosedur Sterilisasi Instrumen Berlapis",
      description:
        "Setiap instrumen medis melewati tahapan pencucian ultrasonik, pengemasan tersegel, dan sterilisasi autoclave sesuai standar pengendalian infeksi klinik gigi.",
    },
    {
      id: "edukasi-awam",
      title: "Diskusi dengan Bahasa yang Mudah Dipahami",
      description:
        "Kami menghindari istilah medis yang membingungkan. Kondisi gigi Anda ditunjukkan lewat kamera intraoral atau cermin agar Anda memahami alasan setiap perawatan.",
    },
    {
      id: "ramah-keluarga",
      title: "Pendekatan Sabar untuk Anak & Pasien Cemas",
      description:
        "Bagi pasien yang baru pertama kali ke dokter gigi atau anak-anak, kunjungan diawali dengan pengenalan alat secara bertahap tanpa paksaan.",
    },
    {
      id: "jadwal-wa",
      title: "Konfirmasi Jadwal Mudah lewat WhatsApp",
      description:
        "Tidak perlu membuat akun atau mengisi formulir panjang. Cukup hubungi admin via WhatsApp untuk menanyakan jam kosong dokter dan estimasi biaya awal.",
    },
  ] satisfies WhyUsItem[],

  medicalDisclaimer:
    "Catatan Medis: Seluruh informasi layanan dan kisaran biaya di situs ini bersifat edukatif umum. Rencana perawatan dan tindakan yang tepat hanya dapat ditentukan setelah pemeriksaan langsung oleh dokter gigi di klinik.",
};
