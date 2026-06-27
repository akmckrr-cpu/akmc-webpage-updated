"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ["Products", "Applications", "Brands", "About Us", "Resources", "Contact"];

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: "rgba(10,10,10,0.85)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "16px 48px",
      display: "flex", alignItems: "center", justifyContent: "space-between",
    }}>
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
        <span style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "0.08em", color: "#fff" }}>AKMC</span>
        <span style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginTop: "8px" }}>PREMIUM BUS BODY MATERIALS</span>
      </Link>

      {/* Desktop Nav */}
      <div style={{ display: "flex", alignItems: "center", gap: "32px" }} className="hidden-lg">
        {navLinks.map((item) => (
          <a key={item} href="#" style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: "13px", fontWeight: 400, transition: "color 0.3s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* CTA + Mobile Toggle */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <Link href="/quote" style={{
          background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.2)",
          padding: "10px 20px", fontSize: "12px", fontWeight: 500,
          textDecoration: "none", display: "flex", alignItems: "center", gap: "6px",
          transition: "all 0.3s",
        }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.borderColor = "#C9A96E"; e.currentTarget.style.color = "#0A0A0A"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "#fff"; }}
        >
          Request Quote <ArrowRight size={14} />
        </Link>
        <button 
          style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none" }} 
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          position: "absolute", top: "100%", left: 0, right: 0,
          background: "rgba(10,10,10,0.95)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "24px 48px", display: "flex", flexDirection: "column", gap: "16px",
        }}>
          {navLinks.map((item) => (
            <a key={item} href="#" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "none", fontSize: "14px" }}>{item}</a>
          ))}
        </div>
      )}
    </nav>
  );
}
