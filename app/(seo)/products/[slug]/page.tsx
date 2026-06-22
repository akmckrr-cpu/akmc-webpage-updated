import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug, getAllProductSlugs } from "@/lib/data/products";
import { categories, getCategoryBySlug } from "@/lib/data/categories";
import { generateProductSchema, generateFAQSchema, generateBreadcrumbSchema, generateWhatsAppLink } from "@/lib/seo-utils";
import Script from "next/script";
import { ShoppingCart, MessageCircle, Phone, ChevronRight } from "lucide-react";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Script id="product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />

      <nav className="flex items-center gap-2 text-sm text-metal-500 mb-6">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.url} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="w-4 h-4" />}
            <Link href={crumb.url} className="hover:text-primary-700 transition-colors">{crumb.name}</Link>
          </span>
        ))}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square bg-metal-100 rounded-2xl flex items-center justify-center mb-4">
            <ShoppingCart className="w-24 h-24 text-metal-300" />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm px-2 py-1 bg-primary-50 text-primary-700 rounded-md font-medium">{product.brand}</span>
            <span className="text-sm px-2 py-1 bg-metal-100 text-metal-600 rounded-md">{category?.displayName}</span>
          </div>
          <h1 className="text-3xl font-bold text-metal-900 mb-4">{product.name}</h1>
          <p className="text-metal-600 mb-6 leading-relaxed">{product.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold text-metal-900 mb-3">Available Options</h3>
            <div className="space-y-2">
              {product.variants.map((variant) => (
                <div key={variant.id} className="flex items-center justify-between p-3 bg-metal-50 rounded-lg border border-metal-200">
                  <div>
                    <p className="font-medium text-metal-900">{variant.name}</p>
                    <p className="text-sm text-metal-500">SKU: {variant.sku}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-primary-700">₹{variant.price?.toLocaleString()}</p>
                    <p className="text-xs text-metal-400">per {product.unit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-metal-900 mb-3">Specifications</h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(product.specs).map(([key, value]) => (
                <div key={key} className="p-3 bg-metal-50 rounded-lg">
                  <p className="text-xs text-metal-500 uppercase">{key}</p>
                  <p className="text-sm font-medium text-metal-900">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={generateWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[200px] flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Enquire on WhatsApp
            </a>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-700 text-white rounded-xl font-semibold hover:bg-primary-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call
            </a>
          </div>

          <p className="text-sm text-metal-500 mt-3">
            Minimum Order: {product.minOrderQty} {product.unit}s
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-metal-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {product.faqs.map((faq, i) => (
            <div key={i} className="p-5 bg-white rounded-xl border border-metal-200">
              <h3 className="font-semibold text-metal-900 mb-2">{faq.question}</h3>
              <p className="text-metal-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
