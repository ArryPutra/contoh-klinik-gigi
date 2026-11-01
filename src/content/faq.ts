export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Jadwal & Kunjungan" | "Perawatan & Prosedur" | "Biaya & Pembayaran" | "Gigi Anak";
  featuredOnHome: boolean;
}

export const faqItems: FAQItem[] = [
  {
    id: "faq-janji-temu",
    question: "Apakah harus membuat janji temu lewat WhatsApp sebelum datang ke klinik?",
    answer:
      "Kami sangat menyarankan Anda menghubungi admin via WhatsApp terlebih dahulu sebelum berkunjung. Konfirmasi jadwal membantu memastikan ketersediaan dokter pada jam yang Anda inginkan serta mengurangi waktu tunggu di ruang klinik. Namun, jika Anda mengalami keluhan sakit gigi mendadak, silakan segera hubungi WhatsApp atau telepon kami agar tim kami dapat mencarikan slot penanganan tercepat hari itu.",
    category: "Jadwal & Kunjungan",
    featuredOnHome: true,
  },
  {
    id: "faq-biaya-konsultasi",
    question: "Bagaimana cara mengetahui perkiraan biaya perawatan gigi saya?",
    answer:
      "Anda dapat menanyakan kisaran biaya awal setiap layanan melalui WhatsApp. Setibanya di klinik, dokter akan melakukan pemeriksaan langsung terlebih dahulu dan menjelaskan kondisi gigi Anda beserta rincian biaya tindakan sebelum prosedur dimulai. Tidak ada tindakan yang dilakukan tanpa persetujuan Anda.",
    category: "Biaya & Pembayaran",
    featuredOnHome: true,
  },
  {
    id: "faq-scaling-ngilu",
    question: "Apakah pembersihan karang gigi (scaling) membuat gigi menjadi tipis atau renggang?",
    answer:
      "Tidak. Alat ultrasonic scaler bekerja menggunakan getaran untuk melepaskan endapan karang yang menempel pada permukaan gigi, bukan mengikis lapisan email gigi. Bila setelah scaling sela gigi terasa lebih lega atau sedikit ngilu sementara, hal itu terjadi karena karang gigi yang sebelumnya menutupi sela gusi telah terangkat dan gusi sedang kembali memulihkan diri.",
    category: "Perawatan & Prosedur",
    featuredOnHome: true,
  },
  {
    id: "faq-anak-takut",
    question: "Anak saya baru pertama kali ke dokter gigi dan masih takut. Bagaimana prosesnya?",
    answer:
      "Pada kunjungan pertama anak, dokter tidak langsung melakukan tindakan yang mengejutkan. Kami menerapkan pendekatan bertahap (mengenalkan kursi gigi, cermin kecil, dan semprotan air) agar anak merasa aman terlebih dahulu. Orang tua juga dapat mendampingi anak di dalam ruang periksa.",
    category: "Gigi Anak",
    featuredOnHome: true,
  },
  {
    id: "faq-tambal-atau-saluran-akar",
    question: "Kapan gigi berlubang cukup langsung ditambal, dan kapan perlu perawatan saluran akar?",
    answer:
      "Jika lubang masih terbatas pada lapisan luar atau tengah gigi dan belum menimbulkan nyeri berdenyut spontan, umumnya gigi dapat langsung ditambal dalam satu kunjungan. Namun, bila infeksi bakteri sudah mencapai ruang saraf (ditandai nyeri berdenyut malam hari atau bengkak), saluran akar perlu dibersihkan dan disterilkan terlebih dahulu sebelum gigi ditutup rapat.",
    category: "Perawatan & Prosedur",
    featuredOnHome: true,
  },
  {
    id: "faq-sakit-mendadak",
    question: "Bolehkah gigi langsung dicabut saat sedang sakit parah atau gusi bengkak?",
    answer:
      "Pada sebagian besar kondisi bengkak akut atau peradangan berat, pencabutan tidak langsung dilakukan pada hari yang sama karena obat bius lokal tidak dapat bekerja optimal pada jaringan yang sedang meradang hebat dan berisiko menyebarkan infeksi. Dokter akan melakukan tindakan pertolongan pertama untuk meredakan nyeri serta meresepkan obat yang diperlukan sebelum menjadwalkan pencabutan saat kondisi gusi sudah tenang.",
    category: "Perawatan & Prosedur",
    featuredOnHome: true,
  },
  {
    id: "faq-jadwal-kontrol",
    question: "Seberapa sering sebaiknya melakukan pemeriksaan rutin ke dokter gigi?",
    answer:
      "Secara umum, pemeriksaan rutin dan pembersihan karang gigi dianjurkan setiap 6 bulan sekali. Pemeriksaan berkala membantu mendeteksi lubang kecil sejak dini sebelum berkembang menjadi keluhan nyeri yang memerlukan perawatan lebih kompleks.",
    category: "Jadwal & Kunjungan",
    featuredOnHome: false,
  },
  {
    id: "faq-pembayaran",
    question: "Metode pembayaran apa saja yang diterima di klinik?",
    answer:
      "Klinik menerima pembayaran tunai, transfer bank/QRIS, serta kartu debit. Untuk kepastian kerja sama asuransi atau penjaminan kesehatan tertentu pada klinik asli, silakan konfirmasi langsung kepada admin melalui WhatsApp.",
    category: "Biaya & Pembayaran",
    featuredOnHome: false,
  },
];
