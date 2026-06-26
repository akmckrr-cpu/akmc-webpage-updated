"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-sm font-semibold mb-4">Products</div>
            <div className="space-y-2 text-sm opacity-70">
              <div><Link href="/products/aluminium-extrusion" className="hover:opacity-100 transition-opacity">Aluminium Extrusion</Link></div>
              <div><Link href="/products/acp-sheet" className="hover:opacity-100 transition-opacity">ACP Sheets</Link></div>
              <div><Link href="/products/bus-body-materials" className="hover:opacity-100 transition-opacity">Bus Body Materials</Link></div>
              <div><Link href="/products/vehicle-plywood" className="hover:opacity-100 transition-opacity">Vehicle Plywood</Link></div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-4">Locations</div>
            <div className="space-y-2 text-sm opacity-70">
              <div><Link href="/karur/aluminium-extrusion" className="hover:opacity-100 transition-opacity">Karur</Link></div>
              <div><Link href="/coimbatore/acp-sheet" className="hover:opacity-100 transition-opacity">Coimbatore</Link></div>
              <div><Link href="/salem/chequered-plywood" className="hover:opacity-100 transition-opacity">Salem</Link></div>
              <div><Link href="/erode/bus-body-materials" className="hover:opacity-100 transition-opacity">Erode</Link></div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-4">Company</div>
            <div className="space-y-2 text-sm opacity-70">
              <div><Link href="/about" className="hover:opacity-100 transition-opacity">About Us</Link></div>
              <div><Link href="/sustainability" className="hover:opacity-100 transition-opacity">Sustainability</Link></div>
              <div><Link href="/premium" className="hover:opacity-100 transition-opacity">Enterprise</Link></div>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-4">Support</div>
            <div className="space-y-2 text-sm opacity-70">
              <div><Link href="/quote" className="hover:opacity-100 transition-opacity">Get Quote</Link></div>
              <div><Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="text-xs opacity-50">
          © 2026 A Karur Metal Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
