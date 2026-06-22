import { MetadataRoute } from "next";
import { products, getAllProductSlugs } from "@/lib/data/products";
import { acpDesigns, getAllACPSlugs } from "@/lib/data/acpDesigns";
import { vehiclePlywoodItems, getAllVehiclePlywoodSlugs } from "@/lib/data/vehiclePlywood";
import { busBodyMaterials, getAllBusBodyMaterialSlugs } from "@/lib/data/busBodyMaterials";
import { getAllLocationPagePaths } from "@/lib/data/seoPages";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://akmc.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
    { url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1.0 },
    { url: `${SITE_URL}/products`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/acp-designs`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/vehicle-plywood`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/bus-body-materials`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${SITE_URL}/quote`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const productRoutes = getAllProductSlugs().map((slug) => ({
    url: `${SITE_URL}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const acpRoutes = getAllACPSlugs().map((slug) => ({
    url: `${SITE_URL}/acp-designs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const vehicleRoutes = getAllVehiclePlywoodSlugs().map((slug) => ({
    url: `${SITE_URL}/vehicle-plywood/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const bbmRoutes = getAllBusBodyMaterialSlugs().map((slug) => ({
    url: `${SITE_URL}/bus-body-materials/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const locationRoutes = getAllLocationPagePaths().map(({ city, category }) => ({
    url: `${SITE_URL}/${city}/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...productRoutes,
    ...acpRoutes,
    ...vehicleRoutes,
    ...bbmRoutes,
    ...locationRoutes,
  ];
}
