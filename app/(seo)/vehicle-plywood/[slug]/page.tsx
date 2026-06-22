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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)) }} />

      <Link href="/vehicle-plywood" className="inline-flex items-center gap-1 text-sm text-metal-500 hover:text-primary-700 mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Vehicles
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="aspect-square bg-metal-100 rounded-2xl flex items-center justify-center">
          <Truck className="w-32 h-32 text-metal-300" />
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm px-2 py-1 bg-primary-50 text-primary-700 rounded-md">{vehicle.vehicleBrand}</span>
          </div>
          <h1 className="text-3xl font-bold text-metal-900 mb-4">{vehicle.vehicleName} Chequered Plywood</h1>
          <p className="text-metal-600 mb-6 leading-relaxed">{vehicle.description}</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-metal-50 rounded-xl">
              <Ruler className="w-5 h-5 text-primary-600 mb-2" />
              <p className="text-sm text-metal-500">Thickness</p>
              <p className="font-semibold text-metal-900">{vehicle.thickness}</p>
            </div>
            <div className="p-4 bg-metal-50 rounded-xl">
              <Box className="w-5 h-5 text-primary-600 mb-2" />
              <p className="text-sm text-metal-500">Size</p>
              <p className="font-semibold text-metal-900">{vehicle.size}</p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-metal-900 mb-3">Key Features</h3>
            <ul className="space-y-2">
              {vehicle.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-metal-600">
                  <Check className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
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
    </div>
  );
}
