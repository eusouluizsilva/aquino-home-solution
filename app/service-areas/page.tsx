import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import { CITIES, TIER_LABELS, type CityTier } from "@/lib/cities";

export const metadata: Metadata = {
  title: "Service Areas | General Contractor Serving 30+ Towns Around Lowell, MA",
  description:
    "Aquino Home Solutions serves Lowell, Chelmsford, Andover, Lexington, Concord, Westford and 25+ more communities across Greater Lowell and the Merrimack Valley. Find your town.",
};

const TIER_ORDER: CityTier[] = ["home", "A", "B", "C"];

export default function ServiceAreasPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            Greater Lowell & Merrimack Valley, MA
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Areas We Serve
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Based in Lowell, MA, we provide general contracting services —
            remodels, decks, painting, flooring, tile, plaster, plumbing, and
            HVAC — to homeowners in 30+ communities. Select your town for local
            details and a free estimate.
          </p>
        </div>

        {/* Map + cities grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            {TIER_ORDER.map((tier) => {
              const cities = CITIES.filter((c) => c.tier === tier);
              if (cities.length === 0) return null;
              return (
                <div key={tier} className="mb-10">
                  <h2 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#e23635]">
                    {TIER_LABELS[tier]}
                  </h2>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {cities.map((city) => (
                      <Link
                        key={city.slug}
                        href={`/service-areas/${city.slug}`}
                        className="group flex items-center justify-between rounded-xl border bg-card px-4 py-3.5 shadow-sm transition-all hover:border-[#0a2a6e] hover:shadow-md"
                      >
                        <span className="flex items-center gap-2.5">
                          <MapPin className="h-4 w-4 shrink-0 text-[#e23635]" />
                          <span>
                            <span className="block text-sm font-bold text-foreground">
                              {city.name}, MA
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {city.zip}
                            </span>
                          </span>
                        </span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-[#0a2a6e]" />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky map + CTA */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              <div className="overflow-hidden rounded-2xl border shadow-sm">
                <Image
                  src="/service-area-map.webp"
                  alt="Map of Aquino Home Solutions service area — Lowell MA and surrounding communities"
                  width={928}
                  height={928}
                  className="h-auto w-full"
                />
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">
                  Don&apos;t See Your Town?
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Call or text us — we&apos;ll tell you right away if we can
                  make it to you.
                </p>
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center gap-2 font-semibold text-primary hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-12 rounded-2xl p-8 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.13 250) 0%, oklch(0.40 0.18 245) 100%)",
          }}
        >
          <h2 className="mb-3 text-2xl font-bold">Ready to Book?</h2>
          <p className="mb-6 text-slate-200">
            Get a free estimate — no obligation, no pressure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white"
            >
              <a href={`tel:${BUSINESS.phoneRaw}`}>
                <Phone className="mr-2 h-4 w-4" />
                {BUSINESS.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
