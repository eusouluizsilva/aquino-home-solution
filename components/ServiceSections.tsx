import GalleryCarousel from "@/components/GalleryCarousel";
import {
  ChefHat,
  Footprints,
  Hammer,
  Paintbrush,
  Layers,
  LayoutGrid,
  Building2,
  CheckCircle,
  Wrench,
  ShieldCheck,
} from "lucide-react";

interface SubService {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface Service {
  id: string;
  badge: string;
  category: string;
  tagline: string;
  title: string;
  highlight: string;
  description: string;
  icon: React.ReactNode;
  gallery: GalleryImage[];
  subServices: SubService[];
}

const services: Service[] = [
  {
    id: "kitchen-bath-remodel",
    badge: "Kitchen · Bathroom · Full Renovations",
    category: "Remodeling",
    tagline: "Modern remodels that fit how you actually live.",
    title: "Kitchen & Bathroom Remodel",
    highlight: "Layout, plumbing, finishes — all under one contractor.",
    description:
      "Full kitchen and bathroom remodels from demo to final fixtures. We coordinate plumbing, tile, cabinetry, and finishes so your project stays on schedule and on budget.",
    icon: <ChefHat className="h-10 w-10" />,
    gallery: [],
    subServices: [
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "Kitchen Remodels",
        description:
          "Cabinets, countertops, backsplash, plumbing, and lighting — all coordinated and finished cleanly.",
      },
      {
        icon: <Wrench className="h-5 w-5" />,
        title: "Bathroom Remodels",
        description:
          "Tile work, vanities, tubs, showers, and fixtures installed level, square, and watertight.",
      },
    ],
  },
  {
    id: "stairs",
    badge: "Interior · Exterior · Custom Builds",
    category: "Carpentry",
    tagline: "Stairs built to be used every day for decades.",
    title: "Stairs",
    highlight: "Custom stair builds, repairs, and refinishing.",
    description:
      "New stair construction, replacement treads and risers, railings, and refinishing. Solid framing, tight joinery, and finishes that hold up to daily use.",
    icon: <Footprints className="h-10 w-10" />,
    gallery: [],
    subServices: [
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "New Stair Construction",
        description:
          "Interior and exterior stair builds — code-compliant rise/run, solid framing, and clean finish work.",
      },
      {
        icon: <Wrench className="h-5 w-5" />,
        title: "Repairs & Refinishing",
        description:
          "Replace worn treads, fix squeaks, refinish railings, and bring tired staircases back to life.",
      },
    ],
  },
  {
    id: "decks",
    badge: "New Builds · Restoration · Railings",
    category: "Carpentry",
    tagline: "Decks designed for New England weather.",
    title: "Decks",
    highlight: "Built for the climate, finished for the long run.",
    description:
      "New deck construction, replacement boards, structural repairs, and railings. We use the right fasteners, flashing, and finishes for the Massachusetts climate.",
    icon: <Hammer className="h-10 w-10" />,
    gallery: [],
    subServices: [
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "New Deck Construction",
        description:
          "Pressure-treated, composite, or hardwood decks built on properly footed structures with code-compliant railings.",
      },
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Repairs & Restoration",
        description:
          "Board replacement, structural repairs, sanding, and refinishing to extend the life of your existing deck.",
      },
    ],
  },
  {
    id: "painting",
    badge: "Interior · Exterior · Trim & Cabinetry",
    category: "Finishes",
    tagline: "Clean prep. Even coats. Sharp lines.",
    title: "Painting",
    highlight: "Interior and exterior painting that lasts.",
    description:
      "Interior and exterior painting with proper surface prep, premium coatings, and clean cut-ins. We protect your floors and finishes from the first drop cloth on.",
    icon: <Paintbrush className="h-10 w-10" />,
    gallery: [],
    subServices: [
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "Interior Painting",
        description:
          "Walls, ceilings, trim, doors, and cabinets — patching, priming, and clean two-coat finishes.",
      },
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Exterior Painting",
        description:
          "Power washing, scraping, priming, and exterior-grade paint for siding, trim, decks, and porches.",
      },
    ],
  },
  {
    id: "vinyl-flooring",
    badge: "Luxury Vinyl Plank · Tile · Sheet",
    category: "Flooring",
    tagline: "Flat, level, and built to last.",
    title: "Vinyl Flooring",
    highlight: "Professional vinyl installation, done right the first time.",
    description:
      "Luxury vinyl plank, vinyl tile, and sheet vinyl installation. Subfloor leveling, proper expansion gaps, and clean transitions to other rooms.",
    icon: <Layers className="h-10 w-10" />,
    gallery: [],
    subServices: [
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "Vinyl Plank & Tile",
        description:
          "Click-lock and glue-down installs over level, prepped subfloors with clean baseboard reinstallation.",
      },
      {
        icon: <Wrench className="h-5 w-5" />,
        title: "Subfloor Prep",
        description:
          "Leveling, patching, and moisture barriers so your new floor looks and performs like it should.",
      },
    ],
  },
  {
    id: "tile",
    badge: "Floors · Walls · Showers · Backsplashes",
    category: "Tile Work",
    tagline: "Precise layouts. Crisp grout. Watertight.",
    title: "Tile Installation",
    highlight: "Floor, wall, and shower tile — built to last.",
    description:
      "Tile installation for floors, walls, showers, and backsplashes. Properly waterproofed substrates, balanced layouts, and clean grout lines from edge to edge.",
    icon: <LayoutGrid className="h-10 w-10" />,
    gallery: [],
    subServices: [
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "Floor & Wall Tile",
        description:
          "Porcelain, ceramic, stone, and mosaic tile installed level with planned, balanced layouts.",
      },
      {
        icon: <ShieldCheck className="h-5 w-5" />,
        title: "Shower & Wet Areas",
        description:
          "Waterproofed shower pans, walls, and niches built to drain correctly and stay watertight.",
      },
    ],
  },
  {
    id: "plaster",
    badge: "Repairs · Skim Coats · Full Walls",
    category: "Walls & Ceilings",
    tagline: "Smooth walls — paint goes on without a fight.",
    title: "Plaster",
    highlight: "Plaster repair, skim coats, and full walls.",
    description:
      "Plaster repairs, full skim coats, and new plaster work. Patch holes, fix cracks, and bring old walls back to a smooth, paint-ready surface.",
    icon: <Building2 className="h-10 w-10" />,
    gallery: [],
    subServices: [
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "Repairs & Patching",
        description:
          "Holes, cracks, water damage, and ceiling repairs blended seamlessly into the surrounding wall.",
      },
      {
        icon: <Wrench className="h-5 w-5" />,
        title: "Skim Coats & New Walls",
        description:
          "Full-room skim coats over old plaster or drywall, plus fresh plaster for renovations and additions.",
      },
    ],
  },
];

export default function ServiceSections() {
  return (
    <div>
      {services.map((service, i) => (
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
                {service.icon}
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
                {service.subServices.map((sub) => (
                  <div
                    key={sub.title}
                    className="rounded-2xl border border-border/60 bg-white p-5 text-left shadow-sm"
                  >
                    <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      {sub.icon}
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
