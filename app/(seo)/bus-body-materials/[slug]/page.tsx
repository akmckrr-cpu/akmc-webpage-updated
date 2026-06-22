import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { busBodyMaterials, getBusBodyMaterialBySlug, getAllBusBodyMaterialSlugs } from "@/lib/data/busBodyMaterials";
import { products, getProductsByCategory } from "@/lib/data/products";
import { generateWhatsAppLink, generateBreadcrumbSchema } from "@/lib/seo-utils";
import Script from "next/script";
import { Bus, ArrowLeft, MessageCircle, Check, Box, ArrowRight } from "lucide-react";

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />

      <Link href="/bus-body-materials" className="inline-flex items-center gap-1 text-sm text-metal-500 hover:text-primary-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Bus Body Materials
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-video bg-metal-100 rounded-2xl flex items-center justify-center">
          <Bus className="w-32 h-32 text-metal-300" />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm px-2 py-1 bg-primary-50 text-primary-700 rounded-md">{material.category}</span>
          </div>
          <h1 className="text-3xl font-bold text-metal-900 mb-4">{material.title}</h1>
          <p className="text-metal-600 mb-6 leading-relaxed">{material.description}</p>

          <div className="mb-6">
            <h3 className="font-semibold text-metal-900 mb-3">Applications</h3>
            <ul className="space-y-2">
              {material.applications.map((app, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-metal-600">
                  <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  {app}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-metal-900 mb-3">Specifications</h3>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(material.specifications).map(([key, value]) => (
                <div key={key} className="p-3 bg-metal-50 rounded-lg">
                  <p className="text-xs text-metal-500 uppercase">{key}</p>
                  <p className="text-sm font-medium text-metal-900">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <a
            href={generateWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Get Quote on WhatsApp
          </a>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-metal-900 mb-6">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {material.relatedProducts.slice(0, 3).map((relatedSlug) => {
            const related = products.find((p) => p.category === relatedSlug);
            if (!related) return null;
            return (
              <Link
                key={related.id}
                href={`/products/${related.slug}`}
                className="group p-5 bg-white rounded-xl border border-metal-200 hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-metal-900 group-hover:text-primary-700 transition-colors">{related.name}</h3>
                <p className="text-sm text-metal-500 mt-1 line-clamp-2">{related.shortDescription}</p>
                <div className="flex items-center gap-1 mt-3 text-sm text-primary-600">
                  View Product <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
