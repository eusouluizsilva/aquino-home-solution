import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  CheckCircle,
  ChefHat,
  Footprints,
  Hammer,
  Paintbrush,
  Layers,
  LayoutGrid,
  Building2,
} from "lucide-react";
import CTAForm from "@/components/CTAForm";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import { SERVICES_CONTENT, getServiceContent } from "@/lib/services-content";

const HERO_ICONS: Record<string, React.ReactNode> = {
  ChefHat: <ChefHat className="h-12 w-12" />,
  Footprints: <Footprints className="h-12 w-12" />,
  Hammer: <Hammer className="h-12 w-12" />,
  Paintbrush: <Paintbrush className="h-12 w-12" />,
  Layers: <Layers className="h-12 w-12" />,
  LayoutGrid: <LayoutGrid className="h-12 w-12" />,
  Building2: <Building2 className="h-12 w-12" />,
};

export async function generateStaticParams() {
  return SERVICES_CONTENT.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceContent(id);
  if (!service) return {};
  return {
    title: `${service.title} in Lowell, MA — Free Estimate`,
    description: service.metaDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = getServiceContent(id);
  if (!service) notFound();

  const otherServices = SERVICES_CONTENT.filter((s) => s.id !== id).slice(0, 4);

  return (
    <>
      {/* Hero with photo */}
      <section className="relative overflow-hidden">
        <div className="relative h-[420px] md:h-[520px]">
          <Image
            src={service.heroImage}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,42,110,0.85) 0%, rgba(10,42,110,0.55) 55%, rgba(0,0,0,0.55) 100%)",
            }}
          />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8 md:pb-14">
            <Link
              href="/"
              className="mb-3 inline-flex w-fit items-center text-sm font-medium text-white/80 hover:text-white"
            >
              ← Back to Home
            </Link>
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              <span className="text-white/90">{HERO_ICONS[service.iconName]}</span>
              <span>{service.category}</span>
            </div>
            <h1
              className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
            >
              {service.title}
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-white/90 md:text-xl">
              {service.tagline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`tel:${BUSINESS.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-xl bg-[#e23635] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.97] md:text-base"
              >
                <Phone className="h-4 w-4" />
                Call {BUSINESS.phone} — Free Estimate
              </a>
              <a
                href="#estimate"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0a2a6e] shadow-lg transition-all hover:bg-white/90 active:scale-[0.97] md:text-base"
              >
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Description + trust points */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-3 lg:gap-12 lg:px-8">
          <div className="lg:col-span-2">
            <p className="text-sm font-bold uppercase tracking-widest text-[#e23635]">
              {service.category}
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              {service.highlight}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {service.longDescription}
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <h3 className="text-base font-semibold">Why work with us</h3>
            <ul className="mt-4 space-y-3">
              {service.trustPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#0a2a6e]" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0a2a6e] px-4 py-3 text-sm font-bold text-white transition-all hover:brightness-110"
            >
              <Phone className="h-4 w-4" />
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
            What We Do
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {service.subServices.map((sub) => (
              <div
                key={sub.title}
                className="rounded-2xl border bg-white p-6 shadow-sm"
              >
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#0a2a6e]/10 text-[#0a2a6e]">
                  <CheckCircle className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold">{sub.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {sub.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {service.gallery.length > 0 && (
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">
              Recent {service.title} Projects
            </h2>
            <p className="mt-2 text-center text-muted-foreground">
              A look at the work we do.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {service.gallery.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-sm"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Estimate form */}
      <section
        id="estimate"
        className="overflow-x-hidden bg-[linear-gradient(180deg,rgba(238,244,255,0.85)_0%,rgba(255,255,255,1)_60%,rgba(255,240,242,0.78)_100%)] py-12 md:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[#e23635]">
                Free Estimate
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
                Get Your Free {service.title} Estimate
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fill out the form and we&apos;ll get back to you within 1 business
                hour. No pressure, no obligation, no upsells — just a clear price.
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={`tel:${BUSINESS.phoneRaw}`}
                  className="flex items-center gap-3 text-base font-semibold text-[#0a2a6e] hover:underline"
                >
                  <Phone className="h-5 w-5" />
                  Or call us directly: {BUSINESS.phone}
                </a>
                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-base font-semibold text-emerald-600 hover:underline"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp us — fastest response
                </a>
              </div>
            </div>
            <CTAForm defaultService={service.id} />
          </div>
        </div>
      </section>

      {/* Final CTA banner */}
      <section
        className="py-12 md:py-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.13 250) 0%, oklch(0.40 0.18 245) 100%)",
        }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center text-white sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to start your {service.title.toLowerCase()} project?
          </h2>
          <p className="mt-3 text-lg text-white/85">
            Free estimates, transparent pricing, and clean job sites. Talk to us today.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-xl bg-[#e23635] px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.97]"
            >
              <Phone className="h-5 w-5" />
              Call {BUSINESS.phone}
            </a>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-4 text-base font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.97]"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Other Services We Offer
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                href={`/services/${other.id}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm"
              >
                <Image
                  src={other.heroImage}
                  alt={other.title}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 text-white">
                  <p className="text-sm font-bold md:text-base">{other.title}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
