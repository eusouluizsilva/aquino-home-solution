import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BUSINESS, SERVICE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Service Areas | Lowell, Chelmsford, Billerica & More",
  description:
    "Aquino Home Solutions, your local general contractor, serves Lowell, Chelmsford, Billerica, Tewksbury, Dracut, and 9 more communities in Greater Lowell, MA.",
};

export default function ServiceAreasPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
            <MapPin className="h-4 w-4" />
            Greater Lowell, MA
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Areas We Serve
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Based in Lowell, MA, we provide general contracting services —
            remodels, decks, painting, flooring, tile, plaster, and stairs —
            to homeowners across Greater Lowell and the Merrimack Valley. If
            your town isn&apos;t listed, give us a call — we may still be able to help.
          </p>
        </div>

        {/* Areas grid */}
        <div className="rounded-2xl border bg-card p-8">
          <h2 className="mb-6 text-xl font-semibold">Communities We Service</h2>
          <div className="flex flex-wrap gap-3">
            {SERVICE_AREAS.map((area) => (
              <Badge
                key={area}
                variant="secondary"
                className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium"
              >
                <MapPin className="h-3.5 w-3.5 text-primary" />
                {area}, MA
              </Badge>
            ))}
          </div>
        </div>

        {/* Coverage info */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="text-lg font-semibold mb-3">Response Times</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">Lowell & Dracut</strong> — typically within 1–2 hours
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">Chelmsford, Billerica, Tewksbury</strong> — same day
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>
                  <strong className="text-foreground">Outer areas</strong> — next-day or scheduled
                </span>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border bg-card p-6">
            <h3 className="text-lg font-semibold mb-3">Not Sure We Cover Your Area?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Call or text us — we&apos;ll tell you right away if we can make it to you.
              We&apos;re always expanding our coverage.
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

        {/* CTA */}
        <div
          className="mt-12 rounded-2xl p-8 text-center text-white"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.22 0.13 250) 0%, oklch(0.40 0.18 245) 100%)",
          }}
        >
          <h2 className="text-2xl font-bold mb-3">Ready to Book?</h2>
          <p className="text-slate-200 mb-6">
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
