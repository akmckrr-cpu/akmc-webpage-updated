"use client";

import { useState } from "react";

const themes = [
  { id: "liquid-metal", label: "Liquid Metal", route: "/" },
  { id: "karur-blueprint", label: "Karur Blueprint", route: "/karur/aluminium-extrusion" },
  { id: "neon-forge", label: "Neon Forge", route: "/acp-designs/floral-blue" },
  { id: "tactile-material", label: "Tactile Material", route: "/products/bus-window-extrusion-profile" },
  { id: "circular-factory", label: "Circular Factory", route: "/quote" },
  { id: "apple-premium", label: "Apple Premium", route: "/premium" },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  // Only show in development
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg hover:bg-gray-800 transition-colors"
      >
        🎨 Themes
      </button>

      {isOpen && (
        <div className="absolute bottom-12 left-0 bg-white rounded-2xl shadow-2xl p-4 w-64 border border-gray-200">
          <div className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">Select Theme</div>
          <div className="space-y-2">
            {themes.map((theme) => (
              <a
                key={theme.id}
                href={theme.route}
                className="block px-3 py-2 rounded-lg text-sm hover:bg-gray-100 transition-colors"
              >
                <div className="font-medium text-gray-900">{theme.label}</div>
                <div className="text-xs text-gray-400">{theme.route}</div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
