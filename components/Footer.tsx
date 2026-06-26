"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-6 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8 pb-8" style={{ borderBottom: "1px solid var(--border)" }}>
          <div>
            <div className="text-sm font-bold tracking-widest uppercase mb-4" style={{ color: "var(--text)" }}>AKMC Systems</div>
            <p className="text-sm leading-relaxed font-light" style={{ color: "var(--text-muted)", maxWidth: "280px" }}>
              Strategic transport material logistics networks supplying South India's premier manufacturing zones.
            </p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text)" }}>Systems Matrix</div>
            <div className="space-y-2 text-sm">
              <div><Link href="/products/aluminium-extrusion" className="hover:opacity-100 transition-opacity font-light" style={{ color: "var(--text-muted)" }}>Extrusions Matrix</Link></div>
              <div><Link href="/products/acp-sheet" className="hover:opacity-100 transition-opacity font-light" style={{ color: "var(--text-muted)" }}>ACM Skin Panels</Link></div>
              <div><Link href="/products/bus-body-materials" className="hover:opacity-100 transition-opacity font-light" style={{ color: "var(--text-muted)" }}>Bus Body Materials</Link></div>
              <div><Link href="/products/vehicle-plywood" className="hover:opacity-100 transition-opacity font-light" style={{ color: "var(--text-muted)" }}>LCV Decking Plates</Link></div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text)" }}>Logistics Infrastructure</div>
            <div className="space-y-2 text-sm">
              <div><Link href="/karur/aluminium-extrusion" className="hover:opacity-100 transition-opacity font-light" style={{ color: "var(--text-muted)" }}>Karur Core Hub</Link></div>
              <div><Link href="/coimbatore/acp-sheet" className="hover:opacity-100 transition-opacity font-light" style={{ color: "var(--text-muted)" }}>Coimbatore Corridors</Link></div>
              <div><Link href="/salem/chequered-plywood" className="hover:opacity-100 transition-opacity font-light" style={{ color: "var(--text-muted)" }}>Salem Logistics</Link></div>
              <div><Link href="/kerala/aluminium-extrusion" className="hover:opacity-100 transition-opacity font-light" style={{ color: "var(--text-muted)" }}>Kerala Logistics Matrices</Link></div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--text)" }}>Technical Corporate</div>
            <div className="space-y-2 text-sm">
              <div><Link href="/about" className="hover:opacity-100 transition-opacity font-light" style={{ color: "var(--text-muted)" }}>Quality Protocols</Link></div>
              <div><Link href="/about" className="hover:opacity-100 transition-opacity font-light" style={{ color: "var(--text-muted)" }}>AIS-052 Data Specs</Link></div>
              <div><Link href="/quote" className="hover:opacity-100 transition-opacity font-light" style={{ color: "var(--text-muted)" }}>Get Quote</Link></div>
            </div>
          </div>
        </div>
        <div className="text-center text-xs font-mono pt-4" style={{ color: "var(--text-muted)" }}>
          &copy; 2026 A KARUR METAL CO. TECHNICAL VEHICLE SUPPLY OPERATIONS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
