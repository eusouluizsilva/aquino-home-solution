"use client";

import { useEffect } from "react";
import { pushGTMEvent } from "@/lib/gtm";

/**
 * Site-wide tracker: fires GA4 events for ANY tel: or mailto: link click,
 * including links rendered in server components that don't wire their own
 * onClick handler. Mounted once in the root layout.
 */
export default function ClickTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const link = target?.closest("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        pushGTMEvent("click_call", { link_url: href });
      } else if (href.startsWith("mailto:")) {
        pushGTMEvent("click_email", { link_url: href });
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
