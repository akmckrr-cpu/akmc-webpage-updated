"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          AKMC
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/products" className="hover:opacity-80 transition-opacity">Products</Link>
          <Link href="/acp-designs" className="hover:opacity-80 transition-opacity">Designs</Link>
          <Link href="/quote" className="hover:opacity-80 transition-opacity">Quote</Link>
          <Link href="/about" className="hover:opacity-80 transition-opacity">About</Link>
        </div>

        {/* CTA */}
        <Link href="/quote" className="btn-primary text-sm px-5 py-2">
          Get Quote
        </Link>
      </div>
    </nav>
  );
}
