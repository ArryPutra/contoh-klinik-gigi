import type { ContentImage } from "./site";

export interface DoctorProfile {
  id: string;
  /** Nama jelas berlabel Contoh saat mode demo, tanpa nomor STR/SIP atau klaim pengalaman fiktif */
  name: string;
  role: string;
  focusAreas: string[];
  scheduleSummary: string;
  bio: string;
  /** Foto dokter menggunakan rasio 4:5 (640x800 px) */
  image: ContentImage;
}

export const doctors: DoctorProfile[] = [
  {
    id: "dokter-1",
    name: "drg. [Nama Dokter 1 — Contoh]",
    role: "Dokter Gigi Umum",
    focusAreas: [
      "Pemeriksaan & Pencegahan Karies Keluarga",
      "Pembersihan Karang Gigi (Scaling)",
      "Tambal Gigi & Restorasi Dasar",
    ],
    scheduleSummary: "Senin, Rabu, Jumat (09.00 – 16.00 WIB) & Sabtu (09.00 – 14.00 WIB)",
    bio: "Profil ini adalah contoh tata letak untuk menampilkan informasi dokter gigi yang bertugas beserta jadwal praktiknya. Saat digunakan oleh klinik asli, ganti dengan nama resmi dokter yang dapat diverifikasi.",
    image: {
      src: "/images/dokter-1.jpg?v=2",
      alt: "Wanita berkacamata mengenakan jas putih klinis dan stetoskop sambil memegang papan catatan di dalam ruangan terang",
      width: 640,
      height: 800,
      demoCaption: "Foto ilustrasi (demo)",
      objectPosition: "center top",
    },
  },
  {
    id: "dokter-2",
    name: "drg. [Nama Dokter 2 — Contoh]",
    role: "Dokter Gigi Umum",
    focusAreas: [
      "Pendekatan Ramah Anak & Pemeriksaan Gigi Susu",
      "Perawatan Estetika Senyum Dasar",
      "Konsultasi Rencana Perawatan Gigi",
    ],
    scheduleSummary: "Selasa, Kamis (13.00 – 20.00 WIB) & Sabtu (13.00 – 17.00 WIB)",
    bio: "Profil ini adalah contoh tata letak untuk memperlihatkan pembagian jadwal sif dokter di klinik. Seluruh informasi pada kartu ini belum diverifikasi dan disiapkan sebagai simulasi desain.",
    image: {
      src: "/images/dokter-2.jpg?v=2",
      alt: "Pria mengenakan jas putih klinis di atas pakaian kerja gelap sedang membaca layar tablet di dalam ruangan",
      width: 640,
      height: 800,
      demoCaption: "Foto ilustrasi (demo)",
      objectPosition: "center top",
    },
  },
];
