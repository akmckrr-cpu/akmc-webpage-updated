import { NextRequest, NextResponse } from "next/server";
import { products } from "@/lib/data/products";
import { acpDesigns } from "@/lib/data/acpDesigns";
import { vehiclePlywoodItems } from "@/lib/data/vehiclePlywood";
import { busBodyMaterials } from "@/lib/data/busBodyMaterials";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q")?.toLowerCase() || "";

  if (!q || q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results = [];

  // Search products
  const matchedProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q))
  );
  results.push(...matchedProducts.map((p) => ({
    type: "product",
    title: p.name,
    slug: `/products/${p.slug}`,
    description: p.shortDescription,
  })));

  // Search ACP designs
  const matchedACP = acpDesigns.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.designName.toLowerCase().includes(q) ||
      d.series.toLowerCase().includes(q)
  );
  results.push(...matchedACP.map((d) => ({
    type: "acp-design",
    title: d.name,
    slug: `/acp-designs/${d.slug}`,
    description: d.description.slice(0, 100) + "...",
  })));

  // Search vehicle plywood
  const matchedVehicles = vehiclePlywoodItems.filter(
    (v) =>
      v.vehicleName.toLowerCase().includes(q) ||
      v.vehicleBrand.toLowerCase().includes(q)
  );
  results.push(...matchedVehicles.map((v) => ({
    type: "vehicle-plywood",
    title: v.vehicleName,
    slug: `/vehicle-plywood/${v.slug}`,
    description: v.description.slice(0, 100) + "...",
  })));

  // Search bus body materials
  const matchedBBM = busBodyMaterials.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q)
  );
  results.push(...matchedBBM.map((b) => ({
    type: "bus-body-material",
    title: b.title,
    slug: `/bus-body-materials/${b.slug}`,
    description: b.description.slice(0, 100) + "...",
  })));

  return NextResponse.json({ results: results.slice(0, 10) });
}
