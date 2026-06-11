"use client";

import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { pushGTMEvent } from "@/lib/gtm";
import { BUSINESS } from "@/lib/constants";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const sentinel = document.getElementById("sticky-bar-sentinel");
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show when sentinel has scrolled above the viewport (user is past the van)
        setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`pointer-events-none fixed bottom-0 left-0 right-0 z-50 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-2 transition-all duration-300 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex w-full max-w-md items-center gap-3 rounded-2xl border border-white/20 bg-slate-950/20 p-2 shadow-[0_12px_35px_-20px_rgba(2,6,23,0.9)] backdrop-blur-md">
        <a
          href={`tel:${BUSINESS.phoneRaw}`}
          className="pointer-events-auto flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-red-700 to-red-600 px-4 py-3 text-white shadow-[0_10px_24px_-14px_rgba(153,27,27,0.95)] transition-all hover:brightness-105 active:scale-[0.98]"
          onClick={() => pushGTMEvent("click_call")}
          aria-label="Call Aquino Home Solutions now"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
            <Phone className="h-4 w-4" />
          </span>
          <span className="truncate text-sm font-semibold">Call Now</span>
        </a>
        <a
          href={`https://wa.me/${BUSINESS.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-500 to-green-500 px-4 py-3 text-white shadow-[0_10px_24px_-14px_rgba(21,128,61,0.95)] transition-all hover:brightness-105 active:scale-[0.98]"
          onClick={() => pushGTMEvent("click_whatsapp")}
          aria-label="Message Aquino Home Solutions on WhatsApp"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
            <MessageCircle className="h-4 w-4" />
          </span>
          <span className="truncate text-sm font-semibold">WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
