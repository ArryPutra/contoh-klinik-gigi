import { siteConfig, type DaySchedule } from "@/content/site";

export interface ClinicLiveStatus {
  isOpenNow: boolean;
  dayName: string;
  statusBadge: string;
  detailLabel: string;
}

function parseTimeMinutes(hhmm: string): number {
  const [hoursStr, minutesStr] = hhmm.split(":");
  const hours = Number.parseInt(hoursStr ?? "0", 10);
  const minutes = Number.parseInt(minutesStr ?? "0", 10);
  return hours * 60 + minutes;
}

/**
 * Mengevaluasi apakah klinik sedang buka pada waktu saat ini di zona waktu klinik (Asia/Jakarta).
 * Aman dipanggil di client component setelah mount untuk menghindari hydration mismatch.
 */
export function getClinicLiveStatus(referenceDate: Date = new Date()): ClinicLiveStatus {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: siteConfig.timezone,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(referenceDate);
  const weekdayMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };

  const weekdayShort = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const hourStr = parts.find((p) => p.type === "hour")?.value ?? "09";
  const minuteStr = parts.find((p) => p.type === "minute")?.value ?? "00";

  const dayIndex = weekdayMap[weekdayShort] ?? 1;
  const currentMinutes = Number.parseInt(hourStr, 10) * 60 + Number.parseInt(minuteStr, 10);

  const todaySchedule: DaySchedule | undefined = siteConfig.schedule.find(
    (item) => item.dayIndex === dayIndex
  );

  if (!todaySchedule || !todaySchedule.isOpen || !todaySchedule.openTime || !todaySchedule.closeTime) {
    return {
      isOpenNow: false,
      dayName: todaySchedule?.dayName ?? "Hari Ini",
      statusBadge: "Tutup Hari Ini",
      detailLabel: "Chat WhatsApp tetap aktif untuk penjadwalan hari kerja berikutnya",
    };
  }

  const openMinutes = parseTimeMinutes(todaySchedule.openTime);
  const closeMinutes = parseTimeMinutes(todaySchedule.closeTime);
  const isOpenNow = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  if (isOpenNow) {
    return {
      isOpenNow: true,
      dayName: todaySchedule.dayName,
      statusBadge: "Buka Hari Ini",
      detailLabel: `${todaySchedule.dayName}: ${todaySchedule.openTime.replace(":", ".")} – ${todaySchedule.closeTime.replace(":", ".")} WIB`,
    };
  }

  return {
    isOpenNow: false,
    dayName: todaySchedule.dayName,
    statusBadge: "Di Luar Jam Praktik",
    detailLabel: `Jam praktik ${todaySchedule.dayName}: ${todaySchedule.openTime.replace(":", ".")} – ${todaySchedule.closeTime.replace(":", ".")} WIB`,
  };
}
