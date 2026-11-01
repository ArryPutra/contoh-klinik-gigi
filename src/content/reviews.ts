export interface ReviewItem {
  id: string;
  authorName: string;
  treatmentContext: string;
  dateLabel: string;
  quote: string;
  sourceUrl?: string;
  verifiedPermission: boolean;
}

/**
 * PENTING (Aturan Etika & Kredibilitas Layanan Kesehatan):
 * Jangan pernah mengarang testimoni pasien, nama pengulas, atau skor rating bintang.
 * Secara default array `reviews` dikosongkan (`[]`) sehingga section Ulasan pada beranda
 * otomatis disembunyikan dan JSON-LD tidak menyertakan klaim `aggregateRating` palsu.
 *
 * Jika klinik asli memiliki kutipan ulasan Google Maps yang telah mendapat izin pasien,
 * tambahkan datanya di bawah ini dengan `verifiedPermission: true`.
 */
export const reviews: ReviewItem[] = [];
