import { siteConfig } from "@/content/site";

/**
 * Membersihkan nomor telepon agar hanya berisi angka internasional tanpa tanda + atau spasi.
 */
export function sanitizeWhatsAppNumber(rawNumber: string): string {
  const digitsOnly = rawNumber.replace(/\D/g, "");
  if (digitsOnly.startsWith("0")) {
    return `62${digitsOnly.slice(1)}`;
  }
  return digitsOnly;
}

/**
 * Menghasilkan URL WhatsApp Click-to-Chat (https://wa.me/<nomor>?text=<pesan ter-encode>)
 */
export function buildWhatsAppUrl(message?: string): string {
  const phone = sanitizeWhatsAppNumber(siteConfig.contact.whatsappNumber);
  const textToSend = (message ?? siteConfig.whatsappMessages.general).trim();
  const encodedText = encodeURIComponent(textToSend);
  return `https://wa.me/${phone}?text=${encodedText}`;
}

/**
 * Menghasilkan URL WhatsApp spesifik untuk halaman atau kartu layanan
 */
export function buildServiceWhatsAppUrl(serviceName: string): string {
  const customMessage = `${siteConfig.whatsappMessages.servicePrefix}${serviceName}. Mohon informasi jadwal dokter yang tersedia.`;
  return buildWhatsAppUrl(customMessage);
}

/**
 * Menghasilkan URL WhatsApp khusus konsultasi gigi anak
 */
export function buildPediatricWhatsAppUrl(): string {
  return buildWhatsAppUrl(siteConfig.whatsappMessages.pediatric);
}

/**
 * Merangkai pesan dari formulir konsultasi di halaman Kontak (tanpa penyimpanan server)
 */
export function buildConsultationFormWhatsAppUrl(params: {
  name: string;
  need: string;
  preferredTime?: string;
  notes?: string;
}): string {
  const lines = [
    `Halo Admin ${siteConfig.shortName},`,
    `Saya ingin berkonsultasi mengenai perawatan gigi:`,
    ``,
    `• Nama: ${params.name.trim()}`,
    `• Keperluan / Layanan: ${params.need.trim()}`,
  ];

  if (params.preferredTime && params.preferredTime.trim().length > 0) {
    lines.push(`• Rencana Waktu Kunjungan: ${params.preferredTime.trim()}`);
  }

  if (params.notes && params.notes.trim().length > 0) {
    lines.push(`• Keluhan / Pesan: ${params.notes.trim()}`);
  }

  lines.push(``, `Mohon informasi jadwal praktik dokter yang tersedia. Terima kasih.`);
  return buildWhatsAppUrl(lines.join("\n"));
}
