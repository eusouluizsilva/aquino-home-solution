import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Thank You — Request Received | Aquino Home Solutions",
  description: "Your estimate request was received. We'll get back to you within 1 business hour.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-xl text-center">
        <div className="mx-auto mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <CheckCircle className="h-12 w-12 text-green-600" />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Thank You — Request Received!
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Thanks for reaching out to Aquino Home Solutions. A member of our team
          will get back to you <strong className="text-foreground">within 1 business hour</strong> during
          working hours. For anything urgent, call us directly.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${BUSINESS.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#e23635] px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.97]"
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS.phone}
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border bg-white px-7 py-4 text-base font-bold text-[#0a2a6e] shadow-sm transition-all hover:bg-gray-50"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold text-muted-foreground">
          <span>Licensed &amp; Insured</span>
          <span className="text-muted-foreground/40">·</span>
          <span>15+ Years Experience</span>
          <span className="text-muted-foreground/40">·</span>
          <span>5.0 on Google</span>
        </div>
      </div>
    </section>
  );
}
