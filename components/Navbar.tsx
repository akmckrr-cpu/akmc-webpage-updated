"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      style={{
        background: "var(--nav-bg)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        padding: "20px 64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 100,
        transition: "background 0.5s ease, border 0.5s ease",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <svg
          viewBox="0 0 100 100"
          style={{
            width: "44px",
            height: "44px",
            fill: "none",
            stroke: "var(--text)",
            strokeWidth: "6.5",
            transition: "stroke 0.5s ease",
          }}
        >
          <circle cx="50" cy="50" r="43" />
          <text
            x="50%"
            y="54%"
            dominantBaseline="middle"
            textAnchor="middle"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: "25px",
              fill: "var(--text)",
              letterSpacing: "-0.04em",
              transition: "fill 0.5s ease",
            }}
          >
            akmc
          </text>
        </svg>
        <span
          style={{
            fontSize: "15px",
            fontWeight: 500,
            letterSpacing: "0.15em",
            color: "var(--text)",
            textTransform: "uppercase",
          }}
        >
          Systems
        </span>
      </div>

      <div
        style={{ display: "flex", gap: "48px" }}
        className="hidden md:flex"
      >
        <Link
          href="/products"
          className="nav-link"
          style={{
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: 400,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            transition: "color 0.3s",
          }}
        >
          Materials Matrix
        </Link>
        <Link
          href="/vehicle-plywood"
          className="nav-link"
          style={{
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: 400,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            transition: "color 0.3s",
          }}
        >
          Logistics Hubs
        </Link>
        <Link
          href="/quote"
          className="nav-link"
          style={{
            color: "var(--text-muted)",
            textDecoration: "none",
            fontSize: "13px",
            fontWeight: 400,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            transition: "color 0.3s",
          }}
        >
          Specifications
        </Link>
      </div>

      <Link
        href="/quote"
        style={{
          background: "transparent",
          color: "var(--text)",
          border: "1px solid var(--text)",
          padding: "10px 22px",
          fontSize: "11px",
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          textDecoration: "none",
          transition: "all 0.3s",
        }}
        className="hidden md:inline-block"
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.background = "var(--text)";
          (e.target as HTMLElement).style.color = "var(--bg)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.background = "transparent";
          (e.target as HTMLElement).style.color = "var(--text)";
        }}
      >
        System Architecture Quote
      </Link>

      <button
        className="md:hidden"
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{ color: "var(--text)" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "var(--nav-bg)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--border)",
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Link href="/products" style={{ color: "var(--text)", textDecoration: "none", fontSize: "13px", textTransform: "uppercase" }}>Materials Matrix</Link>
          <Link href="/vehicle-plywood" style={{ color: "var(--text)", textDecoration: "none", fontSize: "13px", textTransform: "uppercase" }}>Logistics Hubs</Link>
          <Link href="/quote" style={{ color: "var(--text)", textDecoration: "none", fontSize: "13px", textTransform: "uppercase" }}>Specifications</Link>
          <Link href="/quote" style={{ color: "var(--text)", textDecoration: "none", fontSize: "13px", textTransform: "uppercase", border: "1px solid var(--text)", padding: "10px 22px", textAlign: "center" }}>System Architecture Quote</Link>
        </div>
      )}
    </nav>
  );
}
