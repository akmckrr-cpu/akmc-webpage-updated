import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { acpDesigns, getACPDesignBySlug, getAllACPSlugs } from "@/lib/data/acpDesigns";
import { generateWhatsAppLink, generateBreadcrumbSchema } from "@/lib/seo-utils";
import Script from "next/script";
import { Layers, ArrowLeft, MessageCircle, Ruler, Palette, Check } from "lucide-react";

export async function generateStaticParams() {
  return getAllACPSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const design = getACPDesignBySlug(slug);
  if (!design) return { title: "Design Not Found" };
  return { title: design.seoTitle, description: design.seoDescription };
}

export default async function ACPDesignDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const design = getACPDesignBySlug(slug);
  if (!design) notFound();

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "ACP Designs", url: "/acp-designs" },
    { name: design.designName, url: `/acp-designs/${design.slug}` },
  ];

  const whatsappMessage = `Hi AKMC, I am interested in the ${design.designName} ACP design. Can you share pricing and availability?`;

  return (
    <div>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />

      <section className="akmc-hero hero-section">
        <div className="max-w-7xl mx-auto">
          <Link href="/acp-designs" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider mb-8 hover:opacity-80 transition-opacity" style={{ color: "var(--text-muted)" }}>
            <ArrowLeft className="w-3 h-3" />
            Back to Designs
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              className="aspect-square flex items-center justify-center"
              style={{ border: "1px solid var(--border)", background: "var(--bg-alt)" }}
            >
              <Palette className="w-16 h-16" style={{ color: "var(--text-muted)" }} />
            </div>

            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                {design.series} Series
              </div>
              <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                {design.designName}
              </h1>
              <p className="text-base font-light leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                {design.description}
              </p>

              {design.specifications && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text)" }}>
                    Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(design.specifications).map(([key, value]) => (
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
                <Link href={`/quote?product=${encodeURIComponent(design.designName)}`} className="btn-primary">
                  <Layers className="w-4 h-4 inline mr-2" />
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

      {/* Related Designs */}
      <section className="akmc-section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light tracking-tight mb-12" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
            More from <strong className="font-semibold">{design.series}</strong> Series
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {acpDesigns
              .filter((d) => d.series === design.series && d.slug !== design.slug)
              .slice(0, 4)
              .map((related) => (
                <Link key={related.slug} href={`/acp-designs/${related.slug}`} className="card group overflow-hidden">
                  <div className="aspect-square flex items-center justify-center" style={{ background: "var(--bg-alt)" }}>
                    <Palette className="w-10 h-10" style={{ color: "var(--text-muted)" }} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-medium tracking-tight mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                      {related.designName}
                    </h3>
                    <p className="text-xs uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                      {related.series}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
