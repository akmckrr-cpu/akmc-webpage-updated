import { Metadata } from "next";
import Link from "next/link";
import { 
  Phone, MessageCircle, ArrowRight, Ruler, Sheet, Layers, 
  Grid3X3, Paintbrush, Droplets, Wrench, Truck, Bus, Star,
  MapPin, CheckCircle2
} from "lucide-react";
import { categories } from "@/lib/data/categories";
import { cities } from "@/lib/data/cities";
import { acpDesigns } from "@/lib/data/acpDesigns";
import { vehiclePlywoodItems } from "@/lib/data/vehiclePlywood";
import { generateWhatsAppLink } from "@/lib/seo-utils";

export const metadata: Metadata = {
  title: "Bus Body Building Materials Supplier | Karur, Tamil Nadu",
  description: "A Karur Metal Co. - Leading supplier of aluminium extrusions, ACP sheets, chequered plywood, paints, sealants & hardware for bus body construction. Supply across Tamil Nadu, Kerala & Karnataka.",
};

const iconMap: Record<string, React.ReactNode> = {
  Ruler: <Ruler className="w-6 h-6" />,
  Sheet: <Sheet className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  Grid3X3: <Grid3X3 className="w-6 h-6" />,
  Paintbrush: <Paintbrush className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
};

export default function HomePage() {
  const majorCities = cities.filter(c => c.type === "major").slice(0, 6);
  const featuredACP = acpDesigns.slice(0, 4);
  const featuredVehicles = vehiclePlywoodItems.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-sm mb-6">
              <Star className="w-4 h-4 text-accent-500" />
              <span>Trusted by 500+ Bus Body Builders Across South India</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Bus Body Building<br />
              <span className="text-accent-500">Materials Supplier</span>
            </h1>
            <p className="text-xl text-primary-100 mb-4 leading-relaxed">
              Aluminium Extrusions • ACP Sheets • Aluminium Sheets • Chequered Plywood • Paints • Hardware
            </p>
            <p className="text-lg text-primary-200 mb-8">
              Supply Across Tamil Nadu, Kerala & Karnataka
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href={generateWhatsAppLink("Hi AKMC, I need a quote for bus body building materials.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 text-white rounded-xl font-semibold hover:bg-accent-600 transition-colors"
              >
                Browse Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-metal-900 mb-3">Product Categories</h2>
            <p className="text-metal-500 max-w-2xl mx-auto">Complete range of materials for bus body construction, from structural aluminium to interior finishes</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/products?category=${cat.slug}`}
                className="group p-6 bg-metal-50 rounded-2xl border border-metal-200 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  {iconMap[cat.icon]}
                </div>
                <h3 className="font-semibold text-metal-900 mb-2">{cat.displayName}</h3>
                <p className="text-sm text-metal-500 mb-3 line-clamp-2">{cat.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {cat.subcategories?.slice(0, 3).map((sub) => (
                    <span key={sub} className="text-xs px-2 py-1 bg-white rounded-md text-metal-600 border border-metal-200">
                      {sub}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ACP Designs Preview */}
      <section className="py-16 bg-metal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-metal-900 mb-2">ACP Design Catalog</h2>
              <p className="text-metal-500">20+ designs for bus interior and ceiling applications</p>
            </div>
            <Link href="/acp-designs" className="hidden sm:flex items-center gap-1 text-primary-600 font-medium hover:text-primary-700">
              View All Designs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredACP.map((design) => (
              <Link key={design.id} href={`/acp-designs/${design.slug}`} className="group">
                <div className="aspect-square bg-metal-200 rounded-xl mb-3 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-metal-400">
                    <Layers className="w-12 h-12" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-medium text-metal-900 group-hover:text-primary-700 transition-colors">{design.designName}</h3>
                <p className="text-sm text-metal-500">{design.series}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Plywood */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-metal-900 mb-2">Vehicle-Specific Plywood</h2>
              <p className="text-metal-500">Chequered plywood pre-cut for popular commercial vehicles</p>
            </div>
            <Link href="/vehicle-plywood" className="hidden sm:flex items-center gap-1 text-primary-600 font-medium hover:text-primary-700">
              View All Vehicles <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredVehicles.map((vehicle) => (
              <Link key={vehicle.id} href={`/vehicle-plywood/${vehicle.slug}`} className="group p-4 bg-metal-50 rounded-xl border border-metal-200 hover:border-primary-300 hover:shadow-md transition-all">
                <div className="w-10 h-10 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-3">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-metal-900 mb-1">{vehicle.vehicleName}</h3>
                <p className="text-sm text-metal-500 mb-2">{vehicle.vehicleBrand}</p>
                <div className="flex items-center gap-2 text-xs text-metal-400">
                  <span className="px-2 py-0.5 bg-white rounded border border-metal-200">{vehicle.thickness}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Supply Across South India</h2>
            <p className="text-primary-200">Fast delivery to major bus body building hubs</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {majorCities.map((city) => (
              <Link
                key={city.slug}
                href={`/karur/aluminium-extrusion`}
                className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-center"
              >
                <MapPin className="w-5 h-5 mx-auto mb-2 text-accent-500" />
                <p className="font-medium">{city.name}</p>
                <p className="text-xs text-primary-200">{city.state}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-metal-900 mb-3">Why Choose A Karur Metal Co.?</h2>
            <p className="text-metal-500">Your trusted partner for bus body building materials since 2005</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Wholesale Pricing", desc: "Direct from manufacturer pricing with volume discounts for bulk orders" },
              { title: "Pan India Delivery", desc: "Fast delivery across Tamil Nadu, Kerala, Karnataka, and all major states" },
              { title: "AIS-052 Compliant", desc: "All materials meet Automotive Industry Standard 052 for bus body construction" },
              { title: "Technical Support", desc: "Expert guidance on material selection, specifications, and application" },
              { title: "Custom Cutting", desc: "Precision CNC cutting and fabrication services for custom requirements" },
              { title: "Credit Facilities", desc: "Flexible payment terms and credit facilities for established customers" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-metal-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-metal-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Quote for Your Bus Body Project?</h2>
          <p className="text-accent-100 mb-8 text-lg">Get wholesale pricing on aluminium extrusions, ACP sheets, plywood, paints, sealants, and hardware</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/quote"
              className="px-8 py-4 bg-white text-accent-600 rounded-xl font-bold hover:bg-accent-50 transition-colors"
            >
              Request Wholesale Quote
            </Link>
            <a
              href={generateWhatsAppLink("I need a wholesale quote for bus body materials. Please contact me.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors"
            >
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
