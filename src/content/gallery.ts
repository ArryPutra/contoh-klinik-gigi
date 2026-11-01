import type { ContentImage } from "./site";

export interface GalleryItem extends ContentImage {
  id: string;
  title: string;
  description: string;
  category: "Resepsionis" | "Ruang Tunggu" | "Ruang Tindakan" | "Peralatan & Sterilisasi" | "Eksterior";
}

/**
 * Daftar foto fasilitas klinik pada Beranda dan halaman /tentang.
 * Seluruh gambar menggunakan rasio 3:2 (900x600 px) dari folder public/images/.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "tentang-resepsi",
    title: "Area Resepsionis & Pendaftaran Pasien",
    description:
      "Meja penerimaan pasien untuk konfirmasi kehadiran jadwal WhatsApp serta penjelasan administrasi awal secara ramah.",
    category: "Resepsionis",
    src: "/images/tentang-resepsi.jpg?v=2",
    alt: "Tenaga medis berjas putih menyerahkan papan formulir pendaftaran kepada pengunjung di meja penerimaan dengan tirai jendela terang",
    width: 900,
    height: 600,
    demoCaption: "Foto ilustrasi (demo)",
    objectPosition: "center 25%",
  },
  {
    id: "tentang-ruang-tunggu",
    title: "Ruang Tunggu Pasien & Keluarga",
    description:
      "Area tunggu dengan tempat duduk nyaman dan suasana tenang sembari menunggu panggilan masuk ke ruang periksa.",
    category: "Ruang Tunggu",
    src: "/images/tentang-ruang-tunggu.jpg?v=2",
    alt: "Ruang tunggu berlantai bersih dengan sofa abu-abu, kursi berlengan, lampu berdiri, dan partisi kaca",
    width: 900,
    height: 600,
    demoCaption: "Foto ilustrasi (demo)",
    objectPosition: "center center",
  },
  {
    id: "tentang-ruang-tindakan",
    title: "Ruang Tindakan & Kursi Periksa Gigi",
    description:
      "Ruang pemeriksaan dan perawatan gigi dengan tata letak ergonomis untuk menjaga privasi dan kenyamanan pasien.",
    category: "Ruang Tindakan",
    src: "/images/tentang-ruang-tindakan.jpg?v=2",
    alt: "Ruang tindakan klinik gigi yang luas dengan kursi perawatan berwarna biru kehijauan, layar monitor, dan kabinet putih",
    width: 900,
    height: 600,
    demoCaption: "Foto ilustrasi (demo)",
    objectPosition: "center center",
  },
  {
    id: "tentang-peralatan",
    title: "Instrumen Medis & Standar Kebersihan",
    description:
      "Peralatan pemeriksaan gigi yang ditata bersih dan melewati prosedur sterilisasi sebelum digunakan pada setiap pasien.",
    category: "Peralatan & Sterilisasi",
    src: "/images/tentang-peralatan.jpg?v=2",
    alt: "Deretan instrumen handpiece kursi gigi yang tersusun pada unit kontrol putih di bawah lampu periksa",
    width: 900,
    height: 600,
    demoCaption: "Foto ilustrasi (demo)",
    objectPosition: "center center",
  },
  {
    id: "tentang-eksterior",
    title: "Tampak Bangunan & Akses Kunjungan",
    description:
      "Bangunan klinik yang mudah dijangkau oleh pasien keluarga baik menggunakan kendaraan pribadi maupun transportasi umum.",
    category: "Eksterior",
    src: "/images/tentang-eksterior.jpg?v=2",
    alt: "Bangunan fasilitas kesehatan berlapis bata dan kaca dengan kanopi melengkung di area jalur masuk kendaraan",
    width: 900,
    height: 600,
    demoCaption: "Foto ilustrasi (demo)",
    objectPosition: "center center",
  },
];
