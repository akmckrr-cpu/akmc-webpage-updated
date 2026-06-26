import Link from "next/link";
import { categories } from "@/lib/data/categories";
import { acpDesigns } from "@/lib/data/acp-designs";
import { vehiclePlywoodItems } from "@/lib/data/vehiclePlywood";
import { cities } from "@/lib/data/cities";
import { Ruler, Sheet, Layers, Grid3X3, Paintbrush, Droplets, Wrench } from "lucide-react";

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
  const majorCities = cities.filter((c) => c.type === "major").slice(0, 6);
  const featuredACP = acpDesigns.slice(0, 4);
  const featuredVehicles = vehiclePlywoodItems.slice(0, 4);

  return (
    <>
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
            }}
          >
            Est. 2005 / Commercial Fleet Infrastructure Supply
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
            Architectural Materials for{" "}
            <strong style={{ fontWeight: 600 }}>High-Performance Fleets.</strong>
          </h1>
          <p
            style={{
              fontSize: "18px",
              fontWeight: 300,
              lineHeight: 1.6,
              color: "var(--text-muted)",
              marginBottom: "48px",
              maxWidth: "580px",
            }}
          >
            Wholesale supply solutions, wholesale raw industrial aluminium extrusions, precision-configured ACP skin matrices, and heavy-duty transport decking solutions built for absolute endurance.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link
              href="/products"
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
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.9"; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; }}
            >
              Explore Materials Matrix
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
          <div
            style={{
              width: "40px",
              height: "40px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "19px",
                left: 0,
                width: "40px",
                height: "1px",
                background: "var(--border)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "19px",
                top: 0,
                width: "1px",
                height: "40px",
                background: "var(--border)",
              }}
            />
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
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "54px",
                fontWeight: 200,
                letterSpacing: "-0.03em",
                marginBottom: "8px",
                color: "var(--text)",
              }}
            >
              20+
            </div>
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--text-muted)",
              }}
            >
              Industrial Hubs Served
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "54px",
                fontWeight: 200,
                letterSpacing: "-0.03em",
                marginBottom: "8px",
                color: "var(--text)",
              }}
            >
              500+
            </div>
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--text-muted)",
              }}
            >
              Contracted Coach Builders
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "54px",
                fontWeight: 200,
                letterSpacing: "-0.03em",
                marginBottom: "8px",
                color: "var(--text)",
              }}
            >
              AIS-052
            </div>
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--text-muted)",
              }}
            >
              Regulatory Code Compliance
            </div>
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "54px",
                fontWeight: 200,
                letterSpacing: "-0.03em",
                marginBottom: "8px",
                color: "var(--text)",
              }}
            >
              0.8mm+
            </div>
            <div
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--text-muted)",
              }}
            >
              Aluminium Gauge Profiling
            </div>
          </div>
        </div>
      </section>

      {/* ===== CAPABILITY MATRIX ===== */}
      <section
        style={{
          padding: "120px 64px",
          borderTop: "1px solid var(--border)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
        className="section-responsive"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginBottom: "80px",
            alignItems: "end",
          }}
          className="section-header-responsive"
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "38px",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Engineered <strong style={{ fontWeight: 600 }}>Capability Matrix</strong>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: "440px",
              justifySelf: "end",
            }}
            className="section-desc-responsive"
          >
            Providing tier-one commercial vehicle builders with high-grade components structured natively to international manufacturing profiles.
          </p>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}
          className="grid-responsive"
        >
          {[
            {
              num: "// GRID SECTOR 01",
              title: "Aluminium Extrusions",
              body: "High structural performance 6063-T6 configuration elements. Custom profile die matrix operations built to manage high cabin stress thresholds cleanly.",
            },
            {
              num: "// GRID SECTOR 02",
              title: "Surface Composites",
              body: "Architectural grade 4mm ACM panels. Features an active palette of over twenty premium geometric patterns configured for executive cabin liners.",
            },
            {
              num: "// GRID SECTOR 03",
              title: "Heavy Deck Systems",
              body: "Pre-dimensioned, anti-slip chequered flooring modules engineered natively for immediate deployment across commercial fleet manufacturing beds.",
            },
          ].map((card) => (
            <div
              key={card.num}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "320px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "var(--text-muted)",
                  fontFamily: "monospace",
                }}
              >
                {card.num}
              </span>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    fontWeight: 500,
                    margin: "24px 0 12px 0",
                    letterSpacing: "-0.01em",
                    color: "var(--text)",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRODUCT CATEGORIES ===== */}
      <section
        style={{
          padding: "120px 64px",
          borderTop: "1px solid var(--border)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
        className="section-responsive"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginBottom: "80px",
            alignItems: "end",
          }}
          className="section-header-responsive"
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "38px",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Product <strong style={{ fontWeight: 600 }}>Categories</strong>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: "440px",
              justifySelf: "end",
            }}
            className="section-desc-responsive"
          >
            Complete range of materials for bus body construction, from structural aluminium to interior finishes.
          </p>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}
          className="grid-responsive"
        >
          {categories.map((cat) => (
            <div
              key={cat.slug}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                padding: "48px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "280px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              <div>
                <div style={{ color: "var(--text-muted)", marginBottom: "16px" }}>
                  {iconMap[cat.icon]}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    fontWeight: 500,
                    marginBottom: "12px",
                    letterSpacing: "-0.01em",
                    color: "var(--text)",
                  }}
                >
                  {cat.displayName}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--text-muted)",
                    lineHeight: 1.6,
                    fontWeight: 300,
                    marginBottom: "16px",
                  }}
                >
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
            </div>
          ))}
        </div>
      </section>

      {/* ===== PRIMARY MATERIAL LINEUP ===== */}
      <section
        style={{
          padding: "120px 64px",
          borderTop: "1px solid var(--border)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
        className="section-responsive"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginBottom: "80px",
            alignItems: "end",
          }}
          className="section-header-responsive"
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "38px",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Primary Material <strong style={{ fontWeight: 600 }}>Lineup</strong>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: "440px",
              justifySelf: "end",
            }}
            className="section-desc-responsive"
          >
            Fully authenticated, continuous production stock matrices configured for high-capacity freight forwarding across regional hubs.
          </p>
        </div>

        {/* Showcase Row 1 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 0,
            marginBottom: "48px",
            border: "1px solid var(--border)",
            background: "var(--card-bg)",
          }}
          className="showcase-responsive"
        >
          <div
            style={{
              background: "var(--bg-alt)",
              minHeight: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRight: "1px solid var(--border)",
            }}
            className="showcase-visual-responsive"
          >
            <div style={{ width: "40px", height: "40px", position: "relative" }}>
              <div style={{ position: "absolute", top: "19px", left: 0, width: "40px", height: "1px", background: "var(--border)" }} />
              <div style={{ position: "absolute", left: "19px", top: 0, width: "1px", height: "40px", background: "var(--border)" }} />
            </div>
          </div>
          <div
            style={{
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            className="showcase-details-responsive"
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                fontWeight: 500,
                marginBottom: "12px",
                color: "var(--text)",
              }}
            >
              Structural Windows Die Frame Profile
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                marginBottom: "24px",
                fontWeight: 300,
              }}
            >
              Hardened alloy structural framing configuration elements. Extruded with pristine micro-tolerances to withstand intense multi-axis dynamic vibration levels seamlessly.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <span
                style={{
                  border: "1px solid var(--border)",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                6063-T6 Structural
              </span>
              <span
                style={{
                  border: "1px solid var(--border)",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                Anodized Matt Finish
              </span>
            </div>
          </div>
        </div>

        {/* Showcase Row 2 */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 0,
            marginBottom: "48px",
            border: "1px solid var(--border)",
            background: "var(--card-bg)",
          }}
          className="showcase-responsive"
        >
          <div
            style={{
              background: "var(--bg-alt)",
              minHeight: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRight: "1px solid var(--border)",
            }}
            className="showcase-visual-responsive"
          >
            <div style={{ width: "40px", height: "40px", position: "relative" }}>
              <div style={{ position: "absolute", top: "19px", left: 0, width: "40px", height: "1px", background: "var(--border)" }} />
              <div style={{ position: "absolute", left: "19px", top: 0, width: "1px", height: "40px", background: "var(--border)" }} />
            </div>
          </div>
          <div
            style={{
              padding: "48px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
            className="showcase-details-responsive"
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                fontWeight: 500,
                marginBottom: "12px",
                color: "var(--text)",
              }}
            >
              Mineral-Core Patterned ACM Sheet Matrix
            </h3>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-muted)",
                lineHeight: 1.6,
                marginBottom: "24px",
                fontWeight: 300,
              }}
            >
              Premium architectural interior panels featuring engineered skin weather-barrier layers. Ensures no surface deformation over extreme thermal operational variants.
            </p>
            <div style={{ display: "flex", gap: "8px" }}>
              <span
                style={{
                  border: "1px solid var(--border)",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                4mm Architectural Grade
              </span>
              <span
                style={{
                  border: "1px solid var(--border)",
                  padding: "4px 12px",
                  fontSize: "11px",
                  fontFamily: "monospace",
                  color: "var(--text-muted)",
                  textTransform: "uppercase",
                }}
              >
                PVDF Sealed Skin
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ACP DESIGNS PREVIEW ===== */}
      <section
        style={{
          padding: "120px 64px",
          borderTop: "1px solid var(--border)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
        className="section-responsive"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginBottom: "80px",
            alignItems: "end",
          }}
          className="section-header-responsive"
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "38px",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
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
              }}
            >
              View All Designs
            </Link>
          </div>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}
          className="grid-4-responsive"
        >
          {featuredACP.map((design) => (
            <Link
              key={design.slug}
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
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
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
                <div style={{ width: "40px", height: "40px", position: "relative" }}>
                  <div style={{ position: "absolute", top: "19px", left: 0, width: "40px", height: "1px", background: "var(--border)" }} />
                  <div style={{ position: "absolute", left: "19px", top: 0, width: "1px", height: "40px", background: "var(--border)" }} />
                </div>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  fontWeight: 500,
                  marginBottom: "8px",
                  color: "var(--text)",
                }}
              >
                {design.designName}
              </h3>
              <p style={{ fontSize: "12px", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                {design.series}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== VEHICLE PLYWOOD PREVIEW ===== */}
      <section
        style={{
          padding: "120px 64px",
          borderTop: "1px solid var(--border)",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
        className="section-responsive"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginBottom: "80px",
            alignItems: "end",
          }}
          className="section-header-responsive"
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "38px",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Vehicle-Specific <strong style={{ fontWeight: 600 }}>Plywood</strong>
          </h2>
          <div style={{ justifySelf: "end" }}>
            <Link
              href="/vehiclePlywood"
              style={{
                color: "var(--text)",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                borderBottom: "1px solid var(--text)",
                paddingBottom: "4px",
              }}
            >
              View All Vehicles
            </Link>
          </div>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}
          className="grid-4-responsive"
        >
          {featuredVehicles.map((vehicle) => (
            <Link
              key={vehicle.slug}
              href={`/vehiclePlywood/${vehicle.slug}`}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
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
                <div style={{ width: "40px", height: "40px", position: "relative" }}>
                  <div style={{ position: "absolute", top: "19px", left: 0, width: "40px", height: "1px", background: "var(--border)" }} />
                  <div style={{ position: "absolute", left: "19px", top: 0, width: "1px", height: "40px", background: "var(--border)" }} />
                </div>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  fontWeight: 500,
                  marginBottom: "8px",
                  color: "var(--text)",
                }}
              >
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            marginBottom: "80px",
            alignItems: "end",
          }}
          className="section-header-responsive"
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "38px",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Supply Across <strong style={{ fontWeight: 600 }}>South India</strong>
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "var(--text-muted)",
              lineHeight: 1.6,
              maxWidth: "440px",
              justifySelf: "end",
            }}
            className="section-desc-responsive"
          >
            Fast delivery to major bus body building hubs.
          </p>
        </div>
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "32px" }}
          className="grid-responsive"
        >
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
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "20px",
                  fontWeight: 500,
                  marginBottom: "8px",
                  color: "var(--text)",
                }}
              >
                {city.name}
              </h3>
              <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>{city.state}</p>
            </Link>
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
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "38px",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "var(--text)",
            marginBottom: "24px",
          }}
        >
          Need a Quote for Your Bus Body Project?
        </h2>
        <p
          style={{
            fontSize: "15px",
            color: "var(--text-muted)",
            lineHeight: 1.6,
            maxWidth: "600px",
            margin: "0 auto 40px",
          }}
        >
          Get wholesale pricing on aluminium extrusions, ACP sheets, plywood, paints, sealants, and hardware.
        </p>
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
          onMouseEnter={(e) => { (e.target as HTMLElement).style.opacity = "0.9"; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.opacity = "1"; }}
        >
          Request a Quote
        </Link>
      </section>

      <style jsx>{`
        @media (max-width: 992px) {
          .hero-responsive {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 100px 24px 64px 24px !important;
          }
          .section-responsive {
            padding: 80px 24px !important;
          }
          .section-header-responsive {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .section-desc-responsive {
            justify-self: start !important;
          }
          .grid-responsive {
            grid-template-columns: 1fr !important;
          }
          .grid-4-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-responsive {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
          .showcase-responsive {
            grid-template-columns: 1fr !important;
          }
          .showcase-visual-responsive {
            border-right: none !important;
            border-bottom: 1px solid var(--border) !important;
          }
          .showcase-details-responsive {
            padding: 32px 24px !important;
          }
        }
        @media (max-width: 640px) {
          .grid-4-responsive {
            grid-template-columns: 1fr !important;
          }
          .stats-responsive {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
