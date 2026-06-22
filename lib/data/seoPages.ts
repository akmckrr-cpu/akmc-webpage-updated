import type { LocationPage } from "@/types";
import { cities } from "./cities";
import { categories } from "./categories";

export function generateLocationPages(): LocationPage[] {
  const pages: LocationPage[] = [];

  for (const city of cities) {
    for (const category of categories) {
      const nearby = getNearbyAreas(city.slug);
      pages.push({
        city: city.name,
        citySlug: city.slug,
        state: city.state,
        stateSlug: city.stateSlug,
        category: category.slug,
        categorySlug: category.slug,
        categoryDisplay: category.displayName,
        description: generateLocationDescription(city, category),
        seoTitle: `${category.displayName} Supplier in ${city.name}, ${city.state} | AKMC`,
        seoDescription: `Leading ${category.displayName.toLowerCase()} supplier in ${city.name}, ${city.state}. Wholesale pricing for bus body builders, OEMs, and contractors. ${nearby.slice(0, 3).join(", ")} delivery available.`,
        products: getCategoryProducts(category.slug),
        nearbyAreas: nearby,
      });
    }
  }

  return pages;
}

export function getLocationPage(citySlug: string, categorySlug: string): LocationPage | undefined {
  return generateLocationPages().find(
    (p) => p.citySlug === citySlug && p.categorySlug === categorySlug
  );
}

export function getAllLocationPagePaths(): { city: string; category: string }[] {
  return generateLocationPages().map((p) => ({
    city: p.citySlug,
    category: p.categorySlug,
  }));
}

function getNearbyAreas(citySlug: string): string[] {
  const nearbyMap: Record<string, string[]> = {
    karur: ["Kulithalai", "Vedasandur", "Dindigul", "Namakkal", "Erode", "Trichy"],
    namakkal: ["Karur", "Salem", "Erode", "Tiruchengode", "Rasipuram"],
    salem: ["Namakkal", "Erode", "Dharmapuri", "Attur", "Rasipuram"],
    erode: ["Tirupur", "Salem", "Namakkal", "Karur", "Coimbatore"],
    tirupur: ["Coimbatore", "Erode", "Dharapuram", "Udumalpet"],
    coimbatore: ["Tirupur", "Erode", "Pollachi", "Palakkad", "Ooty"],
    madurai: ["Dindigul", "Theni", "Virudhunagar", "Sivaganga", "Tirunelveli"],
    trichy: ["Karur", "Thanjavur", "Namakkal", "Pudukkottai", "Dindigul"],
    chennai: ["Kanchipuram", "Tambaram", "Sriperumbudur", "Hosur"],
    hosur: ["Bangalore", "Krishnagiri", "Dharmapuri", "Chennai"],
    palakkad: ["Coimbatore", "Thrissur", "Malappuram", "Pollachi"],
    thrissur: ["Palakkad", "Ernakulam", "Kottayam", "Malappuram"],
    kochi: ["Thrissur", "Kottayam", "Alappuzha", "Ernakulam"],
    bangalore: ["Hosur", "Mysore", "Tumkur", "Kolar", "Chennai"],
    mysore: ["Bangalore", "Mandya", "Hassan", "Chamarajanagar"],
  };
  return nearbyMap[citySlug] || [];
}

function getCategoryProducts(categorySlug: string): string[] {
  const productMap: Record<string, string[]> = {
    "aluminium-extrusion": [
      "Bus Window Extrusion Profiles",
      "Roof Rail Extrusions",
      "Side Panel Framing",
      "Partition Extrusions",
      "Custom Aluminium Profiles",
    ],
    "aluminium-sheet": [
      "Aluminium Sheet 0.8mm",
      "Aluminium Sheet 1mm",
      "Aluminium Sheet 1.2mm",
      "Aluminium Sheet 1.5mm",
      "Aluminium Sheet 2mm",
    ],
    "acp-sheet": [
      "Bus Ceiling ACP Sheet",
      "Interior ACP Panels",
      "Decorative ACP Sheets",
      "Fire Retardant ACP",
    ],
    "chequered-plywood": [
      "Tata Ace Plywood",
      "Ashok Leyland Dost Plywood",
      "Dost+ Plywood",
      "Custom Size Chequered Plywood",
    ],
    "paints": [
      "Asian Paints Industrial PU",
      "Epoxy Primers",
      "Industrial Putty",
      "Anti-Corrosion Coatings",
    ],
    "sealants": [
      "Dowsil GP Silicone Sealant",
      "PU Structural Sealant",
      "MS Polymer Sealant",
      "Butyl Tape",
    ],
    "bus-body-hardware": [
      "Door Hinge Assemblies",
      "Window Locking Mechanisms",
      "Fastener Kits",
      "Luggage Rack Brackets",
    ],
  };
  return productMap[categorySlug] || [];
}

function generateLocationDescription(city: typeof cities[0], category: typeof categories[0]): string {
  const descriptions: Record<string, string> = {
    "aluminium-extrusion": `A Karur Metal Co. is the leading supplier of ${category.displayName.toLowerCase()} in ${city.name}, ${city.state}. We provide high-quality 6063-T6 and 6061-T6 aluminium extrusion profiles for bus body construction including window frames, roof rails, side panels, and custom profiles. Our extrusions meet AIS-052 standards and are used by major bus body builders across ${city.state}.`,
    "aluminium-sheet": `Looking for ${category.displayName.toLowerCase()} in ${city.name}? A Karur Metal Co. supplies premium aluminium sheets in 0.8mm to 2mm thicknesses for bus body cladding, roofing, and interior applications. Available in 1100-H14, 3003-H14, and 5052-H32 grades with custom cutting services.`,
    "acp-sheet": `A Karur Metal Co. offers the widest range of ${category.displayName.toLowerCase()} in ${city.name}. Our aluminium composite panels are perfect for bus ceilings, interiors, and decorative applications. Available in 3mm and 4mm thicknesses with fire-retardant cores. Wood grain, metallic, and custom print finishes available.`,
    "chequered-plywood": `Buy ${category.displayName.toLowerCase()} in ${city.name} from A Karur Metal Co. Our anti-slip chequered plywood is specifically manufactured for bus and mini truck flooring. BWP grade with marine bonding. Available for Tata Ace, Ashok Leyland Dost, and custom sizes.`,
    "paints": `Get industrial-grade ${category.displayName.toLowerCase()} in ${city.name} from A Karur Metal Co. We are authorized distributors of Asian Paints Industrial Division products including PU topcoats, epoxy primers, putty, and anti-corrosion coatings for bus body finishing.`,
    "sealants": `A Karur Metal Co. supplies high-performance ${category.displayName.toLowerCase()} in ${city.name}. Our range includes Dowsil GP silicone sealants, PU structural sealants, and MS polymer sealants for bus body panel bonding, weatherproofing, and structural joints.`,
    "bus-body-hardware": `Complete range of ${category.displayName.toLowerCase()} available in ${city.name} from A Karur Metal Co. Stainless steel and zinc-plated hinges, locks, fasteners, brackets, and accessories meeting AIS-052 standards for bus body construction.`,
  };
  return descriptions[category.slug] || `${category.displayName} supplier in ${city.name}, ${city.state}. Wholesale pricing available at A Karur Metal Co.`;
}
