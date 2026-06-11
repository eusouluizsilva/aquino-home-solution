import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import CTAForm from "@/components/CTAForm";
import GoogleReviews from "@/components/GoogleReviews";
import WhyChooseUs from "@/components/WhyChooseUs";
import VanImage from "@/components/VanImage";
import AnimatedCounter from "@/components/AnimatedCounter";
import ServiceSections from "@/components/ServiceSections";
import OurServices from "@/components/OurServices";
import { BUSINESS } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section>
        {/* ── MOBILE: full-bleed background hero ── */}
        <div className="relative overflow-hidden md:hidden">
          <Image
            src="/aquino-guy.png"
            alt="Aquino Home Solutions technician"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
          <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,10,24,0.0) 0%, rgba(5,10,24,0.05) 50%, rgba(5,10,24,0.70) 78%, rgba(5,10,24,0.88) 100%)" }} />
          <div className="relative flex min-h-[380px] flex-col justify-end">
            <div className="w-full px-6 pb-0 text-center">
              <h1 className="animate-fade-in text-2xl font-extrabold tracking-tight text-white" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
                Your Trusted <span className="relative inline-block text-white">
                  <span className="absolute inset-0 -skew-x-3 rounded bg-[#e23635]" aria-hidden="true" />
                  <span className="relative">General Contractor</span>
                </span>
                <br />Serving Lowell for 15+ Years
              </h1>
              <div className="mt-4">
                <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-2 rounded-xl bg-[#e23635] px-4 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.97]">
                  <Phone className="h-4 w-4" />
                  Call {BUSINESS.phone} — Free Estimate
                </a>
              </div>
            </div>
          </div>
          <div className="relative bg-black/30 backdrop-blur-sm">
            <div className="grid grid-cols-3 py-6 text-center">
              {[
                { target: 15, suffix: "+", label: "Years Experience" },
                { target: 500, suffix: "+", label: "Happy Customers" },
                { target: 100, suffix: "%", label: "Satisfaction" },
              ].map(({ target, suffix, label }) => (
                <div key={label}>
                  <div className="text-2xl font-extrabold text-white"><AnimatedCounter target={target} suffix={suffix} /></div>
                  <div className="mt-1 text-xs font-medium text-white/70">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── DESKTOP: split layout ── */}
        <div className="hidden md:flex min-h-[600px] lg:min-h-[680px]">
          {/* Left: dark background + text */}
          <div className="flex w-1/2 flex-col justify-end bg-[#0a2a6e] px-12 pb-0 lg:px-16">
            <h1 className="animate-fade-in text-4xl font-extrabold tracking-tight text-white lg:text-5xl xl:text-6xl" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}>
              Your Trusted <span className="relative inline-block text-white">
                <span className="absolute inset-0 -skew-x-3 rounded bg-[#e23635]" aria-hidden="true" />
                <span className="relative">General Contractor</span>
              </span>
              <br />Serving Lowell for 15+ Years
            </h1>
            <div className="mt-6">
              <a href={`tel:${BUSINESS.phoneRaw}`} className="inline-flex items-center gap-3 rounded-xl bg-[#e23635] px-7 py-4 text-lg font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.97]">
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone} — Free Estimate
              </a>
            </div>
            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 border-t border-white/20 py-6 text-center">
              {[
                { target: 15, suffix: "+", label: "Years Experience" },
                { target: 500, suffix: "+", label: "Happy Customers" },
                { target: 100, suffix: "%", label: "Satisfaction" },
              ].map(({ target, suffix, label }) => (
                <div key={label}>
                  <div className="text-2xl font-extrabold text-white lg:text-3xl"><AnimatedCounter target={target} suffix={suffix} /></div>
                  <div className="mt-1 text-xs font-medium text-white/70">{label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: guy image */}
          <div className="relative w-1/2 overflow-hidden">
            <Image
              src="/aquino-guy.png"
              alt="Aquino Home Solutions technician"
              fill
              priority
              sizes="50vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Sentinel: sticky bar appears after this point */}
      <div id="sticky-bar-sentinel" />

      {/* Request Appointment */}
      <section
        id="appointment"
        className="overflow-x-hidden bg-[linear-gradient(180deg,rgba(238,244,255,0.8)_0%,rgba(255,255,255,1)_58%,rgba(255,240,242,0.72)_100%)] py-6 md:py-10"
      >
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
            {/* Left: van image + text */}
            <div className="space-y-6">
            <VanImage />
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Request an Appointment
                </h2>
                <p className="mt-3 text-muted-foreground">
                  We respond within 1 hour during business hours — no obligation, always free.
                </p>
              </div>

              {/* Van image */}
            
               

            
            </div>

            {/* Right: form */}
            <CTAForm />
          </div>
        </div>
      </section>

      <OurServices />

      <div className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(242,247,255,0.82)_100%)]">
        <ServiceSections />
      </div>

      <WhyChooseUs />

      {/* Google Reviews */}
      <div className="bg-[linear-gradient(180deg,rgba(248,251,255,0.9)_0%,rgba(255,246,248,0.78)_100%)]">
        <GoogleReviews />
      </div>

      {/* Service areas + free estimate */}
      <section
        id="service-area"
        className="border-t bg-[linear-gradient(180deg,rgba(240,246,255,0.88)_0%,rgba(255,255,255,1)_65%,rgba(255,240,244,0.76)_100%)] py-12 md:py-20"
      >
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-24">
            {/* Left: heading, contact channels, map */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Areas We Serve
              </h2>
              <p className="mt-3 text-muted-foreground">
                Proudly serving Lowell, MA and surrounding communities within
                ~30 miles. If you&apos;re in the highlighted area, we&apos;ve
                got you covered.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="group flex items-center gap-4 rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0a2a6e] text-white">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Call or Text
                    </span>
                    <span className="block text-base font-bold text-foreground group-hover:text-[#0a2a6e]">
                      {BUSINESS.phone}
                    </span>
                  </span>
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="group flex items-center gap-4 rounded-2xl border bg-white p-5 shadow-sm transition-all hover:shadow-md"
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e23635] text-white">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Email Us
                    </span>
                    <span className="block truncate text-base font-bold text-foreground group-hover:text-[#0a2a6e]">
                      {BUSINESS.email}
                    </span>
                  </span>
                </a>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl border shadow-sm">
                <Image
                  src="/service-area-map.webp"
                  alt="Map showing Aquino Home Solutions service area — Lowell MA and surrounding communities within ~30 miles"
                  width={928}
                  height={928}
                  className="h-auto w-full"
                />
              </div>
            </div>

            {/* Right: estimate form */}
            <div className="lg:sticky lg:top-24">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Get Your Free Estimate
              </h3>
              <p className="mt-2 mb-6 text-muted-foreground">
                Tell us about your project — we respond within 1 business hour.
                No obligation, always free.
              </p>
              <CTAForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
