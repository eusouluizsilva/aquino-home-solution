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
}

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
