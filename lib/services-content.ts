export interface SubServiceContent {
  title: string;
  description: string;
}

export interface ServiceContent {
  id: string;
  badge: string;
  category: string;
  tagline: string;
  title: string;
  highlight: string;
  description: string;
  longDescription: string;
  trustPoints: string[];
  iconName: string;
  heroImage: string;
  gallery: { src: string; alt: string }[];
  subServices: SubServiceContent[];
  metaDescription: string;
}

export const SERVICES_CONTENT: ServiceContent[] = [
  {
    id: "kitchen-bath-remodel",
    badge: "Kitchen · Bathroom · Full Renovations",
    category: "Remodeling",
    tagline: "Modern remodels that fit how you actually live.",
    title: "Kitchen & Bathroom Remodel",
    highlight: "Layout, plumbing, finishes — all under one contractor.",
    description:
      "Full kitchen and bathroom remodels from demo to final fixtures. We coordinate plumbing, tile, cabinetry, and finishes so your project stays on schedule and on budget.",
    longDescription:
      "Kitchen and bathroom remodels touch every trade in the house — plumbing, electrical, tile, cabinetry, drywall, and paint. As your general contractor, we run the project end-to-end so you have one point of contact, one schedule, and one accountable team. From design and material selection to final cleanup, we keep your project moving without surprises.",
    trustPoints: [
      "Licensed & insured in Massachusetts",
      "Code-compliant plumbing and electrical",
      "Clean job sites and protected floors",
      "Free in-home estimate",
    ],
    iconName: "ChefHat",
    heroImage: "/services/kitchen-bath-remodel/kitchen-bath-remodel-1.jpg",
    gallery: [
      { src: "/services/kitchen-bath-remodel/kitchen-bath-remodel-1.jpg", alt: "Modern kitchen remodel" },
      { src: "/services/kitchen-bath-remodel/kitchen-bath-remodel-2.jpg", alt: "Renovated kitchen with island" },
      { src: "/services/kitchen-bath-remodel/kitchen-bath-remodel-3.jpg", alt: "Bathroom remodel detail" },
      { src: "/services/kitchen-bath-remodel/kitchen-bath-remodel-4.jpg", alt: "Updated kitchen finishes" },
    ],
    subServices: [
      {
        title: "Kitchen Remodels",
        description:
          "Cabinets, countertops, backsplash, plumbing, and lighting — all coordinated and finished cleanly.",
      },
      {
        title: "Bathroom Remodels",
        description:
          "Tile work, vanities, tubs, showers, and fixtures installed level, square, and watertight.",
      },
    ],
    metaDescription:
      "Full kitchen and bathroom remodels in Lowell, MA. Layout, plumbing, tile, and finishes — coordinated end-to-end. Free estimates.",
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
    longDescription:
      "Stairs get used thousands of times a year — they need to be built and finished accordingly. We handle new stair construction, structural repairs, refinished treads and risers, and railings. Whether it's an interior staircase that needs to look beautiful or exterior steps that need to survive a New England winter, we build them to code and to last.",
    trustPoints: [
      "Code-compliant rise, run, and railings",
      "Solid framing and tight joinery",
      "Interior finish work and exterior weather sealing",
      "Free in-home estimate",
    ],
    iconName: "Footprints",
    heroImage: "/services/stairs/stairs-1.jpg",
    gallery: [
      { src: "/services/stairs/stairs-1.jpg", alt: "Wooden staircase" },
      { src: "/services/stairs/stairs-2.jpg", alt: "Custom stair build" },
      { src: "/services/stairs/stairs-3.jpg", alt: "Stair railing detail" },
      { src: "/services/stairs/stairs-4.jpg", alt: "Refinished staircase" },
    ],
    subServices: [
      {
        title: "New Stair Construction",
        description:
          "Interior and exterior stair builds — code-compliant rise/run, solid framing, and clean finish work.",
      },
      {
        title: "Repairs & Refinishing",
        description:
          "Replace worn treads, fix squeaks, refinish railings, and bring tired staircases back to life.",
      },
    ],
    metaDescription:
      "Custom stair construction, repairs, and refinishing in Lowell, MA. Code-compliant interior and exterior stairs. Free estimates.",
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
    longDescription:
      "A deck in New England gets hammered — sun, snow, ice, and freeze-thaw cycles. We build decks that handle it: properly footed structures, the right fasteners and flashing, code-compliant railings, and finishes that won't fail after one winter. Whether it's a brand new deck, full restoration, or board replacement, we use materials and methods built for the long haul.",
    trustPoints: [
      "Properly footed structures",
      "Code-compliant railings and fasteners",
      "Pressure-treated, composite, or hardwood options",
      "Free on-site estimate",
    ],
    iconName: "Hammer",
    heroImage: "/services/decks/decks-1.jpg",
    gallery: [
      { src: "/services/decks/decks-1.jpg", alt: "Backyard wooden deck" },
      { src: "/services/decks/decks-2.jpg", alt: "Composite deck build" },
      { src: "/services/decks/decks-3.jpg", alt: "Deck with railing" },
      { src: "/services/decks/decks-4.jpg", alt: "Restored outdoor deck" },
    ],
    subServices: [
      {
        title: "New Deck Construction",
        description:
          "Pressure-treated, composite, or hardwood decks built on properly footed structures with code-compliant railings.",
      },
      {
        title: "Repairs & Restoration",
        description:
          "Board replacement, structural repairs, sanding, and refinishing to extend the life of your existing deck.",
      },
    ],
    metaDescription:
      "Deck construction and restoration in Lowell, MA. Pressure-treated, composite, and hardwood decks built for New England weather. Free estimates.",
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
    longDescription:
      "Great paint jobs come down to prep — patching, sanding, priming, and protecting everything that isn't getting painted. We take that part seriously. Walls, ceilings, trim, doors, cabinets, and exterior siding all get the right preparation, primer, and two coats of premium paint. Clean cut-ins, no roller marks, no missed spots.",
    trustPoints: [
      "Proper surface prep before primer",
      "Premium interior and exterior paints",
      "Floors and finishes protected throughout",
      "Free color and scope consultation",
    ],
    iconName: "Paintbrush",
    heroImage: "/services/painting/painting-1.jpg",
    gallery: [
      { src: "/services/painting/painting-1.jpg", alt: "Interior painting work" },
      { src: "/services/painting/painting-2.jpg", alt: "House exterior painting" },
      { src: "/services/painting/painting-3.jpg", alt: "Painting trim detail" },
      { src: "/services/painting/painting-4.jpg", alt: "Freshly painted room" },
    ],
    subServices: [
      {
        title: "Interior Painting",
        description:
          "Walls, ceilings, trim, doors, and cabinets — patching, priming, and clean two-coat finishes.",
      },
      {
        title: "Exterior Painting",
        description:
          "Power washing, scraping, priming, and exterior-grade paint for siding, trim, decks, and porches.",
      },
    ],
    metaDescription:
      "Interior and exterior painting in Lowell, MA. Premium prep, primer, and two-coat finishes for walls, trim, cabinets, and siding. Free estimates.",
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
    longDescription:
      "Vinyl floors are only as good as the subfloor underneath them. We level, patch, and prep the subfloor so the new floor lays flat with no clicking, popping, or gaps. Luxury vinyl plank, vinyl tile, or sheet vinyl — we install with proper expansion gaps, clean transitions to other rooms, and reinstalled baseboards that look like they were never moved.",
    trustPoints: [
      "Subfloor leveling and prep included",
      "Click-lock and glue-down installations",
      "Clean transitions to adjoining rooms",
      "Free on-site estimate and measurements",
    ],
    iconName: "Layers",
    heroImage: "/services/vinyl-flooring/vinyl-flooring-1.jpg",
    gallery: [
      { src: "/services/vinyl-flooring/vinyl-flooring-1.jpg", alt: "Luxury vinyl plank flooring" },
      { src: "/services/vinyl-flooring/vinyl-flooring-2.jpg", alt: "Vinyl plank installation" },
      { src: "/services/vinyl-flooring/vinyl-flooring-3.jpg", alt: "Finished vinyl floor" },
      { src: "/services/vinyl-flooring/vinyl-flooring-4.jpg", alt: "Vinyl flooring detail" },
    ],
    subServices: [
      {
        title: "Vinyl Plank & Tile",
        description:
          "Click-lock and glue-down installs over level, prepped subfloors with clean baseboard reinstallation.",
      },
      {
        title: "Subfloor Prep",
        description:
          "Leveling, patching, and moisture barriers so your new floor looks and performs like it should.",
      },
    ],
    metaDescription:
      "Vinyl flooring installation in Lowell, MA. Luxury vinyl plank, tile, and sheet vinyl over properly prepped subfloors. Free estimates.",
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
    longDescription:
      "Tile is unforgiving — uneven substrates, bad layouts, and missed waterproofing show up months or years later. We waterproof shower pans and walls properly, plan layouts so cuts land in the right places, and grout cleanly so nothing cracks down the line. Porcelain, ceramic, stone, mosaic — we install it level, square, and watertight.",
    trustPoints: [
      "Waterproofed shower substrates",
      "Balanced, planned tile layouts",
      "Clean grout lines and even spacing",
      "Free on-site consultation",
    ],
    iconName: "LayoutGrid",
    heroImage: "/services/tile/tile-1.jpg",
    gallery: [
      { src: "/services/tile/tile-1.jpg", alt: "Bathroom tile work" },
      { src: "/services/tile/tile-2.jpg", alt: "Shower tile installation" },
      { src: "/services/tile/tile-3.jpg", alt: "Tile floor detail" },
      { src: "/services/tile/tile-4.jpg", alt: "Backsplash tile" },
    ],
    subServices: [
      {
        title: "Floor & Wall Tile",
        description:
          "Porcelain, ceramic, stone, and mosaic tile installed level with planned, balanced layouts.",
      },
      {
        title: "Shower & Wet Areas",
        description:
          "Waterproofed shower pans, walls, and niches built to drain correctly and stay watertight.",
      },
    ],
    metaDescription:
      "Tile installation in Lowell, MA. Floors, walls, showers, and backsplashes installed level and watertight. Free estimates.",
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
    longDescription:
      "Old plaster walls have character — and cracks, holes, and water damage. We repair, skim coat, or fully replace plaster so your walls go back to looking smooth and modern, ready for paint. From small patches to full-room skim coats over decades-old plaster, we feather the work so repairs disappear into the surrounding wall.",
    trustPoints: [
      "Hole, crack, and water-damage repairs",
      "Full-room skim coats",
      "New plaster for renovations and additions",
      "Free in-home estimate",
    ],
    iconName: "Building2",
    heroImage: "/services/plaster/plaster-1.jpg",
    gallery: [
      { src: "/services/plaster/plaster-1.jpg", alt: "Plaster wall finish" },
      { src: "/services/plaster/plaster-2.jpg", alt: "Plaster repair work" },
      { src: "/services/plaster/plaster-3.jpg", alt: "Smooth plaster wall" },
      { src: "/services/plaster/plaster-4.jpg", alt: "Plaster detail" },
    ],
    subServices: [
      {
        title: "Repairs & Patching",
        description:
          "Holes, cracks, water damage, and ceiling repairs blended seamlessly into the surrounding wall.",
      },
      {
        title: "Skim Coats & New Walls",
        description:
          "Full-room skim coats over old plaster or drywall, plus fresh plaster for renovations and additions.",
      },
    ],
    metaDescription:
      "Plaster repair, skim coats, and new plaster work in Lowell, MA. Smooth, paint-ready walls. Free estimates.",
  },
  {
    id: "plumbing",
    badge: "Repairs · Installs · Remodels",
    category: "Plumbing",
    tagline: "Plumbing done clean — and done right the first time.",
    title: "Plumbing",
    highlight: "Repairs, fixtures, water heaters, and rough-ins.",
    description:
      "Plumbing repairs, fixture installations, water heaters, and full remodel rough-ins. Code-compliant work with clean joints and no shortcuts.",
    longDescription:
      "Plumbing problems don't wait. From leaky faucets and running toilets to water heater swaps and full bathroom rough-ins, we handle residential plumbing with code-compliant work and clean job sites. As your general contractor, we coordinate plumbing alongside tile, cabinetry, and finishes so remodels actually finish on schedule.",
    trustPoints: [
      "Licensed & insured",
      "Code-compliant materials and joints",
      "Upfront pricing — no surprises",
      "Free in-home estimate",
    ],
    iconName: "Droplets",
    heroImage: "/services/plumbing/plumbing-1.jpg",
    gallery: [
      { src: "/services/plumbing/plumbing-1.jpg", alt: "Plumbing repair work" },
      { src: "/services/plumbing/plumbing-2.jpg", alt: "Bathroom plumbing fixtures" },
      { src: "/services/plumbing/plumbing-3.jpg", alt: "Water heater installation" },
      { src: "/services/plumbing/plumbing-4.jpg", alt: "Plumbing rough-in" },
    ],
    subServices: [
      {
        title: "Repairs & Fixture Installs",
        description:
          "Leaks, drains, faucets, toilets, and disposals — diagnosed, repaired, and tested before we leave.",
      },
      {
        title: "Water Heaters & Rough-Ins",
        description:
          "Tank and tankless water heater installation, plus full plumbing rough-ins for remodels and additions.",
      },
    ],
    metaDescription:
      "Residential plumbing in Lowell, MA. Repairs, fixture installs, water heaters, and remodel rough-ins. Free estimates.",
  },
  {
    id: "hvac",
    badge: "Heating · Cooling · Service & Install",
    category: "HVAC",
    tagline: "Comfortable home. Year-round, every year.",
    title: "HVAC",
    highlight: "Heating and cooling installation, service, and repair.",
    description:
      "Furnace, boiler, mini-split, and central AC installation, service, and repair. Sized correctly, installed cleanly, and tuned for efficiency.",
    longDescription:
      "Heating and cooling systems only work as well as they're sized and installed. We handle furnaces, boilers, ductless mini-splits, and central AC — from new installs and replacements to seasonal service and repairs. Proper sizing, clean line sets, and tested airflow so your home stays comfortable through New England winters and summers.",
    trustPoints: [
      "Licensed & insured",
      "Properly sized systems for your home",
      "Clean installs — no exposed wires or sloppy line sets",
      "Free in-home estimate",
    ],
    iconName: "Wind",
    heroImage: "/services/hvac/hvac-1.jpg",
    gallery: [
      { src: "/services/hvac/hvac-1.jpg", alt: "HVAC system installation" },
      { src: "/services/hvac/hvac-2.jpg", alt: "Ductless mini-split unit" },
      { src: "/services/hvac/hvac-3.jpg", alt: "Furnace service" },
      { src: "/services/hvac/hvac-4.jpg", alt: "Outdoor AC condenser" },
    ],
    subServices: [
      {
        title: "Installation & Replacement",
        description:
          "Furnaces, boilers, central AC, and ductless mini-splits sized correctly and installed cleanly.",
      },
      {
        title: "Service & Repair",
        description:
          "Seasonal tune-ups, diagnostics, and repairs to keep your heating and cooling running efficiently.",
      },
    ],
    metaDescription:
      "HVAC installation, service, and repair in Lowell, MA. Furnaces, boilers, central AC, and ductless mini-splits. Free estimates.",
  },
];

export function getServiceContent(id: string): ServiceContent | undefined {
  return SERVICES_CONTENT.find((s) => s.id === id);
}
