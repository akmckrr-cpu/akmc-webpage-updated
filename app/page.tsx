import { Metadata } from "next";
import Link from "next/link";
import { 
  Phone, MessageCircle, ArrowRight, Ruler, Sheet, Layers, 
  Grid3X3, Paintbrush, Droplets, Wrench, Truck, Star,
  MapPin, CheckCircle2
} from "lucide-react";
import { categories } from "@/lib/data/categories";
import { cities } from "@/lib/data/cities";
import { acpDesigns } from "@/lib/data/acpDesigns";
import { vehiclePlywoodItems } from "@/lib/data/vehiclePlywood";
import { generateWhatsAppLink } from "@/lib/seo-utils";

export const metadata: Metadata = {
  title: "Bus Body Building Materials Supplier | Karur, Tamil Nadu",
  description: "A Karur Metal Co. - Leading supplier of aluminium extrusions, ACP sheets, chequered plywood, paints, sealants & hardware for bus body construction. Supply across Tamil Nadu, Kerala & Karnataka.",
};

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
    <div>
      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          padding: "140px 64px 120px 64px",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "80px",
          alignItems: "center",
        }}
        className="hero-responsive"
      >
        <div style={{ maxWidth: "780px" }}>
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--text-muted)",
              marginBottom: "32px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <Star size={14} style={{ color: "var(--accent)" }} />
            Trusted by 500+ Bus Body Builders Across South India
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(44px, 5.5vw, 76px)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
              lineHeight: 1.08,
              marginBottom: "36px",
              color: "var(--text)",
            }}
          >
            Bus Body Building<br />
            <strong style={{ fontWeight: 600 }}>Materials Supplier</strong>
          </h1>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "var(--text-muted)",
              marginBottom: "16px",
              maxWidth: "580px",
            }}
          >
            Aluminium Extrusions &bull; ACP Sheets &bull; Aluminium Sheets &bull; Chequered Plywood &bull; Paints &bull; Hardware
          </p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "var(--text-muted)",
              marginBottom: "48px",
              maxWidth: "580px",
            }}
          >
            Supply Across Tamil Nadu, Kerala & Karnataka
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="tel:+919876543210"
              style={{
                background: "var(--btn-bg)",
                color: "var(--btn-text)",
                padding: "14px 32px",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                transition: "opacity 0.3s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href={generateWhatsAppLink("Hi AKMC, I need a quote for bus body building materials.")}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#25D366",
                color: "#fff",
                padding: "14px 32px",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                transition: "opacity 0.3s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <Link
              href="/products"
              style={{
                background: "transparent",
                color: "var(--text)",
                border: "1px solid var(--text)",
                padding: "14px 32px",
                fontSize: "13px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                transition: "all 0.3s",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Browse Products <ArrowRight size={16} />
            </Link>
          </div>
        </div>
        <div
          style={{
            border: "1px solid var(--border)",
            aspectRatio: "1 / 1",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--bg-alt)",
          }}
        >
          <div style={{ width: "40px", height: "40px", position: "relative" }}>
            <div style={{ position: "absolute", top: "19px", left: 0, width: "40px", height: "1px", background: "var(--border)" }} />
            <div style={{ position: "absolute", left: "19px", top: 0, width: "1px", height: "40px", background: "var(--border)" }} />
          </div>
        </div>
      </section>

      {/* ===== STATS STRIP ===== */}
      <section
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          background: "var(--bg-alt)",
          padding: "60px 64px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            maxWidth: "1272px",
            margin: "0 auto",
          }}
          className="stats-responsive"
        >
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "54px", fontWeight: 200, letterSpacing: "-0.03em", marginBottom: "8px", color: "var(--text)" }}>20+</div>
            <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)" }}>Industrial Hubs Served</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "54px", fontWeight: 200, letterSpacing: "-0.03em", marginBottom: "8px", color: "var(--text)" }}>500+</div>
            <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)" }}>Contracted Coach Builders</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "54px", fontWeight: 200, letterSpacing: "-0.03em", marginBottom: "8px", color: "var(--text)" }}>AIS-052</div>
            <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)" }}>Regulatory Code Compliance</div>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "54px", fontWeight: 200, letterSpacing: "-0.03em", marginBottom: "8px", color: "var(--text)" }}>0.8mm+</div>
            <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--text-muted)" }}>Aluminium Gauge Profiling</div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCT CATEGORIES ===== */}
      <section
        style={{ padding: "120px 64px", borderTop: "1px solid var(--border)", maxWidth: "1400px", margin: "0 auto" }}
        className="section-responsive"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: "80px", alignItems: "end" }} className="section-header-responsive">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: 300, letterSpacing: "-0.02em", color: "var(--text)" }}>
            Product <strong style={{ fontWeight: 600 }}>Categories</strong>
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "440px", justifySelf: "end" }} className="section-desc-responsive">
            Complete range of materials for bus body construction, from structural aluminium to interior finishes.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }} className="grid-responsive">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "280px",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <div>
                <div style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
                  {iconMap[cat.icon]}
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 500, marginBottom: "12px", letterSpacing: "-0.01em", color: "var(--text)" }}>
                  {cat.displayName}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6, fontWeight: 300, marginBottom: "16px" }}>
                  {cat.description}
                </p>
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {cat.subcategories?.slice(0, 3).map((sub) => (
                  <span
                    key={sub}
                    style={{
                      border: "1px solid var(--border)",
                      padding: "4px 12px",
                      fontSize: "11px",
                      fontFamily: "monospace",
                      color: "var(--text-muted)",
                      textTransform: "uppercase",
                    }}
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== ACP DESIGNS PREVIEW ===== */}
      <section
        style={{ padding: "120px 64px", borderTop: "1px solid var(--border)", maxWidth: "1400px", margin: "0 auto" }}
        className="section-responsive"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: "80px", alignItems: "end" }} className="section-header-responsive">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: 300, letterSpacing: "-0.02em", color: "var(--text)" }}>
            ACP Design <strong style={{ fontWeight: 600 }}>Catalog</strong>
          </h2>
          <div style={{ justifySelf: "end" }}>
            <Link
              href="/acp-designs"
              style={{
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderBottom: "1px solid var(--text)",
                paddingBottom: "4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              View All Designs <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }} className="grid-4-responsive">
          {featuredACP.map((design) => (
            <Link
              key={design.id}
              href={`/acp-designs/${design.slug}`}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  background: "var(--bg-alt)",
                  height: "160px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  border: "1px solid var(--border)",
                }}
              >
                <Layers size={24} style={{ color: "var(--text-muted)" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 500, marginBottom: "8px", color: "var(--text)" }}>
                {design.designName}
              </h3>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {design.series}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== VEHICLE PLYWOOD ===== */}
      <section
        style={{ padding: "120px 64px", borderTop: "1px solid var(--border)", maxWidth: "1400px", margin: "0 auto" }}
        className="section-responsive"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: "80px", alignItems: "end" }} className="section-header-responsive">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: 300, letterSpacing: "-0.02em", color: "var(--text)" }}>
            Vehicle-Specific <strong style={{ fontWeight: 600 }}>Plywood</strong>
          </h2>
          <div style={{ justifySelf: "end" }}>
            <Link
              href="/vehicle-plywood"
              style={{
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderBottom: "1px solid var(--text)",
                paddingBottom: "4px",
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
              }}
            >
              View All Vehicles <ArrowRight size={14} />
            </Link>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }} className="grid-4-responsive">
          {featuredVehicles.map((vehicle) => (
            <Link
              key={vehicle.id}
              href={`/vehicle-plywood/${vehicle.slug}`}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  background: "var(--bg-alt)",
                  height: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  border: "1px solid var(--border)",
                }}
              >
                <Truck size={24} style={{ color: "var(--text-muted)" }} />
              </div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 500, marginBottom: "8px", color: "var(--text)" }}>
                {vehicle.vehicleName}
              </h3>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {vehicle.vehicleBrand} &bull; {vehicle.thickness}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== SERVICE AREAS ===== */}
      <section
        style={{
          padding: "120px 64px",
          borderTop: "1px solid var(--border)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
        className="section-responsive"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: "80px", alignItems: "end" }} className="section-header-responsive">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: 300, letterSpacing: "-0.02em", color: "var(--text)" }}>
            Supply Across <strong style={{ fontWeight: 600 }}>South India</strong>
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "440px", justifySelf: "end" }} className="section-desc-responsive">
            Fast delivery to major bus body building hubs.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }} className="grid-responsive">
          {majorCities.map((city) => (
            <Link
              key={city.slug}
              href={`/${city.slug}/aluminium-extrusion`}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                padding: "32px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <MapPin size={20} style={{ color: "var(--accent)", flexShrink: 0 }} />
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 500, marginBottom: "4px", color: "var(--text)" }}>
                  {city.name}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>{city.state}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section
        style={{ padding: "120px 64px", borderTop: "1px solid var(--border)", maxWidth: "1400px", margin: "0 auto" }}
        className="section-responsive"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", marginBottom: "80px", alignItems: "end" }} className="section-header-responsive">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: 300, letterSpacing: "-0.02em", color: "var(--text)" }}>
            Why Choose <strong style={{ fontWeight: 600 }}>A Karur Metal Co.?</strong>
          </h2>
          <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "440px", justifySelf: "end" }} className="section-desc-responsive">
            Your trusted partner for bus body building materials since 2005.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }} className="grid-responsive">
          {[
            { title: "Wholesale Pricing", desc: "Direct from manufacturer pricing with volume discounts for bulk orders" },
            { title: "Pan India Delivery", desc: "Fast delivery across Tamil Nadu, Kerala, Karnataka, and all major states" },
            { title: "AIS-052 Compliant", desc: "All materials meet Automotive Industry Standard 052 for bus body construction" },
            { title: "Technical Support", desc: "Expert guidance on material selection, specifications, and application" },
            { title: "Custom Cutting", desc: "Precision CNC cutting and fabrication services for custom requirements" },
            { title: "Credit Facilities", desc: "Flexible payment terms and credit facilities for established customers" },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                padding: "48px",
                display: "flex",
                gap: "16px",
                transition: "all 0.3s ease",
              }}
            >
              <CheckCircle2 size={24} style={{ color: "var(--accent)", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 500, marginBottom: "8px", color: "var(--text)" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "14px", color: "var(--text-muted)", lineHeight: 1.6, fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section
        style={{
          padding: "120px 64px",
          borderTop: "1px solid var(--border)",
          maxWidth: "1400px",
          margin: "0 auto",
          textAlign: "center",
        }}
        className="section-responsive"
      >
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: 300, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: "24px" }}>
          Need a Quote for Your Bus Body Project?
        </h2>
        <p style={{ fontSize: "15px", color: "var(--text-muted)", lineHeight: 1.6, maxWidth: "600px", margin: "0 auto 40px" }}>
          Get wholesale pricing on aluminium extrusions, ACP sheets, plywood, paints, sealants, and hardware.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/quote"
            style={{
              background: "var(--btn-bg)",
              color: "var(--btn-text)",
              padding: "18px 40px",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              textDecoration: "none",
              transition: "opacity 0.3s",
              display: "inline-block",
            }}
          >
            Request Wholesale Quote
          </Link>
          <a
            href={generateWhatsAppLink("I need a wholesale quote for bus body materials. Please contact me.")}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#25D366",
              color: "#fff",
              padding: "18px 40px",
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              textDecoration: "none",
              transition: "opacity 0.3s",
              display: "inline-block",
            }}
          >
            WhatsApp Enquiry
          </a>
        </div>
      </section>
    </div>
  );
}