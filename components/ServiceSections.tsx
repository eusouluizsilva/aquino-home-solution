import Image from "next/image";
import Link from "next/link";
import {
  ChefHat,
  Footprints,
  Hammer,
  Paintbrush,
  Layers,
  LayoutGrid,
  Building2,
  Droplets,
  Wind,
  CheckCircle,
  Wrench,
  ArrowRight,
} from "lucide-react";
import { SERVICES_CONTENT } from "@/lib/services-content";

const ICONS: Record<string, React.ReactNode> = {
  ChefHat: <ChefHat className="h-6 w-6" />,
  Footprints: <Footprints className="h-6 w-6" />,
  Hammer: <Hammer className="h-6 w-6" />,
  Paintbrush: <Paintbrush className="h-6 w-6" />,
  Layers: <Layers className="h-6 w-6" />,
  LayoutGrid: <LayoutGrid className="h-6 w-6" />,
  Building2: <Building2 className="h-6 w-6" />,
  Droplets: <Droplets className="h-6 w-6" />,
  Wind: <Wind className="h-6 w-6" />,
};

function MediaBento({
  service,
}: {
  service: (typeof SERVICES_CONTENT)[number];
}) {
  const [main, ...rest] = service.gallery;
  return (
    <div className="grid h-[260px] grid-cols-4 grid-rows-2 gap-2 sm:h-[360px] sm:gap-3 lg:h-[460px]">
      {/* Large cell: hero video when available, otherwise first photo */}
      <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-sm">
        {service.heroVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={service.heroImage}
            aria-hidden="true"
          >
            <source src={service.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={main.src}
            alt={main.alt}
            fill
            sizes="(min-width: 1024px) 30vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
      </div>
      {/* Wide cell */}
      <div className="group relative col-span-2 overflow-hidden rounded-2xl shadow-sm">
        <Image
          src={(rest[0] ?? main).src}
          alt={(rest[0] ?? main).alt}
          fill
          sizes="(min-width: 1024px) 30vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      {/* Two square cells */}
      {[rest[1] ?? main, rest[2] ?? main].map((img, idx) => (
        <div
          key={`${img.src}-${idx}`}
          className="group relative overflow-hidden rounded-2xl shadow-sm"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(min-width: 1024px) 15vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

export default function ServiceSections() {
  return (
    <div>
      {SERVICES_CONTENT.map((service, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-14 md:py-20 ${flip ? "bg-[#0a2a6e]/[0.04]" : ""}`}
          >
            <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
                {/* Media */}
                <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                  <MediaBento service={service} />
                </div>

                {/* Text */}
                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0a2a6e] text-white shadow-md">
                      {ICONS[service.iconName]}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#e23635]">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    {service.description}
                  </p>

                  <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {service.subServices.map((sub, idx) => (
                      <div
                        key={sub.title}
                        className="rounded-2xl border border-border/60 bg-white p-5 shadow-sm"
                      >
                        <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          {idx === 0 ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            <Wrench className="h-5 w-5" />
                          )}
                        </span>
                        <h4 className="mb-1.5 text-sm font-bold text-foreground">
                          {sub.title}
                        </h4>
                        <p className="text-xs leading-relaxed text-muted-foreground">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      href={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#0a2a6e] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:brightness-110 active:scale-[0.97]"
                    >
                      Explore This Service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
