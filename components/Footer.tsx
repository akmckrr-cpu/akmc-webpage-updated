"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{
      background: "#0A0A0A",
      borderTop: "1px solid rgba(255,255,255,0.08)",
      padding: "48px 48px 24px",
    }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        {/* Main Footer */}
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1.5fr 1fr", gap: "48px", marginBottom: "48px" }} className="footer-grid-responsive">
          {/* Brand */}
          <div>
            <div style={{ fontSize: "22px", fontWeight: 700, letterSpacing: "0.08em", color: "#fff", marginBottom: "4px" }}>AKMC</div>
            <div style={{ fontSize: "9px", fontWeight: 500, letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>PREMIUM BUS BODY MATERIALS</div>
          </div>

          {/* Phone */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <Phone size={14} style={{ color: "#C9A96E" }} />
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>94433 66538</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "24px" }}>
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>95664 76538</span>
            </div>
          </div>

          {/* Address */}
          <div>
            <div style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
              <MapPin size={14} style={{ color: "#C9A96E", marginTop: "3px", flexShrink: 0 }} />
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                Chinna Andankovil,<br />
                Karur, Tamil Nadu - 639001
              </span>
            </div>
          </div>

          {/* Email + Social */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <Mail size={14} style={{ color: "#C9A96E" }} />
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>info@akmconline.com</span>
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              {[Facebook, Instagram, Youtube, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C9A96E")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          paddingTop: "20px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "16px",
        }}>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
            © 2024 A Karur Metal Co. All Rights Reserved.
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            <a href="#" style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            >Privacy Policy</a>
            <a href="#" style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            >Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
