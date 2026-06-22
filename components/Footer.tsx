import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";
import { categories } from "@/lib/data/categories";
import { cities } from "@/lib/data/cities";

export function Footer() {
  const majorCities = cities.filter((c) => c.type === "major").slice(0, 10);

  return (
    <footer className="bg-metal-900 text-metal-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">AK</span>
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">A Karur Metal Co.</h3>
                <p className="text-xs text-metal-400">Bus Body Building Materials</p>
              </div>
            </div>
            <p className="text-sm text-metal-400 mb-4 leading-relaxed">
              Leading supplier of bus body building materials in Karur, Tamil Nadu. 
              Aluminium extrusions, ACP sheets, plywood, paints, sealants, and hardware.
            </p>
            <div className="space-y-2">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-primary-500" />
                +91 98765 43210
              </a>
              <a href="mailto:info@akmc.in" className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-primary-500" />
                info@akmc.in
              </a>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
                <span>123/45, Bus Body Materials Market, Karur, Tamil Nadu - 639001</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary-500" />
                Mon - Sat: 9:00 AM - 7:00 PM
              </div>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product Categories</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    className="flex items-center gap-1 text-sm hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {cat.displayName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              {majorCities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/aluminium-extrusion-supplier-${city.slug}`}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {city.name}, {city.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-sm hover:text-white transition-colors">All Products</Link></li>
              <li><Link href="/acp-designs" className="text-sm hover:text-white transition-colors">ACP Designs</Link></li>
              <li><Link href="/vehicle-plywood" className="text-sm hover:text-white transition-colors">Vehicle Plywood</Link></li>
              <li><Link href="/bus-body-materials" className="text-sm hover:text-white transition-colors">Bus Body Materials</Link></li>
              <li><Link href="/quote" className="text-sm hover:text-white transition-colors">Request Quote</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-metal-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-metal-500">
            © {new Date().getFullYear()} A Karur Metal Co. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-metal-500">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
