"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  ShoppingCart,
  ChevronDown,
  Ruler,
  Sheet,
  Layers,
  Grid3X3,
  Paintbrush,
  Droplets,
  Wrench,
  Home,
  Package,
  Image,
  Truck,
  Bus,
} from "lucide-react";
import { categories } from "@/lib/data/categories";

const iconMap: Record<string, React.ReactNode> = {
  Ruler: <Ruler className="w-4 h-4" />,
  Sheet: <Sheet className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
  Grid3X3: <Grid3X3 className="w-4 h-4" />,
  Paintbrush: <Paintbrush className="w-4 h-4" />,
  Droplets: <Droplets className="w-4 h-4" />,
  Wrench: <Wrench className="w-4 h-4" />,
};

const navLinks = [
  { href: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
  { href: "/products", label: "Products", icon: <Package className="w-4 h-4" /> },
  { href: "/acp-designs", label: "ACP Designs", icon: <Image className="w-4 h-4" /> },
  { href: "/vehicle-plywood", label: "Vehicle Plywood", icon: <Truck className="w-4 h-4" /> },
  { href: "/bus-body-materials", label: "Bus Body Materials", icon: <Bus className="w-4 h-4" /> },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-metal-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 bg-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AK</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-metal-900 text-lg leading-tight">A Karur Metal Co.</span>
              <p className="text-xs text-metal-500 -mt-0.5">Bus Body Materials</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-primary-50 text-primary-700"
                    : "text-metal-600 hover:bg-metal-100 hover:text-metal-900"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-metal-600 hover:bg-metal-100 hover:text-metal-900 transition-colors"
              >
                Categories
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-metal-200 py-2 z-50">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products?category=${cat.slug}`}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-metal-50 transition-colors"
                      onClick={() => setProductsOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
                        {iconMap[cat.icon]}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-metal-900">{cat.displayName}</p>
                        <p className="text-xs text-metal-500 line-clamp-1">{cat.subcategories?.slice(0, 3).join(", ")}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+919876543210"
              className="hidden sm:flex items-center gap-2 px-4 py-2 bg-primary-700 text-white rounded-lg text-sm font-medium hover:bg-primary-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link
              href="/quote"
              className="flex items-center gap-2 px-3 py-2 bg-accent-500 text-white rounded-lg text-sm font-medium hover:bg-accent-600 transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Get Quote</span>
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-metal-100"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-metal-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  pathname === link.href
                    ? "bg-primary-50 text-primary-700"
                    : "text-metal-700 hover:bg-metal-50"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
            <div className="pt-2 border-t border-metal-100">
              <p className="px-3 py-1 text-xs font-semibold text-metal-400 uppercase tracking-wider">Categories</p>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products?category=${cat.slug}`}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-metal-700 hover:bg-metal-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {iconMap[cat.icon]}
                  {cat.displayName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
