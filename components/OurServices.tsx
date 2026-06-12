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
} from "lucide-react";
import { SERVICES } from "@/lib/constants";

const ICON_MAP: Record<string, React.ReactNode> = {
  ChefHat: <ChefHat className="h-7 w-7 text-[#0a2a6e]" />,
  Footprints: <Footprints className="h-7 w-7 text-[#0a2a6e]" />,
  Hammer: <Hammer className="h-7 w-7 text-[#0a2a6e]" />,
  Paintbrush: <Paintbrush className="h-7 w-7 text-[#0a2a6e]" />,
  Layers: <Layers className="h-7 w-7 text-[#0a2a6e]" />,
  LayoutGrid: <LayoutGrid className="h-7 w-7 text-[#0a2a6e]" />,
  Building2: <Building2 className="h-7 w-7 text-[#0a2a6e]" />,
  Droplets: <Droplets className="h-7 w-7 text-[#0a2a6e]" />,
  Wind: <Wind className="h-7 w-7 text-[#0a2a6e]" />,
};

export default function OurServices() {
  return (
    <section id="services" className="relative overflow-hidden bg-gray-100 py-16 md:py-20">
      {/* Diagonal blue background */}
      <div
        className="pointer-events-none absolute inset-0 bg-[#0a2a6e]"
        style={{ clipPath: "polygon(0 0, 52% 0, 26% 100%, 0 100%)" }}
      />

      <div className="relative mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-white/60">What we do</p>
          <h2 className="mt-1 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
            Our Services
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col items-center rounded-2xl bg-white px-5 pb-6 pt-12 text-center shadow-md transition-shadow hover:shadow-xl"
            >
              {/* Icon circle */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex h-14 w-14 items-center justify-center rounded-full border-4 border-gray-100 bg-white shadow-md">
                {ICON_MAP[service.icon]}
              </div>

              <h3 className="mb-2 text-base font-bold text-gray-900">{service.title}</h3>
              <p className="mb-4 flex-1 text-sm text-gray-500">{service.description}</p>

              <Link
                href={`/services/${service.id}`}
                className="text-xs font-bold uppercase tracking-wide text-[#0a2a6e] underline underline-offset-2 transition-colors hover:text-[#e23635]"
              >
                Explore This Service &rsaquo;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
