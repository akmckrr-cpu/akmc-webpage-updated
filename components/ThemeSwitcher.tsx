"use client";

import { useState, useEffect } from "react";

const themes = [
  { id: "theme-architectural-minimal", name: "Architectural Minimal", colors: ["#FFFFFF", "#002D62"] },
  { id: "theme-quiet-luxury", name: "Quiet Luxury", colors: ["#F7F5F0", "#002D62"] },
  { id: "theme-tech-brutalist", name: "Tech Brutalist", colors: ["#0B0F19", "#FFFFFF"] },
  { id: "theme-corporate-elite", name: "Corporate Elite", colors: ["#F4F6F9", "#002D62"] },
  { id: "theme-raw-eco", name: "Raw Eco Matrix", colors: ["#F9F9F6", "#1C2B24"] },
];

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("theme-architectural-minimal");

  useEffect(() => {
    const saved = localStorage.getItem("akmc-premium-theme");
    if (saved) {
      setActiveTheme(saved);
      document.body.className = "";
      document.body.classList.add(saved);
    }
  }, []);

  const changeTheme = (themeId: string) => {
    setActiveTheme(themeId);
    document.body.className = "";
    document.body.classList.add(themeId);
    localStorage.setItem("akmc-premium-theme", themeId);
    setOpen(false);
  };

  const activeName = themes.find((t) => t.id === activeTheme)?.name || "Architectural Minimal";

  return (
    <div className="theme-switcher">
      <div className={`theme-switcher-dropdown ${open ? "open" : ""}`}>
        <div className="theme-switcher-header">Select Brand Tone</div>
        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`theme-option ${activeTheme === theme.id ? "active" : ""}`}
            onClick={() => changeTheme(theme.id)}
          >
            <span>{theme.name}</span>
            <div className="swatch-box">
              {theme.colors.map((color, i) => (
                <div key={i} className="swatch-dot" style={{ background: color }} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <button className="theme-switcher-trigger" onClick={() => setOpen(!open)}>
        <span>Tone:</span>
        <span style={{ color: "#FFF" }}>{activeName}</span>
      </button>
    </div>
  );
}
