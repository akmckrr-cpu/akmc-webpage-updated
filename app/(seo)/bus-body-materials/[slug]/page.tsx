import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { busBodyMaterials, getBusBodyMaterialBySlug, getAllBusBodyMaterialSlugs } from "@/lib/data/busBodyMaterials";
import { generateWhatsAppLink, generateBreadcrumbSchema } from "@/lib/seo-utils";
import Script from "next/script";
import { Bus, ArrowLeft, MessageCircle, Check, Box } from "lucide-react";

export async function generateStaticParams() {
  return getAllBusBodyMaterialSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const material = getBusBodyMaterialBySlug(slug);
  if (!material) return { title: "Not Found" };
  return { title: material.seoTitle, description: material.seoDescription };
}

export default async function BusBodyMaterialDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const material = getBusBodyMaterialBySlug(slug);
  if (!material) notFound();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Bus Body Materials", url: "/bus-body-materials" },
    { name: material.title, url: `/bus-body-materials/${material.slug}` },
  ];

  const whatsappMessage = `Hi AKMC, I need ${material.title}. Can you share pricing and availability?`;

  return (
    <div>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />

      <section className="akmc-hero hero-section">
        <div className="max-w-7xl mx-auto">
          <Link href="/bus-body-materials" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider mb-8 hover:opacity-80 transition-opacity" style={{ color: "var(--text-muted)" }}>
            <ArrowLeft className="w-3 h-3" />
            Back to Bus Body Materials
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="aspect-square flex items-center justify-center"
              style={{ border: "1px solid var(--border)", background: "var(--bg-alt)" }}
            >
              <Bus className="w-16 h-16" style={{ color: "var(--text-muted)" }} />
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                Bus Body Material
              </div>
              <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                {material.title}
              </h1>
              <p className="text-base font-light leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                {material.description}
              </p>

              {material.specifications && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text)" }}>
                    Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(material.specifications).map(([key, value]) => (
                      <div key={key} className="card p-4">
                        <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
                          {key}
                        </div>
                        <div className="text-sm font-medium" style={{ color: "var(--text)" }}>
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                <Link href={`/quote?product=${encodeURIComponent(material.title)}`} className="btn-primary">
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

      {/* Applications */}
      {material.applications && material.applications.length > 0 && (
        <section className="akmc-section" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-light tracking-tight mb-12" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
              Key <strong className="font-semibold">Applications</strong>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {material.applications.map((app, idx) => (
                <div key={idx} className="card p-8 flex items-start gap-4">
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                  <span className="text-sm font-light" style={{ color: "var(--text-muted)" }}>{app}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
