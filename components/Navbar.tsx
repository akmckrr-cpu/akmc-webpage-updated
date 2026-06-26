"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 px-6 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <svg viewBox="0 0 100 100" className="w-10 h-10" style={{ fill: "none", stroke: "var(--text)", strokeWidth: 6.5 }}>
            <circle cx="50" cy="50" r="43" />
            <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle" style={{ fontFamily: "var(--font-inter), sans-serif", fontWeight: 700, fontSize: 25, fill: "var(--text)", letterSpacing: "-0.04em" }}>
              akmc
            </text>
          </svg>
          <span className="text-sm font-medium tracking-widest uppercase" style={{ color: "var(--text)" }}>Systems</span>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm">
          <Link href="/products" className="hover:opacity-80 transition-opacity uppercase tracking-wider text-xs font-medium" style={{ color: "var(--text-muted)" }}>Materials Matrix</Link>
          <Link href="/acp-designs" className="hover:opacity-80 transition-opacity uppercase tracking-wider text-xs font-medium" style={{ color: "var(--text-muted)" }}>Designs</Link>
          <Link href="/quote" className="hover:opacity-80 transition-opacity uppercase tracking-wider text-xs font-medium" style={{ color: "var(--text-muted)" }}>Quote</Link>
          <Link href="/about" className="hover:opacity-80 transition-opacity uppercase tracking-wider text-xs font-medium" style={{ color: "var(--text-muted)" }}>About</Link>
        </div>

        <Link href="/quote" className="hidden md:inline-flex btn-primary text-xs px-6 py-2.5">System Architecture Quote</Link>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} style={{ color: "var(--text)" }}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 pb-4 border-t pt-4 space-y-4" style={{ borderColor: "var(--border)" }}>
          <Link href="/products" className="block text-sm uppercase tracking-wider" style={{ color: "var(--text-muted)" }} onClick={() => setMobileOpen(false)}>Materials Matrix</Link>
          <Link href="/acp-designs" className="block text-sm uppercase tracking-wider" style={{ color: "var(--text-muted)" }} onClick={() => setMobileOpen(false)}>Designs</Link>
          <Link href="/quote" className="block text-sm uppercase tracking-wider" style={{ color: "var(--text-muted)" }} onClick={() => setMobileOpen(false)}>Quote</Link>
          <Link href="/about" className="block text-sm uppercase tracking-wider" style={{ color: "var(--text-muted)" }} onClick={() => setMobileOpen(false)}>About</Link>
          <Link href="/quote" className="inline-block btn-primary text-xs px-5 py-2 mt-2" onClick={() => setMobileOpen(false)}>System Architecture Quote</Link>
        </div>
      )}
    </nav>
  );
}
