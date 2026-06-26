"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "80px 64px 40px 64px",
        maxWidth: "1400px",
        margin: "0 auto",
        transition: "border 0.5s",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.5fr repeat(3, 1fr)",
          gap: "40px",
          marginBottom: "60px",
        }}
        className="footer-grid-responsive"
      >
        <div>
          <div
            style={{
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              marginBottom: "16px",
              textTransform: "uppercase",
              color: "var(--text)",
            }}
          >
            AKMC Systems
          </div>
          <p
            style={{
              fontSize: "13px",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: "280px",
              fontWeight: 300,
            }}
          >
            Strategic transport material logistics networks supplying South India&apos;s premier manufacturing zones.
          </p>
        </div>
        <div>
          <h4
            style={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "24px",
              color: "var(--text)",
            }}
          >
            Systems Matrix
          </h4>
          <ul style={{ listStyle: "none" }}>
            <li style={{ marginBottom: "12px" }}>
              <Link href="/products" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "13px", fontWeight: 300, transition: "color 0.2s" }}>Extrusions Matrix</Link>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <Link href="/products" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "13px", fontWeight: 300, transition: "color 0.2s" }}>ACM Skin Panels</Link>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <Link href="/vehicle-plywood" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "13px", fontWeight: 300, transition: "color 0.2s" }}>LCV Decking Plates</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4
            style={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "24px",
              color: "var(--text)",
            }}
          >
            Logistics Infrastructure
          </h4>
          <ul style={{ listStyle: "none" }}>
            <li style={{ marginBottom: "12px" }}>
              <Link href="/karur/aluminium-extrusion" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "13px", fontWeight: 300, transition: "color 0.2s" }}>Karur Core Hub</Link>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <Link href="/coimbatore/aluminium-extrusion" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "13px", fontWeight: 300, transition: "color 0.2s" }}>Coimbatore Corridors</Link>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <Link href="/kerala/aluminium-extrusion" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "13px", fontWeight: 300, transition: "color 0.2s" }}>Kerala Logistics Matrices</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4
            style={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: "24px",
              color: "var(--text)",
            }}
          >
            Technical Corporate
          </h4>
          <ul style={{ listStyle: "none" }}>
            <li style={{ marginBottom: "12px" }}>
              <Link href="/quote" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "13px", fontWeight: 300, transition: "color 0.2s" }}>Quality Protocols</Link>
            </li>
            <li style={{ marginBottom: "12px" }}>
              <Link href="/quote" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "13px", fontWeight: 300, transition: "color 0.2s" }}>AIS-052 Data Specs</Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          fontSize: "11px",
          fontFamily: "monospace",
          color: "var(--text-muted)",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
          paddingTop: "40px",
          transition: "border 0.5s",
        }}
      >
        &copy; 2026 A KARUR METAL CO. TECHNICAL VEHICLE SUPPLY OPERATIONS. ALL RIGHTS RESERVED.
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .footer-grid-responsive {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          .footer-grid-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
