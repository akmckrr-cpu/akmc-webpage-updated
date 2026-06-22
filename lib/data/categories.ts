export const categories = [
  {
    name: "Aluminium Extrusion",
    slug: "aluminium-extrusion",
    displayName: "Aluminium Extrusion",
    description: "High-quality aluminium extrusion profiles for bus body construction including window frames, roof sections, partitions, and side panels.",
    icon: "Ruler",
    subcategories: ["Bus Window Extrusion", "Roof Extrusion", "Partition Extrusion", "Side Panel Extrusion", "Custom Profiles"],
  },
  {
    name: "Aluminium Sheet",
    slug: "aluminium-sheet",
    displayName: "Aluminium Sheet",
    description: "Premium aluminium sheets in various thicknesses (0.8mm to 2mm) for bus body cladding, roofing, and interior applications.",
    icon: "Sheet",
    subcategories: ["0.8mm", "1mm", "1.2mm", "1.5mm", "2mm"],
  },
  {
    name: "ACP Sheet",
    slug: "acp-sheet",
    displayName: "ACP Sheet",
    description: "Aluminium Composite Panels for bus ceilings, interiors, and decorative applications. Available in multiple designs and colors.",
    icon: "Layers",
    subcategories: ["Bus Ceiling ACP", "Interior ACP", "Decorative ACP"],
  },
  {
    name: "Chequered Plywood",
    slug: "chequered-plywood",
    displayName: "Chequered Plywood",
    description: "Anti-slip chequered plywood for bus flooring. Available in standard vehicle sizes and custom dimensions.",
    icon: "Grid3X3",
    subcategories: ["Tata Ace", "Dost", "Dost+", "Custom Sizes"],
  },
  {
    name: "Paints",
    slug: "paints",
    displayName: "Paints & Coatings",
    description: "Industrial-grade paints, primers, and putty from leading brands like Asian Paints for bus body finishing.",
    icon: "Paintbrush",
    subcategories: ["Asian Paints", "Industrial Paints", "Putty", "Primer"],
  },
  {
    name: "Sealants",
    slug: "sealants",
    displayName: "Sealants & Adhesives",
    description: "High-performance sealants including Dowsil GP, PU sealants, and silicone for weatherproofing and bonding.",
    icon: "Droplets",
    subcategories: ["Dowsil GP", "PU Sealant", "Silicone"],
  },
  {
    name: "Bus Body Hardware",
    slug: "bus-body-hardware",
    displayName: "Bus Body Hardware",
    description: "Complete range of hardware fittings, fasteners, hinges, locks, and accessories for bus body construction.",
    icon: "Wrench",
    subcategories: ["Hinges", "Locks", "Fasteners", "Handles", "Accessories"],
  },
];

export const brands = [
  { name: "Dow", slug: "dow", categories: ["sealants"], logo: "/brands/dow.svg" },
  { name: "Asian Paints", slug: "asian-paints", categories: ["paints"], logo: "/brands/asian-paints.svg" },
  { name: "PratapBond", slug: "pratapbond", categories: ["acp-sheet"], logo: "/brands/pratapbond.svg" },
  { name: "Magnus", slug: "magnus", categories: ["acp-sheet"], logo: "/brands/magnus.svg" },
  { name: "Hindalco", slug: "hindalco", categories: ["aluminium-extrusion", "aluminium-sheet"], logo: "/brands/hindalco.svg" },
  { name: "Jindal", slug: "jindal", categories: ["aluminium-extrusion", "aluminium-sheet"], logo: "/brands/jindal.svg" },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function getAllCategorySlugs() {
  return categories.map((c) => c.slug);
}
