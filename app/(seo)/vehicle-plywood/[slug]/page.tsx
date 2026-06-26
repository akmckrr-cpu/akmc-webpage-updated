import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { vehiclePlywoodItems, getVehiclePlywoodBySlug, getAllVehiclePlywoodSlugs } from "@/lib/data/vehiclePlywood";
import { generateWhatsAppLink, generateBreadcrumbSchema } from "@/lib/seo-utils";
import Script from "next/script";
import { Truck, ArrowLeft, MessageCircle, Check, Ruler, Box } from "lucide-react";

export async function generateStaticParams() {
  return getAllVehiclePlywoodSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehiclePlywoodBySlug(slug);
  if (!vehicle) return { title: "Not Found" };
  return { title: vehicle.seoTitle, description: vehicle.seoDescription };
}

export default async function VehiclePlywoodDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vehicle = getVehiclePlywoodBySlug(slug);
  if (!vehicle) notFound();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Vehicle Plywood", url: "/vehicle-plywood" },
    { name: vehicle.vehicleName, url: `/vehicle-plywood/${vehicle.slug}` },
  ];

  const whatsappMessage = `Hi AKMC, I need chequered plywood for ${vehicle.vehicleName}. Please share pricing.`;

  return (
    <div>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />

      <section className="akmc-hero hero-section">
        <div className="max-w-7xl mx-auto">
          <Link href="/vehicle-plywood" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider mb-8 hover:opacity-80 transition-opacity" style={{ color: "var(--text-muted)" }}>
            <ArrowLeft className="w-3 h-3" />
            Back to Vehicle Plywood
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="aspect-square flex items-center justify-center"
              style={{ border: "1px solid var(--border)", background: "var(--bg-alt)" }}
            >
              <Truck className="w-16 h-16" style={{ color: "var(--text-muted)" }} />
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                {vehicle.vehicleBrand}
              </div>
              <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                {vehicle.vehicleName}
              </h1>
              <p className="text-base font-light leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                {vehicle.description}
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text)" }}>
                  Specifications
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="card p-4">
                    <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>Thickness</div>
                    <div className="text-sm font-medium" style={{ color: "var(--text)" }}>{vehicle.thickness}</div>
                  </div>
                  <div className="card p-4">
                    <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>Size</div>
                    <div className="text-sm font-medium" style={{ color: "var(--text)" }}>{vehicle.size}</div>
                  </div>
                  <div className="card p-4">
                    <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>Material</div>
                    <div className="text-sm font-medium" style={{ color: "var(--text)" }}>{vehicle.material}</div>
                  </div>
                  <div className="card p-4">
                    <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>Finish</div>
                    <div className="text-sm font-medium" style={{ color: "var(--text)" }}>{vehicle.finish}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href={`/quote?product=${encodeURIComponent(vehicle.vehicleName)}`} className="btn-primary">
                  <Box className="w-4 h-4 inline mr-2" />
                  Get Quote
                </Link>
                <Link
                  href={generateWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  WhatsApp Enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="akmc-section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light tracking-tight mb-12" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
            Product <strong className="font-semibold">Features</strong>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicle.features?.map((feature, idx) => (
              <div key={idx} className="card p-8 flex items-start gap-4">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                <span className="text-sm font-light" style={{ color: "var(--text-muted)" }}>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
