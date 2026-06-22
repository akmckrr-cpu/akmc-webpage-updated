import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getLocationPage, getAllLocationPagePaths } from "@/lib/data/seoPages";
import { getCityBySlug } from "@/lib/data/cities";
import { getCategoryBySlug } from "@/lib/data/categories";
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Script id="location-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />

      <nav className="flex items-center gap-2 text-sm text-metal-500 mb-6">
        {breadcrumbs.map((crumb, i) => (
          <span key={crumb.url} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="w-4 h-4" />}
            <Link href={crumb.url} className="hover:text-primary-700">{crumb.name}</Link>
          </span>
        ))}
      </nav>

      <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl p-8 lg:p-12 text-white mb-8">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="w-5 h-5 text-accent-500" />
          <span className="text-primary-200">{page.city}, {page.state}</span>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">
          {page.categoryDisplay} Supplier in {page.city}
        </h1>
        <p className="text-primary-100 text-lg max-w-2xl mb-6">{page.description}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href={generateWhatsAppLink(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Enquiry
          </a>
          <a href="tel:+919876543210" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-xl font-semibold hover:bg-white/20 transition-colors">
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl border border-metal-200 p-6">
            <h2 className="text-xl font-bold text-metal-900 mb-4 flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary-600" />
              Products Available in {page.city}
            </h2>
            <ul className="space-y-3">
              {page.products.map((product) => (
                <li key={product} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="text-metal-700">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-metal-200 p-6">
            <h2 className="text-xl font-bold text-metal-900 mb-4">Why Choose A Karur Metal Co.?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Wholesale pricing direct from stock",
                "Fast delivery to " + page.city,
                "AIS-052 compliant materials",
                "Technical consultation available",
                "Custom cutting and fabrication",
                "Credit facilities for regular buyers",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                  <span className="text-sm text-metal-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-2xl border border-metal-200 p-6">
            <h3 className="font-semibold text-metal-900 mb-3">We Also Serve</h3>
            <div className="flex flex-wrap gap-2">
              {page.nearbyAreas.map((area) => (
                <span key={area} className="text-xs px-2 py-1 bg-metal-50 text-metal-600 rounded border border-metal-200">
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-primary-50 rounded-2xl border border-primary-200 p-6">
            <h3 className="font-semibold text-primary-900 mb-3">Get a Quote</h3>
            <p className="text-sm text-primary-700 mb-4">Best pricing for {page.categoryDisplay.toLowerCase()} in {page.city}</p>
            <a
              href={generateWhatsAppLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
