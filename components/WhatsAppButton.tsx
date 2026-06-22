"use client";

import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/seo-utils";

export function WhatsAppButton() {
  return (
    <a
      href={generateWhatsAppLink("Hi, I am interested in bus body building materials. Can you help me with pricing and availability?")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
