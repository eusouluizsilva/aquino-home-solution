import GalleryCarousel from "@/components/GalleryCarousel";
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
} from "lucide-react";
import { SERVICES_CONTENT } from "@/lib/services-content";

const ICONS: Record<string, React.ReactNode> = {
  ChefHat: <ChefHat className="h-10 w-10" />,
  Footprints: <Footprints className="h-10 w-10" />,
  Hammer: <Hammer className="h-10 w-10" />,
  Paintbrush: <Paintbrush className="h-10 w-10" />,
  Layers: <Layers className="h-10 w-10" />,
  LayoutGrid: <LayoutGrid className="h-10 w-10" />,
  Building2: <Building2 className="h-10 w-10" />,
  Droplets: <Droplets className="h-10 w-10" />,
  Wind: <Wind className="h-10 w-10" />,
};

export default function ServiceSections() {
  return (
    <div>
      {SERVICES_CONTENT.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-10 md:py-14 ${i % 2 === 1 ? "bg-muted/40" : ""}`}
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center">
              <div
                className="mb-5 inline-flex items-center justify-center rounded-2xl text-white"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.52 0.04 250) 0%, oklch(0.62 0.03 240) 100%)",
                  padding: "1.1rem",
                }}
              >
                {ICONS[service.iconName]}
              </div>

              <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {service.title}
              </h3>

              <div className="mt-1">
                <span className="text-sm font-semibold text-foreground">
                  {service.badge}
                </span>
              </div>

              <p className="mt-4 max-w-2xl text-muted-foreground">
                {service.description}
              </p>

              {service.gallery.length > 0 && (
                <div className="mt-8 w-full">
                  <GalleryCarousel images={service.gallery} />
                </div>
              )}

              <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                {service.subServices.map((sub, idx) => (
                  <div
                    key={sub.title}
                    className="rounded-2xl border border-border/60 bg-white p-5 text-left shadow-sm"
                  >
                    <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {idx === 0 ? <CheckCircle className="h-5 w-5" /> : <Wrench className="h-5 w-5" />}
                    </span>
                    <h4 className="mb-1.5 text-sm font-bold text-foreground">
                      {sub.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
