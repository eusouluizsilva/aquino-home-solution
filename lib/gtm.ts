type GTMEvent =
  | "click_call"
  | "click_whatsapp"
  | "click_email"
  | "submit_quote_form"
  | "upload_photo";

export function pushGTMEvent(event: GTMEvent, data?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...data });
  // When gtag.js is loaded directly (no GTM), forward the event to GA4 too
  if (typeof window.gtag === "function") {
    window.gtag("event", event, data ?? {});
  }
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}
