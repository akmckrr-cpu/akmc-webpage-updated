export const cities = [
  // Tamil Nadu
  { name: "Karur", slug: "karur", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "major" as const, population: "2.5L+", industries: ["Bus Body", "Textiles", "Banking"] },
  { name: "Namakkal", slug: "namakkal", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "major" as const, population: "2L+", industries: ["Poultry", "Transport", "Bus Body"] },
  { name: "Salem", slug: "salem", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "major" as const, population: "8L+", industries: ["Steel", "Textiles", "Bus Body"] },
  { name: "Erode", slug: "erode", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "major" as const, population: "5L+", industries: ["Textiles", "Turmeric", "Bus Body"] },
  { name: "Tirupur", slug: "tirupur", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "major" as const, population: "8L+", industries: ["Knitwear", "Textiles", "Bus Body"] },
  { name: "Coimbatore", slug: "coimbatore", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "major" as const, population: "16L+", industries: ["Manufacturing", "Textiles", "IT", "Bus Body"] },
  { name: "Madurai", slug: "madurai", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "major" as const, population: "15L+", industries: ["Jasmine", "IT", "Bus Body", "Tourism"] },
  { name: "Trichy", slug: "trichy", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "major" as const, population: "10L+", industries: ["Manufacturing", "Education", "Bus Body"] },
  { name: "Chennai", slug: "chennai", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "major" as const, population: "70L+", industries: ["Auto", "IT", "Manufacturing", "Bus Body"] },
  { name: "Hosur", slug: "hosur", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "major" as const, population: "3L+", industries: ["Auto", "Manufacturing", "Bus Body"] },
  { name: "Dindigul", slug: "dindigul", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "secondary" as const, population: "2L+", industries: ["Lock", "Textiles", "Bus Body"] },
  { name: "Theni", slug: "theni", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "secondary" as const, population: "1.5L+", industries: ["Agriculture", "Textiles"] },
  { name: "Virudhunagar", slug: "virudhunagar", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "secondary" as const, population: "2L+", industries: ["Fireworks", "Match", "Bus Body"] },
  { name: "Tirunelveli", slug: "tirunelveli", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "secondary" as const, population: "5L+", industries: ["Agriculture", "Education"] },
  { name: "Nagercoil", slug: "nagercoil", state: "Tamil Nadu", stateSlug: "tamil-nadu", type: "secondary" as const, population: "2.5L+", industries: ["Tourism", "Agriculture"] },
  // Kerala
  { name: "Palakkad", slug: "palakkad", state: "Kerala", stateSlug: "kerala", type: "major" as const, population: "3L+", industries: ["Agriculture", "Manufacturing", "Bus Body"] },
  { name: "Thrissur", slug: "thrissur", state: "Kerala", stateSlug: "kerala", type: "major" as const, population: "3L+", industries: ["Gold", "Textiles", "Bus Body"] },
  { name: "Kochi", slug: "kochi", state: "Kerala", stateSlug: "kerala", type: "major" as const, population: "21L+", industries: ["IT", "Shipping", "Tourism", "Bus Body"] },
  { name: "Kozhikode", slug: "kozhikode", state: "Kerala", stateSlug: "kerala", type: "secondary" as const, population: "6L+", industries: ["Trade", "IT", "Bus Body"] },
  { name: "Kottayam", slug: "kottayam", state: "Kerala", stateSlug: "kerala", type: "secondary" as const, population: "1.5L+", industries: ["Rubber", "Education", "Bus Body"] },
  // Karnataka
  { name: "Bangalore", slug: "bangalore", state: "Karnataka", stateSlug: "karnataka", type: "major" as const, population: "85L+", industries: ["IT", "Manufacturing", "Auto", "Bus Body"] },
  { name: "Mysore", slug: "mysore", state: "Karnataka", stateSlug: "karnataka", type: "major" as const, population: "12L+", industries: ["Tourism", "Manufacturing", "Bus Body"] },
  { name: "Mangalore", slug: "mangalore", state: "Karnataka", stateSlug: "karnataka", type: "secondary" as const, population: "5L+", industries: ["Port", "IT", "Bus Body"] },
  { name: "Hubli", slug: "hubli", state: "Karnataka", stateSlug: "karnataka", type: "secondary" as const, population: "9L+", industries: ["Trade", "Manufacturing", "Bus Body"] },
];

export const nearbyAreas: Record<string, string[]> = {
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

export function getCityBySlug(slug: string) {
  return cities.find((c) => c.slug === slug);
}

export function getCitiesByState(stateSlug: string) {
  return cities.filter((c) => c.stateSlug === stateSlug);
}

export function getAllCitySlugs() {
  return cities.map((c) => c.slug);
}
