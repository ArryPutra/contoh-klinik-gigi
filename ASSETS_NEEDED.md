# Daftar Aset Gambar (`ASSETS_NEEDED.md`)

## Status Saat Ini (Mode Demo: `siteConfig.isDemo = true`)
Seluruh 17 file gambar di `public/images/` telah tersedia, telah diaudit secara visual satu per satu agar sesuai dengan konteks teks masing-masing slot, dan tidak ada slot yang menggunakan gambar duplikat maupun ilustrasi SVG.

## Rekomendasi Penggantian Saat Tayang untuk Klinik Asli (`siteConfig.isDemo = false`)
Ketika website ini digunakan untuk klinik gigi nyata dan `siteConfig.isDemo` diubah menjadi `false`, ganti foto stok berlabel demo di `public/images/` dengan dokumentasi asli klinik:
1. `public/images/hero-ruang-praktik.jpg` (`1200x900`, rasio 4:3) & `public/images/og-hero-klinik.jpg` (`1200x630`): Foto ruang praktik utama klinik.
2. `public/images/dokter-1.jpg` & `public/images/dokter-2.jpg` (`640x800`, rasio 4:5): Foto potret asli dokter gigi yang berpraktik resmi di klinik.
3. `public/images/tentang-resepsi.jpg`, `tentang-ruang-tunggu.jpg`, `tentang-ruang-tindakan.jpg`, `tentang-peralatan.jpg`, `tentang-eksterior.jpg`, dan `lokasi-klinik.jpg` (`900x600`, rasio 3:2): Foto fasilitas nyata dan tampak depan bangunan klinik untuk memudahkan pasien mengenali lokasi dari jalan raya.
