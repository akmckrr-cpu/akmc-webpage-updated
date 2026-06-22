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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />

      <Link href="/acp-designs" className="inline-flex items-center gap-1 text-sm text-metal-500 hover:text-primary-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Designs
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="aspect-square bg-metal-100 rounded-2xl flex items-center justify-center">
            <Layers className="w-32 h-32 text-metal-300" />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm px-2 py-1 bg-primary-50 text-primary-700 rounded-md">{design.series}</span>
          </div>
          <h1 className="text-3xl font-bold text-metal-900 mb-4">{design.name}</h1>
          <p className="text-metal-600 mb-6 leading-relaxed">{design.description}</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <Ruler className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-metal-900">Dimensions</p>
                <p className="text-sm text-metal-500">{design.dimensions}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Palette className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-metal-900">Available Colors</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {design.colors.map((color) => (
                    <span key={color} className="text-xs px-2 py-1 bg-metal-100 text-metal-600 rounded">{color}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-metal-900">Recommended Usage</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {design.usage.map((u) => (
                    <span key={u} className="text-xs px-2 py-1 bg-green-50 text-green-700 rounded">{u}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <a
            href={generateWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Enquire on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
