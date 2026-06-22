"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Plus, Trash2, MessageCircle, Send } from "lucide-react";
import toast from "react-hot-toast";
import Link from "next/link";

interface QuoteItem {
  productName: string;
  variant: string;
  quantity: number;
  unit: string;
  notes: string;
}

function QuoteForm() {
  const searchParams = useSearchParams();
  const prefillProduct = searchParams.get("product");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [items, setItems] = useState<QuoteItem[]>(
    prefillProduct
      ? [{ productName: prefillProduct, variant: "", quantity: 1, unit: "pcs", notes: "" }]
      : [{ productName: "", variant: "", quantity: 1, unit: "pcs", notes: "" }]
  );

  const addItem = () => {
    setItems([...items, { productName: "", variant: "", quantity: 1, unit: "pcs", notes: "" }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: keyof QuoteItem, value: string | number) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !phone || !city || items.length === 0) {
      toast.error("Please fill in all required fields");
      return;
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, company, city, items, message }),
      });

      if (res.ok) {
        toast.success("Quote request submitted! We'll contact you shortly.");
        setName(""); setPhone(""); setEmail(""); setCompany(""); setCity(""); setMessage("");
        setItems([{ productName: "", variant: "", quantity: 1, unit: "pcs", notes: "" }]);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  };

  const generateWhatsAppMessage = () => {
    const itemList = items
      .filter(i => i.productName)
      .map((i, idx) => `${idx + 1}. ${i.productName}${i.variant ? ` (${i.variant})` : ""} - ${i.quantity} ${i.unit}`)
      .join("\n");
    
    return `Hi AKMC,\n\nI need a quote for the following items:\n\nName: ${name}\nCompany: ${company || "N/A"}\nCity: ${city}\nPhone: ${phone}\n\nItems:\n${itemList || "Please contact me with your catalog."}\n\n${message ? `Additional Notes: ${message}` : ""}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-metal-900 mb-2">Request Wholesale Quote</h1>
      <p className="text-metal-500 mb-8">Add products you need and we'll send you the best wholesale pricing</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact Info */}
        <div className="bg-white rounded-2xl border border-metal-200 p-6">
          <h2 className="text-lg font-semibold text-metal-900 mb-4">Your Details</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-metal-700 mb-1">Name *</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-metal-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-metal-700 mb-1">Phone *</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-metal-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-metal-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-metal-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                placeholder="you@company.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-metal-700 mb-1">Company</label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-metal-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                placeholder="Your company name"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-metal-700 mb-1">City *</label>
              <input
                type="text"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-metal-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
                placeholder="Karur, Coimbatore, etc."
              />
            </div>
          </div>
        </div>

        {/* Items */}
        <div className="bg-white rounded-2xl border border-metal-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-metal-900">Items Required</h2>
            <button
              type="button"
              onClick={addItem}
              className="flex items-center gap-1 text-sm text-primary-600 font-medium hover:text-primary-700"
            >
              <Plus className="w-4 h-4" /> Add Item
            </button>
          </div>

          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={index} className="p-4 bg-metal-50 rounded-xl border border-metal-200">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-metal-500 mb-1">Product Name</label>
                    <input
                      type="text"
                      value={item.productName}
                      onChange={(e) => updateItem(index, "productName", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-metal-300 text-sm focus:border-primary-500 outline-none"
                      placeholder="e.g., Bus Window Extrusion"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-metal-500 mb-1">Variant</label>
                    <input
                      type="text"
                      value={item.variant}
                      onChange={(e) => updateItem(index, "variant", e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-metal-300 text-sm focus:border-primary-500 outline-none"
                      placeholder="e.g., 6063-T6"
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <label className="block text-xs font-medium text-metal-500 mb-1">Qty</label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateItem(index, "quantity", parseInt(e.target.value) || 1)}
                        className="w-full px-3 py-2 rounded-lg border border-metal-300 text-sm focus:border-primary-500 outline-none"
                      />
                    </div>
                    <div className="w-20">
                      <label className="block text-xs font-medium text-metal-500 mb-1">Unit</label>
                      <select
                        value={item.unit}
                        onChange={(e) => updateItem(index, "unit", e.target.value)}
                        className="w-full px-3 py-2 rounded-lg border border-metal-300 text-sm focus:border-primary-500 outline-none"
                      >
                        <option value="pcs">pcs</option>
                        <option value="meters">m</option>
                        <option value="sheets">sheets</option>
                        <option value="kg">kg</option>
                        <option value="liters">L</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <input
                    type="text"
                    value={item.notes}
                    onChange={(e) => updateItem(index, "notes", e.target.value)}
                    className="flex-1 px-3 py-2 rounded-lg border border-metal-300 text-sm focus:border-primary-500 outline-none mr-2"
                    placeholder="Any specific requirements..."
                  />
                  {items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="bg-white rounded-2xl border border-metal-200 p-6">
          <label className="block text-sm font-medium text-metal-700 mb-1">Additional Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className="w-full px-4 py-2.5 rounded-lg border border-metal-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none resize-none"
            placeholder="Any other requirements or questions..."
          />
        </div>

        {/* Submit */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-primary-700 text-white rounded-xl font-bold hover:bg-primary-800 transition-colors"
          >
            <Send className="w-5 h-5" />
            Submit Quote Request
          </button>
          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent(generateWhatsAppMessage())}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl font-bold hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Send via WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense fallback={
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-metal-200 rounded w-1/3"></div>
          <div className="h-4 bg-metal-200 rounded w-1/2"></div>
          <div className="h-32 bg-metal-200 rounded"></div>
          <div className="h-32 bg-metal-200 rounded"></div>
        </div>
      </div>
    }>
      <QuoteForm />
    </Suspense>
  );
}