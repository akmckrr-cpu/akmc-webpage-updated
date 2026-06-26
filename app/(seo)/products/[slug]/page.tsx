import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug, getAllProductSlugs } from "@/lib/data/products";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateWhatsAppLink } from "@/lib/seo-utils";
import Script from "next/script";
import { ShoppingCart, MessageCircle, Phone, ChevronRight, CheckCircle2, Ruler } from "lucide-react";

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.seoTitle,
    description: product.seoDescription,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);
  const productSchema = generateProductSchema(product);
  const faqSchema = generateFAQSchema(product.faqs);
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: category?.displayName || "Category", url: `/products?category=${product.category}` },
    { name: product.name, url: `/products/${product.slug}` },
  ];

  const whatsappMessage = `Hi AKMC, I am interested in ${product.name}. Can you share pricing and availability?`;

  return (
    <div>
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }}
      />

      {/* Hero / Product Header */}
      <section className="akmc-hero hero-section">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider mb-6" style={{ color: "var(--text-muted)" }}>
            <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/products" className="hover:opacity-80 transition-opacity">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href={`/products?category=${product.category}`} className="hover:opacity-80 transition-opacity">{category?.displayName}</Link>
            <ChevronRight className="w-3 h-3" />
            <span style={{ color: "var(--text)" }}>{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Product Image Placeholder */}
            <div
              className="aspect-square flex items-center justify-center"
              style={{ border: "1px solid var(--border)", background: "var(--bg-alt)" }}
            >
              <Ruler className="w-16 h-16" style={{ color: "var(--text-muted)" }} />
            </div>

            {/* Product Details */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>
                {category?.displayName}
              </div>
              <h1 className="text-4xl lg:text-5xl font-light tracking-tight mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                {product.name}
              </h1>
              <p className="text-base font-light leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
                {product.description}
              </p>

              {/* Specifications */}
              {product.specifications && product.specifications.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text)" }}>
                    Specifications
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.specifications.map((spec) => (
                      <div key={spec.label} className="card p-4">
                        <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-muted)" }}>
                          {spec.label}
                        </div>
                        <div className="text-sm font-medium" style={{ color: "var(--text)" }}>
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href={`/quote?product=${encodeURIComponent(product.name)}`}
                  className="btn-primary flex items-center gap-2"
                >
                  <ShoppingCart className="w-4 h-4" />
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

      {/* Features & Applications */}
      <section className="akmc-section" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {product.features && product.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-light tracking-tight mb-8" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                  Key <strong className="font-semibold">Features</strong>
                </h2>
                <div className="space-y-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                      <span className="text-sm font-light" style={{ color: "var(--text-muted)" }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.applications && product.applications.length > 0 && (
              <div>
                <h2 className="text-2xl font-light tracking-tight mb-8" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                  <strong className="font-semibold">Applications</strong>
                </h2>
                <div className="space-y-4">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} />
                      <span className="text-sm font-light" style={{ color: "var(--text-muted)" }}>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="akmc-section" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-alt)" }}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-light tracking-tight mb-12 text-center" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
              Frequently Asked <strong className="font-semibold">Questions</strong>
            </h2>
            <div className="space-y-6">
              {product.faqs.map((faq, idx) => (
                <div key={idx} className="card p-8">
                  <h3 className="text-lg font-medium tracking-tight mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}>
                    {faq.question}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: "var(--text-muted)" }}>
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
