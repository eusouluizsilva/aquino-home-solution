import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, Mail, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import CTAForm from "@/components/CTAForm";
import { BUSINESS } from "@/lib/constants";
import { SERVICES_CONTENT } from "@/lib/services-content";
import { CITIES, CITY_BANNERS, CITY_POSTERS, getCity } from "@/lib/cities";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.aquinosolutions.com";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: `General Contractor in ${city.name}, MA | Aquino Home Solutions`,
    description: `Licensed general contractor serving ${city.name}, MA (${city.zip}). Kitchen & bath remodels, decks, painting, flooring, tile, plaster, plumbing & HVAC. Free estimates — call ${BUSINESS.phone}.`,
    alternates: { canonical: `${SITE_URL}/service-areas/${city.slug}` },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  // Emphasized services first, then the rest
  const emphasized = city.emphasis
    .map((id) => SERVICES_CONTENT.find((s) => s.id === id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));
  const others = SERVICES_CONTENT.filter((s) => !city.emphasis.includes(s.id));
  const orderedServices = [...emphasized, ...others];

  // Photo strip pulled from the emphasized services' galleries
  const photos = emphasized.slice(0, 4).map((s, i) => s.gallery[i % s.gallery.length]);

  const nearbyCities = city.nearby
    .map((s) => getCity(s))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: BUSINESS.name,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    url: `${SITE_URL}/service-areas/${city.slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      postalCode: BUSINESS.zip,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: `${city.name}, MA`,
      postalCode: city.zip,
    },
    makesOffer: orderedServices.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: `${s.title} in ${city.name}, MA` },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: `${SITE_URL}/service-areas` },
      { "@type": "ListItem", position: 3, name: `${city.name}, MA`, item: `${SITE_URL}/service-areas/${city.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      {/* Hero with video banner */}
      <section className="relative overflow-hidden">
        <div className="relative h-[440px] md:h-[540px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={CITY_POSTERS[city.banner]}
            aria-hidden="true"
          >
            <source src={CITY_BANNERS[city.banner]} type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,42,110,0.85) 0%, rgba(10,42,110,0.5) 55%, rgba(0,0,0,0.55) 100%)",
            }}
          />
          <div className="relative z-10 mx-auto flex h-full max-w-[90rem] flex-col justify-end px-4 pb-10 sm:px-6 lg:px-8 md:pb-14">
            <Link
              href="/service-areas"
              className="mb-3 inline-flex w-fit items-center text-sm font-medium text-white/80 hover:text-white"
            >
              ← All Service Areas
            </Link>
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              <MapPin className="h-3.5 w-3.5" />
              <span>
                {city.name}, MA {city.zip}
              </span>
            </div>
            <h1
              className="mt-4 max-w-4xl text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
              style={{ textShadow: "0 2px 12px rgba(0,0,0,0.55)" }}
            >
              General Contractor in {city.name}, MA
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-white/90 md:text-xl">
              Remodels, decks, painting, flooring & more — licensed, insured,
              and trusted across {city.name}.
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

      {/* Intro + trust */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Your Local Contractor in {city.name}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {city.intro}
              </p>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  "Licensed & insured in Massachusetts",
                  "Free in-home estimates",
                  "One team for every trade",
                  "Clean job sites, clear schedules",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#e23635]" />
                    <span className="text-sm font-medium text-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Photo strip */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                {photos.map((img, i) => (
                  <div
                    key={`${img.src}-${i}`}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm"
                  >
                    <Image
                      src={img.src}
                      alt={`${img.alt} — ${city.name}, MA`}
                      fill
                      sizes="(min-width: 1024px) 20vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="bg-[#0a2a6e]/[0.04] py-12 md:py-16">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Services We Offer in {city.name}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Every service below is available to {city.name} homeowners — with
            free estimates and one accountable team from start to finish.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {orderedServices.map((service, idx) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} in ${city.name}, MA`}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {idx < city.emphasis.length && (
                    <div className="absolute left-3 top-3 rounded-full bg-[#e23635] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                      Popular in {city.name}
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 flex-1 text-sm text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-[#0a2a6e] group-hover:text-[#e23635]">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate form + contact */}
      <section id="estimate" className="py-12 md:py-20">
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start lg:gap-16 xl:gap-24">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get a Free Estimate in {city.name}
              </h2>
              <p className="mt-3 text-muted-foreground">
                Tell us about your project — we respond within 1 business hour.
                No obligation, always free.
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

              {/* Nearby cities — internal links */}
              {nearbyCities.length > 0 && (
                <div className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
                  <h3 className="text-sm font-bold uppercase tracking-wide text-muted-foreground">
                    Also Serving Nearby
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {nearbyCities.map((nc) => (
                      <Link
                        key={nc.slug}
                        href={`/service-areas/${nc.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full border bg-gray-50 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-[#0a2a6e] hover:text-[#0a2a6e]"
                      >
                        <MapPin className="h-3.5 w-3.5 text-[#e23635]" />
                        {nc.name}, MA
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <CTAForm />
          </div>
        </div>
      </section>
    </>
  );
}
