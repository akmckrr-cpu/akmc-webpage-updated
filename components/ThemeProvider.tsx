"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// Theme detection logic
function getThemeForPath(pathname: string): string {
  // Theme 1: Liquid Metal - Homepage
  if (pathname === "/") {
    return "liquid-metal";
  }

  // Theme 2: Karur Blueprint - Location pages & About
  // Matches /city-name/category-name pattern
  const locationPattern = /^\/[a-z-]+\/[a-z-]+$/;
  if (locationPattern.test(pathname) || pathname === "/about") {
    return "karur-blueprint";
  }

  // Theme 3: Neon Forge - ACP Design pages
  if (pathname.startsWith("/acp-designs")) {
    return "neon-forge";
  }

  // Theme 4: Tactile Material - Product detail pages
  if (
    pathname.startsWith("/products/") ||
    pathname.startsWith("/vehicle-plywood/") ||
    pathname.startsWith("/bus-body-materials/")
  ) {
    return "tactile-material";
  }

  // Theme 5: Circular Factory - Quote & Sustainability
  if (pathname === "/quote" || pathname === "/sustainability") {
    return "circular-factory";
  }

  // Theme 6: Apple Premium - Enterprise/Premium pages
  if (pathname.startsWith("/premium") || pathname === "/enterprise") {
    return "apple-premium";
  }

  // Default: No theme override (uses base styles)
  return "default";
}

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const pathname = usePathname();
  const theme = getThemeForPath(pathname);

  // Map theme names to CSS class names
  const themeClassMap: Record<string, string> = {
    "liquid-metal": "theme-liquid-metal",
    "karur-blueprint": "theme-karur-blueprint",
    "neon-forge": "theme-neon-forge",
    "tactile-material": "theme-tactile-material",
    "circular-factory": "theme-circular-factory",
    "apple-premium": "theme-apple-premium",
    "default": "",
  };

  const themeClass = themeClassMap[theme] || "";

  return (
    <div className={themeClass} data-theme={theme}>
      {children}
    </div>
  );
}
