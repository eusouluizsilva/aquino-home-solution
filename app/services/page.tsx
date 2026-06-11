import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import { SERVICES_CONTENT } from "@/lib/services-content";

export const metadata: Metadata = {
  title: "Our Services | General Contractor in Lowell, MA",
  description:
    "Full general contracting services in Lowell, MA — kitchen & bath remodels, decks, stairs, painting, vinyl flooring, tile, plaster, plumbing, and HVAC. Free estimates.",
};

export default function ServicesIndexPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-12 md:py-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.13 250) 0%, oklch(0.40 0.18 245) 100%)",
        }}
      >
        <div className="mx-auto max-w-[90rem] px-4 text-center text-white sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-white/70">
            What we do
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">
            Our Services
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">
            Licensed and insured general contractor serving Lowell, MA and
            surrounding communities. One contractor, every trade — coordinated
            from first estimate to final walkthrough.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#e23635] px-6 py-3 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.97]"
            >
              <Phone className="h-4 w-4" />
              Call {BUSINESS.phone}
            </a>
            <Button asChild size="lg" variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 hover:text-white">
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES_CONTENT.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-all hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0a2a6e]">
                    {service.category}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center text-xs font-bold uppercase tracking-wide text-[#e23635] group-hover:underline">
                    Explore This Service →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Not sure which service you need?
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Call or text us — we&apos;ll help you figure it out and give a free,
            no-obligation estimate.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#e23635] px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.97]"
            >
              <Phone className="h-5 w-5" />
              Call {BUSINESS.phone}
            </a>
            <Button asChild size="lg">
              <Link href="/contact">Get Free Estimate</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
