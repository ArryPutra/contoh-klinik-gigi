import type { ContentImage } from "./site";

export interface ServiceProcessStep {
  stepNumber: number;
  title: string;
  description: string;
}

export interface ServiceItem {
  slug: string;
  name: string;
  category:
    | "Pemeriksaan"
    | "Pencegahan"
    | "Restorasi"
    | "Estetika"
    | "Ortodonti"
    | "Anak & Keluarga";
  shortDescription: string;
  summary: string;
  whoIsItFor: string[];
  processSteps: ServiceProcessStep[];
  durationEstimate: string;
  priceRange?: {
    label: string;
    note: string;
  };
  /** Gambar layanan menggunakan rasio 3:2 (900x600 px) */
  image: ContentImage;
  whatsappMessage: string;
  relatedFaqIds: string[];
  featured: boolean;
}

export const services: ServiceItem[] = [
  {
    slug: "pemeriksaan-dan-scaling",
    name: "Pembersihan Karang Gigi (Scaling)",
    category: "Pencegahan",
    shortDescription:
      "Pembersihan plak dan karang gigi menggunakan alat ultrasonic scaler untuk menjaga kesehatan gusi serta kesegaran napas.",
    summary:
      "Karang gigi yang menumpuk di garis gusi tidak dapat hilang hanya dengan menyikat gigi di rumah. Tindakan scaling membantu mengangkat endapan mineral yang memicu gusi mudah berdarah atau meradang.",
    whoIsItFor: [
      "Pasien yang belum melakukan pembersihan karang gigi dalam 6 bulan terakhir.",
      "Pasien yang mengalami keluhan gusi sering berdarah saat menyikat gigi atau bau mulut yang menetap.",
      "Pasien yang ingin membersihkan permukaan gigi sebelum memulai perawatan tambal atau kawat gigi.",
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Pemeriksaan Kondisi Gigi & Gusi",
        description:
          "Dokter memeriksa permukaan gigi, kondisi gusi, serta mendengarkan keluhan yang Anda rasakan.",
      },
      {
        stepNumber: 2,
        title: "Pembersihan dengan Ultrasonic Scaler",
        description:
          "Getaran halus dan semprotan air dari alat scaler melepaskan karang gigi di sela-sela gigi dan batas gusi.",
      },
      {
        stepNumber: 3,
        title: "Pemolesan (Polishing) & Edukasi Perawatan",
        description:
          "Permukaan gigi dipoles agar halus kembali, disertai saran cara menyikat gigi yang sesuai dengan kondisi gusi Anda.",
      },
    ],
    durationEstimate: "30 – 45 menit per kunjungan",
    priceRange: {
      label: "Mulai Rp250.000 – Rp450.000",
      note: "Bergantung pada ketebalan karang gigi (ringan, sedang, atau penuh di dua rahang).",
    },
    image: {
      src: "/images/layanan-scaling.jpg?v=2",
      alt: "Dokter gigi bermasker dan bersarung tangan melakukan pembersihan gigi pada pasien berkacamata pelindung menggunakan selang hisap dan instrumen klinis",
      width: 900,
      height: 600,
      demoCaption: "Foto ilustrasi (demo)",
      objectPosition: "center 30%",
    },
    whatsappMessage: "Pembersihan Karang Gigi (Scaling)",
    relatedFaqIds: ["faq-scaling-ngilu", "faq-jadwal-kontrol", "faq-biaya-konsultasi"],
    featured: true,
  },
  {
    slug: "pemeriksaan-gigi-rutin",
    name: "Pemeriksaan & Konsultasi Gigi Rutin",
    category: "Pemeriksaan",
    shortDescription:
      "Evaluasi menyeluruh kondisi gigi, gusi, dan rongga mulut untuk mendeteksi lubang dini serta menyusun rencana perawatan yang jelas.",
    summary:
      "Banyak masalah gigi berawal dari karies kecil yang belum menimbulkan rasa sakit. Melalui pemeriksaan berkala, dokter membantu memetakan kondisi tiap gigi dan memberikan penjelasan transparan mengenai tindakan yang diperlukan maupun yang belum diperlukan.",
    whoIsItFor: [
      "Pasien dewasa atau keluarga yang ingin melakukan kontrol rutin setiap 6 bulan.",
      "Pasien yang merasakan gejala awal seperti gigi ngilu sesaat atau sisa makanan sering terselip.",
      "Pasien yang ingin meminta pendapat medis dan rincian rencana perawatan sebelum memulai tindakan.",
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Diskusi Keluhan & Riwayat Kesehatan",
        description:
          "Dokter mendengarkan keluhan utama Anda serta mencatat riwayat kesehatan umum atau alergi obat.",
      },
      {
        stepNumber: 2,
        title: "Pemeriksaan Visual Gigi & Jaringan Gusi",
        description:
          "Setiap gigi diperiksa secara cermat untuk melihat adanya karies dini, tambalan lama yang aus, atau peradangan gusi.",
      },
      {
        stepNumber: 3,
        title: "Penjelasan Rencana Perawatan & Estimasi Biaya",
        description:
          "Dokter merangkum hasil temuan dengan bahasa awam dan menyampaikan opsi perawatan beserta perkiraan biayanya.",
      },
    ],
    durationEstimate: "20 – 30 menit",
    priceRange: {
      label: "Mulai Rp100.000 – Rp200.000",
      note: "Biaya konsultasi pemeriksaan awal sebelum tindakan medis.",
    },
    image: {
      src: "/images/layanan-pemeriksaan.jpg?v=2",
      alt: "Dokter gigi duduk di samping pasien pada kursi perawatan sambil menunjuk hasil foto rontgen gigi di layar monitor",
      width: 900,
      height: 600,
      demoCaption: "Foto ilustrasi (demo)",
      objectPosition: "center top",
    },
    whatsappMessage: "Pemeriksaan & Konsultasi Gigi Rutin",
    relatedFaqIds: ["faq-janji-temu", "faq-jadwal-kontrol", "faq-biaya-konsultasi"],
    featured: true,
  },
  {
    slug: "tambal-gigi-estetik",
    name: "Tambal Gigi Berlubang & Restorasi",
    category: "Restorasi",
    shortDescription:
      "Penambalan gigi berlubang, patah ringan, atau terkikis dengan bahan komposit sewarna gigi alami untuk mengembalikan fungsi kunyah.",
    summary:
      "Lubang kecil pada gigi yang dibiarkan dapat bertambah dalam hingga mencapai saraf gigi. Penambalan dengan resin komposit bertujuan menutup kavitas sekaligus menyesuaikan warna tambalan dengan gigi asli di sekitarnya.",
    whoIsItFor: [
      "Pasien dengan gigi berlubang yang terasa mengganjal saat makan atau ngilu sesaat ketika terkena minuman dingin/manis.",
      "Pasien dengan gigi depan yang gompal ringan akibat benturan dan ingin memperbaiki bentuknya.",
      "Pasien yang memiliki tambalan lama yang sudah berubah warna, retak, atau bocor di bagian tepi.",
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Evaluasi Kedalaman Lubang Gigi",
        description:
          "Dokter memastikan apakah lubang masih berada di lapisan email/dentin atau sudah mendekati ruang saraf.",
      },
      {
        stepNumber: 2,
        title: "Pembersihan Jaringan Karies",
        description:
          "Bagian gigi yang lunak akibat bakteri dibersihkan secara hati-hati agar jaringan sehat tetap terjaga.",
      },
      {
        stepNumber: 3,
        title: "Pelapisan Komposit & Penyesuaian Gigitan",
        description:
          "Bahan tambal sewarna gigi diaplikasikan berlapis, disinari hingga mengeras, lalu dirapikan agar nyaman saat menggigit.",
      },
    ],
    durationEstimate: "30 – 60 menit per gigi",
    priceRange: {
      label: "Mulai Rp300.000 – Rp600.000 per gigi",
      note: "Disesuaikan dengan ukuran, posisi, dan jumlah bidang lubang pada gigi.",
    },
    image: {
      src: "/images/layanan-tambal.jpg?v=2",
      alt: "Dokter gigi berseragam medis memeriksa rongga mulut pasien menggunakan cermin gigi dan instrumen restorasi di kursi perawatan",
      width: 900,
      height: 600,
      demoCaption: "Foto ilustrasi (demo)",
      objectPosition: "center 20%",
    },
    whatsappMessage: "Tambal Gigi Berlubang & Restorasi",
    relatedFaqIds: ["faq-tambal-atau-saluran-akar", "faq-biaya-konsultasi"],
    featured: true,
  },
  {
    slug: "perawatan-estetika-gigi",
    name: "Perawatan Estetika & Pencerahan Senyum",
    category: "Estetika",
    shortDescription:
      "Konsultasi dan tindakan perawatan tampilan gigi seperti pencerahan warna gigi (bleaching) dan perbaikan proporsi gigi depan.",
    summary:
      "Perawatan estetika gigi dilakukan dengan tetap memprioritaskan kesehatan jaringan gigi dan gusi. Dokter akan mengevaluasi kondisi email gigi Anda terlebih dahulu sebelum merekomendasikan prosedur pencerahan warna atau restorasi estetik yang aman.",
    whoIsItFor: [
      "Pasien yang ingin mencerahkan warna gigi yang tampak menguning akibat konsumsi kopi, teh, atau faktor usia.",
      "Pasien yang ingin memperbaiki celah kecil atau bentuk permukaan gigi depan agar tampak lebih rapi.",
      "Pasien yang membutuhkan penjelasan realistis mengenai pilihan prosedur estetika beserta perawatannya.",
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Pemeriksaan Kesehatan Email & Gusi",
        description:
          "Memastikan tidak ada karang gigi, gusi meradang, atau lubang gigi terbuka sebelum prosedur estetika dilakukan.",
      },
      {
        stepNumber: 2,
        title: "Penentuan Warna & Rencana Tindakan",
        description:
          "Dokter mendiskusikan tingkat kecerahan atau bentuk restorasi yang selaras dengan wajah Anda.",
      },
      {
        stepNumber: 3,
        title: "Pelaksanaan Prosedur & Panduan Pascatindakan",
        description:
          "Tindakan dilakukan di ruang praktik disertai panduan menjaga warna gigi setelah perawatan.",
      },
    ],
    durationEstimate: "45 – 60 menit",
    priceRange: {
      label: "Konsultasi Awal Mulai Rp150.000",
      note: "Rincian biaya tindakan disampaikan setelah dokter memeriksa kondisi gigi secara langsung.",
    },
    image: {
      src: "/images/layanan-estetika.jpg?v=2",
      alt: "Pasien wanita tersenyum di kursi perawatan gigi saat berbincang dengan dokter gigi yang mengenakan sarung tangan",
      width: 900,
      height: 600,
      demoCaption: "Foto ilustrasi (demo)",
      objectPosition: "center 20%",
    },
    whatsappMessage: "Konsultasi Estetika Gigi",
    relatedFaqIds: ["faq-jadwal-kontrol", "faq-biaya-konsultasi"],
    featured: true,
  },
  {
    slug: "kawat-gigi-dan-estetika",
    name: "Perawatan Kawat Gigi (Ortodonti)",
    category: "Ortodonti",
    shortDescription:
      "Perencanaan perawatan kawat gigi (behel) untuk merapikan susunan gigi berjejal, renggang, serta memperbaiki fungsi gigitan rahang.",
    summary:
      "Susunan gigi yang berjejal membuat sela-sela gigi lebih sulit dibersihkan dan berisiko menumpuk plak. Perawatan ortodonti bertujuan mengarahkan posisi gigi secara bertahap dan terukur melalui kontrol berkala.",
    whoIsItFor: [
      "Pasien remaja maupun dewasa dengan susunan gigi berjejal, renggang, atau posisi gigitan kurang selaras.",
      "Pasien yang ingin berkonsultasi mengenai tahapan persiapan sebelum pemasangan behel.",
      "Pasien yang membutuhkan jadwal kontrol kawat gigi yang terencana.",
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Analisis Susunan Gigi & Pencetakan Model",
        description:
          "Dokter memeriksa lengkung rahang, mencetak model gigi, serta mengarahkan rujukan foto rontgen panoramik/sefalometri bila diperlukan.",
      },
      {
        stepNumber: 2,
        title: "Perawatan Pendahuluan (Scaling / Tambal)",
        description:
          "Seluruh karang gigi dan gigi berlubang ditangani terlebih dahulu agar jaringan pendukung gigi sehat saat kawat dipasang.",
      },
      {
        stepNumber: 3,
        title: "Pemasangan & Kontrol Berkala",
        description:
          "Pemasangan alat ortodonti diikuti jadwal kontrol rutin untuk memantau pergerakan gigi secara bertahap.",
      },
    ],
    durationEstimate: "45 – 60 menit untuk pemasangan awal",
    priceRange: {
      label: "Konsultasi Ortodonti Mulai Rp150.000",
      note: "Rincian biaya paket pemasangan dan kontrol disampaikan setelah evaluasi klinis.",
    },
    image: {
      src: "/images/layanan-ortodonti.jpg?v=2",
      alt: "Tangan dokter gigi bersarung tangan memeriksa braket dan kawat gigi pasien menggunakan cermin mulut serta instrumen ortodonti",
      width: 900,
      height: 600,
      demoCaption: "Foto ilustrasi (demo)",
      objectPosition: "center bottom",
    },
    whatsappMessage: "Konsultasi Kawat Gigi (Ortodonti / Behel)",
    relatedFaqIds: ["faq-jadwal-kontrol", "faq-biaya-konsultasi"],
    featured: true,
  },
  {
    slug: "perawatan-gigi-anak",
    name: "Perawatan & Pencegahan Gigi Anak",
    category: "Anak & Keluarga",
    shortDescription:
      "Kunjungan ramah anak untuk pemeriksaan gigi susu, aplikasi fluoride, penambalan gigi anak, dan pencabutan gigi susu yang sudah goyang.",
    summary:
      "Kesehatan gigi susu berpengaruh langsung pada ruang tumbuh gigi tetap anak serta kenyamanan makan sehari-hari. Kami mengutamakan pendekatan bertahap (tell-show-do) agar anak mengenal suasana klinik dengan tenang.",
    whoIsItFor: [
      "Orang tua yang ingin mengenalkan anak ke dokter gigi sejak gigi pertama tumbuh atau usia prasekolah.",
      "Anak yang memerlukan perlindungan tambahan pada gigi geraham melalui aplikasi topikal fluoride atau fissure sealant.",
      "Anak yang memiliki gigi susu berlubang atau gigi susu goyang disertai gigi tetap yang mulai muncul di belakangnya.",
    ],
    processSteps: [
      {
        stepNumber: 1,
        title: "Pengenalan Alat & Adaptasi Anak",
        description:
          "Dokter mengajak anak berkenalan dan menunjukkan fungsi cermin gigi serta semprotan angin/air dengan bahasa sederhana.",
      },
      {
        stepNumber: 2,
        title: "Pemeriksaan Gigi Susu & Pertumbuhan Rahang",
        description:
          "Mengecek kebersihan gigi, urutan pergantian gigi susu ke gigi tetap, serta potensi karies dini.",
      },
      {
        stepNumber: 3,
        title: "Tindakan Pencegahan / Perawatan & Diskusi Orang Tua",
        description:
          "Melakukan tindakan sesuai kesiapan anak dan berdiskusi dengan orang tua mengenai kebiasaan menyikat gigi di rumah.",
      },
    ],
    durationEstimate: "30 – 45 menit (menyesuaikan kenyamanan anak)",
    priceRange: {
      label: "Mulai Rp200.000 – Rp450.000",
      note: "Bergantung pada jenis tindakan (pemeriksaan, aplikasi fluoride, tambal gigi susu, atau cabut gigi susu).",
    },
    image: {
      src: "/images/layanan-anak.jpg?v=2",
      alt: "Model anatomi rahang gigi di atas meja periksa bersama deretan instrumen kedokteran gigi berwarna-warni untuk peragaan perawatan",
      width: 900,
      height: 600,
      demoCaption: "Foto ilustrasi (demo)",
      objectPosition: "center center",
    },
    whatsappMessage: "Perawatan & Pemeriksaan Gigi Anak",
    relatedFaqIds: ["faq-anak-takut", "faq-jadwal-kontrol"],
    featured: true,
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((service) => service.slug === slug);
}
