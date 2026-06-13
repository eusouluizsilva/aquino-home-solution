export type CityTier = "home" | "A" | "B" | "C";

export interface City {
  name: string;
  slug: string;
  zip: string;
  tier: CityTier;
  /** Unique intro paragraph — city-specific, used for SEO copy */
  intro: string;
  /** Service ids to emphasize first on this city's page */
  emphasis: string[];
  /** Slugs of nearby cities for internal linking */
  nearby: string[];
  /** Which banner video to use */
  banner: "estate" | "suburban" | "aerial";
}

export const CITY_BANNERS: Record<City["banner"], string> = {
  estate: "/cities/banner-estate.mp4",
  suburban: "/cities/banner-suburban.mp4",
  aerial: "/cities/banner-aerial.mp4",
};

export const CITY_POSTERS: Record<City["banner"], string> = {
  estate: "/cities/poster-estate.jpg",
  suburban: "/cities/poster-suburban.jpg",
  aerial: "/cities/poster-aerial.jpg",
};

export const CITIES: City[] = [
  {
    name: "Lowell",
    slug: "lowell",
    zip: "01850",
    tier: "home",
    intro:
      "Lowell is home base for Aquino Home Solutions. From historic mill-era triple-deckers in Centralville to colonials in Belvidere and the Highlands, we know this city's housing stock inside out — and being local means the fastest response times anywhere in our coverage area.",
    emphasis: ["kitchen-bath-remodel", "plumbing", "hvac", "plaster"],
    nearby: ["chelmsford", "tyngsborough", "westford"],
    banner: "aerial",
  },
  // ── Tier A — high-end project towns ──
  {
    name: "Weston",
    slug: "weston",
    zip: "02493",
    tier: "A",
    intro:
      "Weston's estate properties and custom homes demand contractor-level coordination and finish quality to match. We handle full kitchen and bath renovations, custom carpentry, and whole-room remodels for Weston homeowners who expect clean job sites, clear schedules, and detail-perfect results.",
    emphasis: ["kitchen-bath-remodel", "painting", "stairs", "tile"],
    nearby: ["lincoln", "wayland", "sudbury"],
    banner: "estate",
  },
  {
    name: "Lincoln",
    slug: "lincoln",
    zip: "01773",
    tier: "A",
    intro:
      "From antique farmhouses to Lincoln's celebrated mid-century modern homes, renovations here call for a contractor who respects original architecture while delivering modern function. We bring careful planning and craftsmanship to every Lincoln project, large or small.",
    emphasis: ["kitchen-bath-remodel", "painting", "plaster", "decks"],
    nearby: ["weston", "concord", "lexington"],
    banner: "estate",
  },
  {
    name: "Lexington",
    slug: "lexington",
    zip: "02421",
    tier: "A",
    intro:
      "Lexington's classic colonials and expanding families keep kitchens, baths, and additions in constant demand. We help Lexington homeowners modernize layouts, upgrade finishes, and add living space — with code-compliant work and one accountable team from demo to final walkthrough.",
    emphasis: ["kitchen-bath-remodel", "tile", "stairs", "hvac"],
    nearby: ["lincoln", "bedford", "winchester", "belmont"],
    banner: "estate",
  },
  {
    name: "Concord",
    slug: "concord",
    zip: "01742",
    tier: "A",
    intro:
      "Concord's historic homes — some standing since before the Revolution — deserve renovation work that honors their character. We specialize in updating antique colonials with period-sensitive plaster, trim, and finish work, while bringing kitchens, baths, and systems fully up to date.",
    emphasis: ["plaster", "kitchen-bath-remodel", "painting", "stairs"],
    nearby: ["carlisle", "lincoln", "sudbury", "acton"],
    banner: "estate",
  },
  {
    name: "Carlisle",
    slug: "carlisle",
    zip: "01741",
    tier: "A",
    intro:
      "Carlisle's large wooded lots and custom homes make it one of our favorite towns to work in. Decks, screened porches, and outdoor living projects shine here, alongside full interior renovations for homeowners who want estate-quality finish work.",
    emphasis: ["decks", "kitchen-bath-remodel", "painting", "vinyl-flooring"],
    nearby: ["concord", "westford", "bedford", "chelmsford"],
    banner: "estate",
  },
  {
    name: "Sudbury",
    slug: "sudbury",
    zip: "01776",
    tier: "A",
    intro:
      "Sudbury's center-entrance colonials and family neighborhoods generate steady demand for kitchen updates, bath remodels, and finished basements. We give Sudbury homeowners a single point of contact for projects that touch every trade — plumbing, tile, carpentry, and paint.",
    emphasis: ["kitchen-bath-remodel", "tile", "vinyl-flooring", "painting"],
    nearby: ["wayland", "weston", "concord", "hudson"],
    banner: "estate",
  },
  {
    name: "Andover",
    slug: "andover",
    zip: "01810",
    tier: "A",
    intro:
      "Andover's stately homes — from Phillips Academy's neighborhoods to newer estates in West Andover — call for full-scope renovation capability. We deliver kitchen and bath remodels, custom stairs, and whole-home updates with the project management Andover homeowners expect.",
    emphasis: ["kitchen-bath-remodel", "stairs", "hvac", "painting"],
    nearby: ["north-andover", "wilmington", "north-reading"],
    banner: "estate",
  },
  {
    name: "Winchester",
    slug: "winchester",
    zip: "01890",
    tier: "A",
    intro:
      "Winchester's turn-of-the-century Victorians and colonials near the Middlesex Fells combine beautiful bones with aging systems. We modernize kitchens, baths, plumbing, and heating while preserving the original details — crown moldings, plaster walls, and hardwood stairs — that make these homes special.",
    emphasis: ["kitchen-bath-remodel", "plaster", "plumbing", "stairs"],
    nearby: ["stoneham", "lexington", "burlington", "melrose"],
    banner: "estate",
  },
  {
    name: "Belmont",
    slug: "belmont",
    zip: "02478",
    tier: "A",
    intro:
      "From Belmont Hill estates to the town's classic two-family homes, Belmont renovations range from high-end custom work to practical unit updates. We handle both — full remodels, plaster repair, painting, and flooring — with crews that keep occupied homes clean and livable during the work.",
    emphasis: ["plaster", "kitchen-bath-remodel", "painting", "vinyl-flooring"],
    nearby: ["lexington", "winchester", "wayland"],
    banner: "estate",
  },
  {
    name: "Boxford",
    slug: "boxford",
    zip: "01921",
    tier: "A",
    intro:
      "Boxford's wooded acreage and custom-built homes make outdoor living projects a natural fit — decks, porches, and exterior refinishing built for New England weather. Inside, we deliver the same estate-quality work on kitchens, baths, and floors.",
    emphasis: ["decks", "painting", "kitchen-bath-remodel", "hvac"],
    nearby: ["north-andover", "georgetown", "north-reading"],
    banner: "estate",
  },
  // ── Tier B — kitchens, baths & HVAC towns ──
  {
    name: "Acton",
    slug: "acton",
    zip: "01720",
    tier: "B",
    intro:
      "Acton's 1970s and '80s colonials are prime candidates for the kitchen and bath updates that transform a house. We help Acton families open up layouts, replace tired finishes, and upgrade heating and cooling — on schedule and on budget.",
    emphasis: ["kitchen-bath-remodel", "hvac", "vinyl-flooring", "tile"],
    nearby: ["concord", "westford", "littleton", "carlisle"],
    banner: "suburban",
  },
  {
    name: "Bedford",
    slug: "bedford",
    zip: "01730",
    tier: "B",
    intro:
      "Bedford's capes and split-levels respond beautifully to smart renovations — modernized baths, refreshed kitchens, and efficient HVAC. We bring licensed, insured crews and clear communication to every Bedford project.",
    emphasis: ["kitchen-bath-remodel", "hvac", "tile", "painting"],
    nearby: ["lexington", "concord", "burlington", "carlisle"],
    banner: "suburban",
  },
  {
    name: "Westford",
    slug: "westford",
    zip: "01886",
    tier: "B",
    intro:
      "Westford blends newer developments with an antique town center, and we work in both — flooring, tile, and bath remodels in the newer neighborhoods, and careful renovation work in the older homes near the common.",
    emphasis: ["vinyl-flooring", "tile", "kitchen-bath-remodel", "plumbing"],
    nearby: ["chelmsford", "acton", "littleton", "groton", "tyngsborough"],
    banner: "suburban",
  },
  {
    name: "North Andover",
    slug: "north-andover",
    zip: "01845",
    tier: "B",
    intro:
      "From lakefront homes around Lake Cochichewick to newer construction near the high school, North Andover keeps us busy with finish work, bath remodels, and HVAC installations. One call covers every trade on your project.",
    emphasis: ["kitchen-bath-remodel", "hvac", "tile", "decks"],
    nearby: ["andover", "boxford", "north-reading"],
    banner: "suburban",
  },
  {
    name: "Reading",
    slug: "reading",
    zip: "01867",
    tier: "B",
    intro:
      "Reading's classic commuter-town colonials benefit from the fundamentals done right: smooth plaster, crisp interior paint, updated baths, and floors that last. We deliver clean, code-compliant work for Reading homeowners year-round.",
    emphasis: ["painting", "plaster", "kitchen-bath-remodel", "vinyl-flooring"],
    nearby: ["north-reading", "wakefield", "stoneham", "wilmington", "lynnfield"],
    banner: "suburban",
  },
  {
    name: "Lynnfield",
    slug: "lynnfield",
    zip: "01940",
    tier: "B",
    intro:
      "Lynnfield's upscale ranches and colonials — many within minutes of MarketStreet — are seeing a wave of high-quality renovations. We bring remodel-grade finish work to Lynnfield kitchens, baths, and main living spaces.",
    emphasis: ["kitchen-bath-remodel", "tile", "painting", "hvac"],
    nearby: ["wakefield", "reading", "north-reading", "melrose"],
    banner: "suburban",
  },
  {
    name: "Wayland",
    slug: "wayland",
    zip: "01778",
    tier: "B",
    intro:
      "Wayland's mix of mid-century homes and newer builds near the Sudbury River calls for versatile renovation work — from opening up dated layouts to refinishing floors and updating baths. We handle Wayland projects end to end.",
    emphasis: ["kitchen-bath-remodel", "vinyl-flooring", "painting", "plumbing"],
    nearby: ["sudbury", "weston", "lincoln"],
    banner: "suburban",
  },
  {
    name: "Burlington",
    slug: "burlington",
    zip: "01803",
    tier: "B",
    intro:
      "Burlington's ranches and split-levels are perfect candidates for interior refreshes — new floors, modern baths, smooth ceilings, and efficient heating and cooling. We keep Burlington projects moving with tight schedules and clean job sites.",
    emphasis: ["vinyl-flooring", "kitchen-bath-remodel", "hvac", "plaster"],
    nearby: ["bedford", "wilmington", "winchester", "lexington"],
    banner: "suburban",
  },
  {
    name: "North Reading",
    slug: "north-reading",
    zip: "01864",
    tier: "B",
    intro:
      "Along the Ipswich River neighborhoods of North Reading, we build and restore decks, refresh exteriors, and modernize kitchens and heating systems. Licensed, insured, and easy to reach when you have questions mid-project.",
    emphasis: ["decks", "hvac", "kitchen-bath-remodel", "painting"],
    nearby: ["reading", "andover", "wilmington", "lynnfield"],
    banner: "suburban",
  },
  {
    name: "Groton",
    slug: "groton",
    zip: "01450",
    tier: "B",
    intro:
      "Groton's historic main street and surrounding farmhouses reward restoration-minded work — plaster, trim, and paint done with care, plus the modern kitchen and bath updates that make an antique home livable.",
    emphasis: ["plaster", "painting", "kitchen-bath-remodel", "decks"],
    nearby: ["westford", "littleton", "tyngsborough"],
    banner: "suburban",
  },
  // ── Tier C — volume towns ──
  {
    name: "Chelmsford",
    slug: "chelmsford",
    zip: "01824",
    tier: "C",
    intro:
      "Chelmsford is right next door to our Lowell home base, which means same-day visits and fast scheduling. From Chelmsford Center to North Chelmsford, we cover every service we offer — remodels, decks, painting, flooring, plumbing, and HVAC.",
    emphasis: ["kitchen-bath-remodel", "plumbing", "hvac", "decks"],
    nearby: ["lowell", "westford", "carlisle", "tyngsborough"],
    banner: "aerial",
  },
  {
    name: "Tyngsborough",
    slug: "tyngsborough",
    zip: "01879",
    tier: "C",
    intro:
      "Tyngsborough's riverfront homes and quiet neighborhoods along the NH border are minutes from our base, so response times are quick. Decks, exterior painting, and full interior remodels are our most-requested projects here.",
    emphasis: ["decks", "painting", "kitchen-bath-remodel", "vinyl-flooring"],
    nearby: ["lowell", "chelmsford", "westford", "groton"],
    banner: "aerial",
  },
  {
    name: "Hudson",
    slug: "hudson",
    zip: "01749",
    tier: "C",
    intro:
      "Hudson's revitalized downtown has brought new energy — and renovation demand — to its older housing stock. We update kitchens, baths, and two-family units across Hudson with practical, durable finish work.",
    emphasis: ["kitchen-bath-remodel", "vinyl-flooring", "plumbing", "painting"],
    nearby: ["marlborough", "sudbury", "acton"],
    banner: "suburban",
  },
  {
    name: "Marlborough",
    slug: "marlborough",
    zip: "01752",
    tier: "C",
    intro:
      "From condos near the Apex Center to classic colonials in West Marlborough, we deliver bath remodels, tile work, and flooring across the city. Clear estimates, clean work, and one team from start to finish.",
    emphasis: ["tile", "kitchen-bath-remodel", "vinyl-flooring", "plaster"],
    nearby: ["hudson", "sudbury"],
    banner: "suburban",
  },
  {
    name: "Wakefield",
    slug: "wakefield",
    zip: "01880",
    tier: "C",
    intro:
      "Wakefield's Victorians around Lake Quannapowitt have the kind of plaster walls, wood trim, and painted details we love restoring. We also handle the modern side — baths, floors, and heating — throughout Wakefield.",
    emphasis: ["plaster", "painting", "kitchen-bath-remodel", "stairs"],
    nearby: ["lynnfield", "reading", "stoneham", "melrose"],
    banner: "suburban",
  },
  {
    name: "Stoneham",
    slug: "stoneham",
    zip: "02180",
    tier: "C",
    intro:
      "Stoneham's capes and colonials near the Middlesex Fells are ideal for smart, budget-conscious renovations — refreshed baths, new flooring, and crisp paint. We give Stoneham homeowners honest estimates and tidy job sites.",
    emphasis: ["kitchen-bath-remodel", "painting", "vinyl-flooring", "plumbing"],
    nearby: ["winchester", "melrose", "wakefield", "reading"],
    banner: "suburban",
  },
  {
    name: "Melrose",
    slug: "melrose",
    zip: "02176",
    tier: "C",
    intro:
      "Melrose has one of the region's best collections of Victorian homes, and renovating them takes period-sensitive skill — real plaster repair, detailed trim painting, and stair restoration. That's exactly the work we do best.",
    emphasis: ["plaster", "painting", "stairs", "kitchen-bath-remodel"],
    nearby: ["wakefield", "stoneham", "winchester", "lynnfield"],
    banner: "suburban",
  },
  {
    name: "Wilmington",
    slug: "wilmington",
    zip: "01887",
    tier: "C",
    intro:
      "Wilmington's family neighborhoods of capes and split-levels keep us busy with flooring, bath updates, and heating and cooling work. We're minutes away, licensed and insured, and easy to schedule.",
    emphasis: ["vinyl-flooring", "kitchen-bath-remodel", "hvac", "painting"],
    nearby: ["burlington", "reading", "north-reading", "andover"],
    banner: "suburban",
  },
  {
    name: "Littleton",
    slug: "littleton",
    zip: "01460",
    tier: "C",
    intro:
      "Littleton's farmhouse character and growing neighborhoods call for a contractor comfortable with both — antique-home restoration and modern kitchen, bath, and flooring updates. We deliver both across Littleton.",
    emphasis: ["kitchen-bath-remodel", "painting", "vinyl-flooring", "decks"],
    nearby: ["westford", "acton", "groton"],
    banner: "suburban",
  },
  {
    name: "Georgetown",
    slug: "georgetown",
    zip: "01833",
    tier: "C",
    intro:
      "Georgetown's antique homes on the edge of the North Shore reward careful exterior work — paint, decks, and porches built to handle coastal New England weather — plus interior plaster and finish carpentry done right.",
    emphasis: ["painting", "decks", "plaster", "kitchen-bath-remodel"],
    nearby: ["boxford", "north-andover"],
    banner: "suburban",
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export const TIER_LABELS: Record<CityTier, string> = {
  home: "Our Home Base",
  A: "Premier Communities",
  B: "Core Service Area",
  C: "Greater Lowell Area",
};
