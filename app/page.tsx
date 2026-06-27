"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, ChevronDown, Shield, Layers, Truck, Headphones,
  Ruler, Sheet, Grid3X3, Paintbrush, Droplets, Wrench, CheckCircle2,
  Star, MapPin, Phone, MessageCircle
} from "lucide-react";
import { categories } from "@/lib/data/categories";
import { cities } from "@/lib/data/cities";
import { acpDesigns } from "@/lib/data/acpDesigns";
import { vehiclePlywoodItems } from "@/lib/data/vehiclePlywood";
import { generateWhatsAppLink } from "@/lib/seo-utils";

const iconMap: Record<string, React.ReactNode> = {
  Ruler: <Ruler size={24} />,
  Sheet: <Sheet size={24} />,
  Layers: <Layers size={24} />,
  Grid3X3: <Grid3X3 size={24} />,
  Paintbrush: <Paintbrush size={24} />,
  Droplets: <Droplets size={24} />,
  Wrench: <Wrench size={24} />,
};

export default function HomePage() {
  const majorCities = cities.filter(c => c.type === "major").slice(0, 6);
  const featuredACP = acpDesigns.slice(0, 4);
  const featuredVehicles = vehiclePlywoodItems.slice(0, 4);

  return (
    <div style={{ background: "#0A0A0A", color: "#fff", fontFamily: "'Inter', -apple-system, sans-serif" }}>

      {/* ===== HERO SECTION ===== */}
      <section style={{
        minHeight: "100vh", position: "relative",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        alignItems: "center", overflow: "hidden",
        paddingTop: "80px",
      }} className="hero-responsive">
        {/* Left Content */}
        <div style={{ padding: "0 64px 0 48px", maxWidth: "640px", zIndex: 2 }}>
          <div style={{
            fontSize: "11px", fontWeight: 600, textTransform: "uppercase",
            letterSpacing: "0.2em", color: "#C9A96E", marginBottom: "24px",
          }}>
            PREMIUM MATERIALS.<br />STRONGER VEHICLES.
          </div>

          <h1 style={{
            fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 700,
            lineHeight: 1.05, letterSpacing: "-0.02em",
            marginBottom: "24px", color: "#fff",
          }}>
            EVERY<br />JOURNEY<br />STARTS<br /><span style={{ color: "#C9A96E" }}>HERE.</span>
          </h1>

          <p style={{
            fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.55)",
            marginBottom: "40px", maxWidth: "380px",
          }}>
            High performance materials for bus builders who never compromise on quality.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/products" style={{
              background: "#C9A96E", color: "#0A0A0A",
              padding: "14px 28px", fontSize: "13px", fontWeight: 600,
              textDecoration: "none", display: "flex", alignItems: "center", gap: "8px",
              transition: "all 0.3s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#b8985d"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#C9A96E"; }}
            >
              Explore Products <ArrowRight size={16} />
            </Link>
            <Link href="/products" style={{
              background: "transparent", color: "#fff",
              border: "1px solid rgba(255,255,255,0.25)",
              padding: "14px 28px", fontSize: "13px", fontWeight: 500,
              textDecoration: "none", display: "flex", alignItems: "center", gap: "8px",
              transition: "all 0.3s",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C9A96E"; e.currentTarget.style.color = "#C9A96E"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "#fff"; }}
            >
              View Applications <ArrowRight size={16} />
            </Link>
          </div>

          {/* Scroll indicator */}
          <div style={{ marginTop: "60px", display: "flex", alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>
            <div style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.3)", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: "-2px", width: "5px", height: "5px", borderRadius: "50%", background: "#C9A96E", animation: "scrollBounce 2s infinite" }} />
            </div>
            Scroll to explore
          </div>
        </div>

        {/* Right - Bus Image */}
        <div style={{ position: "relative", height: "100%", minHeight: "600px" }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, #0A0A0A 0%, transparent 40%)",
            zIndex: 1,
          }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ textAlign: "center", color: "rgba(255,255,255,0.15)" }}>
              <Truck size={120} strokeWidth={0.5} />
              <p style={{ fontSize: "14px", marginTop: "16px", letterSpacing: "0.1em" }}>BUS HERO IMAGE</p>
            </div>
          </div>

          {/* Right side numbered list */}
          <div style={{
            position: "absolute", right: "48px", top: "50%", transform: "translateY(-50%)",
            zIndex: 2, display: "flex", flexDirection: "column", gap: "24px",
          }}>
            {[
              { num: "01", label: "Premium\nMaterials" },
              { num: "02", label: "Engineered\nStrength" },
              { num: "03", label: "Trusted by\nBuilders" },
              { num: "04", label: "Across\nSouth India" },
            ].map((item, i) => (
              <div key={item.num} style={{
                display: "flex", alignItems: "flex-start", gap: "12px",
                opacity: i === 0 ? 1 : 0.5,
              }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#C9A96E", fontFamily: "monospace" }}>{item.num}</span>
                <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", lineHeight: 1.5, whiteSpace: "pre-line" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES STRIP ===== */}
      <section style={{
        background: "#0A0A0A",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "48px 48px",
      }}>
        <div style={{
          maxWidth: "1400px", margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px",
        }} className="features-responsive">
          {[
            { icon: <Shield size={28} />, title: "PREMIUM QUALITY", desc: "International standards\nyou can trust" },
            { icon: <Layers size={28} />, title: "WIDE RANGE", desc: "1000+ materials for\nevery need" },
            { icon: <Truck size={28} />, title: "FAST DELIVERY", desc: "On-time. Every time.\nAcross South India" },
            { icon: <Headphones size={28} />, title: "EXPERT SUPPORT", desc: "Right guidance for\nyour business" },
          ].map((feature) => (
            <div key={feature.title} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ color: "#C9A96E", flexShrink: 0, marginTop: "2px" }}>{feature.icon}</div>
              <div>
                <h3 style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.1em", color: "#fff", marginBottom: "6px" }}>{feature.title}</h3>
                <p style={{ fontSize: "12px", lineHeight: 1.6, color: "rgba(255,255,255,0.45)", whiteSpace: "pre-line" }}>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== OUR MATERIALS ===== */}
      <section style={{ padding: "100px 48px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "48px" }} className="materials-header-responsive">
          <div>
            <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", color: "#C9A96E", textTransform: "uppercase", marginBottom: "16px" }}>OUR MATERIALS</div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 300, lineHeight: 1.15, color: "#fff" }}>
              Premium Materials.<br />
              <span style={{ fontWeight: 500 }}>Built for Every Journey.</span>
            </h2>
          </div>
          <div style={{ maxWidth: "320px", textAlign: "right" }} className="materials-desc-responsive">
            <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(255,255,255,0.5)", marginBottom: "16px" }}>
              From interiors to exteriors, we provide high performance materials that deliver durability, safety and beauty.
            </p>
            <Link href="/products" style={{ color: "#C9A96E", textDecoration: "none", fontSize: "13px", fontWeight: 500, display: "inline-flex", alignItems: "center", gap: "6px" }}>
              View all products <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "16px" }} className="materials-grid-responsive">
          {[
            { title: "Designer ACP", desc: "Premium finishes.\nEndless possibilities.", img: "acp" },
            { title: "Aluminium Extrusions", desc: "Precision engineered.\nPerfectly crafted.", img: "extrusion" },
            { title: "Chequered Plywood", desc: "Strong. Reliable.\nBuilt to carry more.", img: "plywood" },
            { title: "Paints & Coatings", desc: "Long lasting finish.\nProtection that stays.", img: "paint" },
            { title: "Hardware & Others", desc: "Small parts.\nBig impact.", img: "hardware" },
          ].map((item) => (
            <div key={item.title} style={{
              background: "#141414", borderRadius: "12px", overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.06)",
              transition: "all 0.3s", cursor: "pointer",
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{
                height: "200px", background: "#1a1a1a",
                display: "flex", alignItems: "center", justifyContent: "center",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ color: "rgba(255,255,255,0.1)" }}>
                  <Layers size={48} />
                </div>
              </div>
              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>{item.title}</h3>
                <p style={{ fontSize: "12px", lineHeight: 1.6, color: "rgba(255,255,255,0.45)", whiteSpace: "pre-line", marginBottom: "16px" }}>{item.desc}</p>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#C9A96E", transition: "all 0.3s", cursor: "pointer",
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#C9A96E"; e.currentTarget.style.color = "#0A0A0A"; e.currentTarget.style.borderColor = "#C9A96E"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#C9A96E"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                >
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BRANDS ===== */}
      <section style={{
        padding: "60px 48px", maxWidth: "1400px", margin: "0 auto",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", color: "#C9A96E", textTransform: "uppercase" }}>TOP BRANDS WE DEAL IN</div>
          <Link href="/brands" style={{ color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
            View all brands <ArrowRight size={14} />
          </Link>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "32px", flexWrap: "wrap" }} className="brands-responsive">
          {["Aludecor", "JINDAL ALUMINIUM", "Magnus", "FEVICOL", "asianpaints", "3M", "WÜRTH"].map((brand) => (
            <div key={brand} style={{
              fontSize: brand === "JINDAL ALUMINIUM" ? "11px" : "16px",
              fontWeight: brand === "JINDAL ALUMINIUM" ? 700 : 600,
              color: "rgba(255,255,255,0.35)", letterSpacing: "0.05em",
              transition: "color 0.3s", cursor: "pointer",
            }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
            >
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* ===== WHY BUILDERS CHOOSE AKMC ===== */}
      <section style={{ padding: "80px 48px", maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.15em", color: "#C9A96E", textTransform: "uppercase", marginBottom: "40px" }}>
          WHY BUILDERS CHOOSE AKMC
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }} className="features-responsive">
          {[
            { icon: <Shield size={24} />, title: "Premium Quality", desc: "International standards\nyou can trust" },
            { icon: <Layers size={24} />, title: "Wide Range", desc: "1000+ materials for\nevery need" },
            { icon: <Truck size={24} />, title: "Timely Delivery", desc: "On-time. Every time.\nAcross South India" },
            { icon: <Headphones size={24} />, title: "Expert Support", desc: "Right guidance for\nyour business" },
          ].map((item) => (
            <div key={item.title} style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
              <div style={{ color: "#C9A96E", flexShrink: 0 }}>{item.icon}</div>
              <div>
                <h3 style={{ fontSize: "14px", fontWeight: 600, color: "#fff", marginBottom: "6px" }}>{item.title}</h3>
                <p style={{ fontSize: "12px", lineHeight: 1.6, color: "rgba(255,255,255,0.45)", whiteSpace: "pre-line" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== RESPONSIVE STYLES ===== */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-responsive { grid-template-columns: 1fr !important; }
          .features-responsive { grid-template-columns: repeat(2, 1fr) !important; }
          .materials-grid-responsive { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .features-responsive { grid-template-columns: 1fr !important; }
          .materials-grid-responsive { grid-template-columns: repeat(2, 1fr) !important; }
          .materials-header-responsive { flex-direction: column !important; align-items: flex-start !important; gap: 20px; }
          .materials-desc-responsive { text-align: left !important; max-width: 100% !important; }
          .brands-responsive { justify-content: center !important; }
        }
        @media (max-width: 480px) {
          .materials-grid-responsive { grid-template-columns: 1fr !important; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(12px); }
        }
      `}</style>
    </div>
  );
}
