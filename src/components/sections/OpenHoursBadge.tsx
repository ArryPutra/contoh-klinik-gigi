"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/content/site";
import { getClinicLiveStatus, type ClinicLiveStatus } from "@/lib/hours";
import { Badge } from "@/components/ui/Badge";

export function OpenHoursBadge() {
  const [liveStatus, setLiveStatus] = useState<ClinicLiveStatus | null>(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setLiveStatus(getClinicLiveStatus(new Date()));
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  if (!liveStatus) {
    return (
      <div className="inline-flex flex-wrap items-center gap-2.5 text-xs text-text-muted sm:text-sm">
        <Badge variant="status-open">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
          <span>Jadwal Praktik</span>
        </Badge>
        <span>{siteConfig.hoursSummary}</span>
      </div>
    );
  }

  return (
    <div className="inline-flex flex-wrap items-center gap-2.5 text-xs text-text-muted sm:text-sm">
      <Badge variant={liveStatus.isOpenNow ? "status-open" : "status-closed"}>
        <span
          aria-hidden="true"
          className={`h-2 w-2 rounded-full ${
            liveStatus.isOpenNow ? "bg-whatsapp" : "bg-text-muted"
          }`}
        />
        <span>{liveStatus.statusBadge}</span>
      </Badge>
      <span>{liveStatus.detailLabel}</span>
    </div>
  );
}
