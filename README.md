# Website Profil & Pemasaran Klinik Gigi (Frontend-Only)

Website profil dan informasi layanan klinik gigi bergaya **Clinical Modern** yang dirancang untuk membangun kepercayaan pasien lokal dan mengarahkan konsultasi langsung ke **WhatsApp Click-to-Chat** serta kunjungan via **Google Maps**.

Dibangun menggunakan **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, dan **Lucide Icons** tanpa ketergantungan backend, database, maupun sistem login.

---

## 1. Cara Menjalankan Proyek di Lokal

Pastikan **Node.js (v18.18+ / v20+)** sudah terpasang di perangkat Anda.

```bash
# 1. Masuk ke direktori proyek
cd klinik-gigi

# 2. Pasang dependencies
npm install

# 3. Jalankan server pengembangan (development)
npm run dev
```

Buka `http://localhost:3000` di peramban Anda.

### Perintah Pemeriksaan Kualitas (QA)

```bash
# Menjalankan pemeriksaan ESLint
npm run lint

# Menjalankan pemeriksaan tipe TypeScript
npm run typecheck

# Membuat build produksi (Static Generation)
npm run build

# Menjalankan hasil build produksi secara lokal
npm run start
```

---

## 2. Cara Mematikan Mode Demo (`isDemo: false`)

Saat ini situs diatur pada mode demo portofolio (`isDemo: true` di `src/content/site.ts`).

Ketika website akan diserahkan kepada pemilik klinik nyata:
1. Buka file `src/content/site.ts`.
2. Ubah nilai `isDemo: true` menjadi `isDemo: false`:
   ```ts
   export const siteConfig = {
     isDemo: false,
     // ...
   };
   ```
3. Begitu `isDemo` bernilai `false`, maka:
   - Banner kuning **DEMO / CONTOH** di bagian atas halaman otomatis hilang.
   - Keterangan `"Foto ilustrasi (demo)"` di bawah setiap foto otomatis hilang.
   - Badge `"Contoh / belum diverifikasi"` pada kartu dokter, harga layanan, dan lokasi otomatis hilang.

---

## 3. Cara Mengganti Foto (`public/images/` & `src/content/`)

Seluruh gambar konten menggunakan foto `.jpg` di dalam folder `public/images/`. Anda dapat mengganti foto dengan **dua cara**:

### Cara A (Paling Cepat — Timpa File dengan Nama yang Sama)
Siapkan foto asli klinik sesuai rasio/ukuran yang direkomendasikan di [`ASSETS_NEEDED.md`](./ASSETS_NEEDED.md), lalu timpa file di dalam folder `public/images/`:
- **Hero Beranda & Lokasi / Gigi Anak (`src/content/site.ts`)**:
  - `public/images/hero-ruang-praktik.jpg` (Rasio `4:3`, rekomendasi `1200×900 px`)
  - `public/images/tentang-eksterior.jpg` (Rasio `3:2`, rekomendasi `900×600 px`)
  - `public/images/layanan-anak.jpg` (Rasio `3:2`, rekomendasi `900×600 px`)
- **Galeri & Halaman Tentang (`src/content/gallery.ts`)**:
  - `public/images/tentang-resepsi.jpg` (Rasio `3:2`, `900×600 px`)
  - `public/images/tentang-ruang-tunggu.jpg` (Rasio `3:2`, `900×600 px`)
  - `public/images/tentang-ruang-tindakan.jpg` (Rasio `3:2`, `900×600 px`)
  - `public/images/tentang-peralatan.jpg` (Rasio `3:2`, `900×600 px`)
  - `public/images/tentang-eksterior.jpg` (Rasio `3:2`, `900×600 px`)
- **Profil Dokter (`src/content/doctors.ts`)**:
  - `public/images/dokter-1.jpg` (Rasio `4:5`, `640×800 px`)
  - `public/images/dokter-2.jpg` (Rasio `4:5`, `640×800 px`)
- **Kartu & Detail Layanan (`src/content/services.ts`)**:
  - `public/images/layanan-pemeriksaan.jpg` (Rasio `3:2`, `900×600 px`)
  - `public/images/layanan-scaling.jpg` (Rasio `3:2`, `900×600 px`)
  - `public/images/layanan-tambal.jpg` (Rasio `3:2`, `900×600 px`)
  - `public/images/layanan-estetika.jpg` (Rasio `3:2`, `900×600 px`)
  - `public/images/layanan-ortodonti.jpg` (Rasio `3:2`, `900×600 px`)
  - `public/images/layanan-anak.jpg` (Rasio `3:2`, `900×600 px`)

### Cara B (Ubah Path & Alt Text di `src/content/`)
Jika Anda menggunakan nama file baru, ubah properti `src`, `alt`, `width`, dan `height` langsung pada file data terkait di `src/content/site.ts`, `src/content/services.ts`, `src/content/doctors.ts`, dan `src/content/gallery.ts`.

---

## 4. Cara Mengubah Nomor WhatsApp & Data Klinik

1. Buka `src/content/site.ts`.
2. Ubah `contact.whatsappNumber` dengan nomor internasional tanpa tanda `+` atau spasi (contoh: `"6281234567890"`).
3. Seluruh tombol WhatsApp di Header, Hero, Kartu Layanan, Halaman Gigi Anak, Floating Button, dan Formulir Kontak akan otomatis mengarah ke nomor baru tersebut.

---

## 5. Checklist SEO Lokal & Deployment

- Pastikan `siteConfig.siteUrl` di `src/content/site.ts` diganti dengan domain produksi asli klinik.
- Samakan Nama Klinik, Alamat, dan Nomor Telepon dengan profil **Google Business Profile (Google Maps)**.
- Daftarkan domain ke **Google Search Console** dan kirimkan URL `https://domain-klinik.id/sitemap.xml`.
