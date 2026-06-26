"use client";

import { ReactNode, useEffect, useState } from "react";

const THEME_CLASSES: Record<string, string> = {
  "architectural-minimal": "theme-architectural-minimal",
  "quiet-luxury": "theme-quiet-luxury",
  "tech-brutalist": "theme-tech-brutalist",
  "corporate-elite": "theme-corporate-elite",
  "raw-eco": "theme-raw-eco",
};

const THEME_LABELS: Record<string, string> = {
  "architectural-minimal": "Architectural Minimal",
  "quiet-luxury": "Quiet Luxury",
  "tech-brutalist": "Tech Brutalist",
  "corporate-elite": "Corporate Elite",
  "raw-eco": "Raw Eco Matrix",
};

const THEME_SWATCHES: Record<string, string[]> = {
  "architectural-minimal": ["#FFFFFF", "#002D62"],
  "quiet-luxury": ["#F7F5F0", "#002D62"],
  "tech-brutalist": ["#0B0F19", "#FFFFFF"],
  "corporate-elite": ["#F4F6F9", "#002D62"],
  "raw-eco": ["#F9F9F6", "#1C2B24"],
};

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<string>("architectural-minimal");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("akmc-theme");
    if (saved && THEME_CLASSES[saved]) setActiveTheme(saved);
  }, []);

  useEffect(() => {
    const body = document.body;
    Object.values(THEME_CLASSES).forEach((cls) => body.classList.remove(cls));
    body.classList.add(THEME_CLASSES[activeTheme]);
  }, [activeTheme]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!(e.target as HTMLElement).closest(".theme-switcher")) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const changeTheme = (themeKey: string) => {
    setActiveTheme(themeKey);
    localStorage.setItem("akmc-theme", themeKey);
    setDropdownOpen(false);
  };

  return (
    <div className="preview-container">
      {children}
      <div className="theme-switcher">
        <div className={`theme-switcher-dropdown ${dropdownOpen ? "open" : ""}`}>
          <div className="theme-switcher-header">Select Brand Tone</div>
          {Object.entries(THEME_LABELS).map(([key, label]) => (
            <div key={key} className={`theme-option ${activeTheme === key ? "active" : ""}`} onClick={() => changeTheme(key)}>
              <span>{label}</span>
              <div className="swatch-box">
                {THEME_SWATCHES[key].map((color, i) => (
                  <div key={i} className="swatch-dot" style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="theme-switcher-trigger" onClick={() => setDropdownOpen(!dropdownOpen)}>
          <span>Tone:</span>
          <span style={{ color: "#FFF" }}>{THEME_LABELS[activeTheme]}</span>
        </button>
      </div>
    </div>
  );
}
