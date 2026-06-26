import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLocationPage, getAllLocationPagePaths } from "@/lib/data/seoPages";
import { generateLocationPageSchema, generateBreadcrumbSchema, generateWhatsAppLink } from "@/lib/seo-utils";
import Script from "next/script";
import { MapPin, Phone, MessageCircle, ChevronRight, Truck, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return getAllLocationPagePaths().map(({ city, category }) => ({
    city,
    category,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string; category: string }> }): Promise<Metadata> {
  const { city, category } = await params;
  const page = getLocationPage(city, category);
  if (!page) return { title: "Not Found" };
  return {
    title: page.seoTitle,
    description: page.seoDescription,
  };
}

export default async function LocationCategoryPage({ params }: { params: Promise<{ city: string; category: string }> }) {
  const { city: citySlug, category: categorySlug } = await params;
  const page = getLocationPage(citySlug, categorySlug);
  if (!page) notFound();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: page.categoryDisplay, url: `/products?category=${categorySlug}` },
    { name: page.city, url: `/${citySlug}/${categorySlug}` },
  ];

  const schema = generateLocationPageSchema(page);
  const whatsappMessage = `Hi AKMC, I need ${page.categoryDisplay.toLowerCase()} in ${page.city}. Please share your catalog and pricing.`;

  return (
    <div>
      <Script
        id="location-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero */}
      <section className="akmc-hero hero-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider mb-6" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/products?category=${categorySlug}`} className="hover:opacity-80 transition-opacity">{page.categoryDisplay}</Link>
            <ChevronRight className="w-3 h-3" />
            <span style={{ color: "var(--text)" }}>{page.city}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                Location Page
              </div>
              <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                {page.categoryDisplay} in <strong className="font-semibold">{page.city}</strong>
              </h1>
              <p className="text-base font-light leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                {page.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quote" className="btn-primary">
                  Request Quote
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

            <div className="card p-10">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>Serving {page.city}</div>
                  <div className="text-sm font-light" style={{ color: "var(--text-muted)" }}>
                    Fast delivery to {page.city} and surrounding areas
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <Truck className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>Pan India Delivery</div>
                  <div className="text-sm font-light" style={{ color: "var(--text-muted)" }}>
                    Delivery across Tamil Nadu, Kerala & Karnataka
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                <div>
                  <div className="text-sm font-medium mb-1" style={{ color: "var(--text)" }}>AIS-052 Compliant</div>
                  <div className="text-sm font-light" style={{ color: "var(--text-muted)" }}>
                    All materials meet automotive industry standards
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products for this location */}
      <section className="akmc-section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-light tracking-tight mb-8" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                Available <strong className="font-semibold">{page.categoryDisplay}</strong> in {page.city}
              </h2>
              <div className="space-y-4">
                {page.products.map((product, idx) => (
                  <div key={idx} className="card p-6 flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                    <span className="text-sm font-light" style={{ color: "var(--text-muted)" }}>{product}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="card p-8 sticky top-24">
                <h3 className="text-lg font-medium tracking-tight mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                  Quick Enquiry
                </h3>
                <div className="space-y-4">
                  <Link href="/quote" className="btn-primary w-full text-center block text-xs">
                    Get Quote
                  </Link>
                  <Link
                    href={generateWhatsAppLink(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary w-full text-center block text-xs"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    Call / WhatsApp
                  </Link>
                </div>

                {page.nearbyAreas.length > 0 && (
                  <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
                    <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text)" }}>
                      Nearby Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {page.nearbyAreas.map((area) => (
                        <span key={area} className="tag">{area}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
