"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "919443366538";
  const message = "Hi AKMC, I need a quote for bus body materials.";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 50,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#25D366",
        color: "#fff",
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
    >
      <MessageCircle size={28} />
    </a>
  );
}
