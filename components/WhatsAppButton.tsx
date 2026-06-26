"use client";

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/919876543210" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110 transition-transform"
      style={{ boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' }}
    >
      💬
    </a>
  );
}
