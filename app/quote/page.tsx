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
      ? [
          {
            productName: prefillProduct,
            variant: "",
            quantity: 1,
            unit: "pcs",
            notes: "",
          },
        ]
      : [
          {
            productName: "",
            variant: "",
            quantity: 1,
            unit: "pcs",
            notes: "",
          },
        ]
  );

  const addItem = () => {
    setItems([
      ...items,
      { productName: "", variant: "", quantity: 1, unit: "pcs", notes: "" },
    ]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (
    index: number,
    field: keyof QuoteItem,
    value: string | number
  ) => {
    const newItems = [...items];
    newItems[index] = { ...newItems[index], [field]: value };
    setItems(newItems);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !city.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (items.length === 0) {
      toast.error("Please add at least one item");
      return;
    }

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          email,
          company,
          city,
          message,
          items,
        }),
      });

      if (response.ok) {
        toast.success("Quote request submitted successfully!");
        setName("");
        setPhone("");
        setEmail("");
        setCompany("");
        setCity("");
        setMessage("");
        setItems([
          { productName: "", variant: "", quantity: 1, unit: "pcs", notes: "" },
        ]);
      } else {
        toast.error("Failed to submit quote. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <div className="akmc-section">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--text-muted)" }}
          >
            RFQ System
          </div>
          <h1
            className="text-4xl lg:text-5xl font-light tracking-tight mb-4"
            style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
          >
            Request a <strong className="font-semibold">Quote</strong>
          </h1>
          <p
            className="text-base font-light max-w-lg mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            Get wholesale pricing on bus body building materials. Add multiple
            products to your enquiry.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact Info */}
          <div className="card p-8 lg:p-12">
            <h2
              className="text-xl font-medium tracking-tight mb-8"
              style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
            >
              Contact Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-xs uppercase tracking-wider mb-2 font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent outline-none transition-colors"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-xs uppercase tracking-wider mb-2 font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  Phone *
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent outline-none transition-colors"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              <div>
                <label
                  className="block text-xs uppercase tracking-wider mb-2 font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent outline-none transition-colors"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label
                  className="block text-xs uppercase tracking-wider mb-2 font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  Company
                </label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent outline-none transition-colors"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  placeholder="Your company name"
                />
              </div>
              <div className="md:col-span-2">
                <label
                  className="block text-xs uppercase tracking-wider mb-2 font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  City *
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 bg-transparent outline-none transition-colors"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  placeholder="Karur, Coimbatore, etc."
                  required
                />
              </div>
              <div className="md:col-span-2">
                <label
                  className="block text-xs uppercase tracking-wider mb-2 font-medium"
                  style={{ color: "var(--text-muted)" }}
                >
                  Additional Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-transparent outline-none transition-colors resize-none"
                  style={{
                    border: "1px solid var(--border)",
                    color: "var(--text)",
                  }}
                  placeholder="Any specific requirements, delivery timeline, etc."
                />
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="card p-8 lg:p-12">
            <div className="flex items-center justify-between mb-8">
              <h2
                className="text-xl font-medium tracking-tight"
                style={{ fontFamily: "var(--font-display)", color: "var(--text)" }}
              >
                Product Items
              </h2>
              <button
                type="button"
                onClick={addItem}
                className="btn-secondary text-xs px-4 py-2 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Item
              </button>
            </div>

            <div className="space-y-6">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="p-6 relative"
                  style={{ border: "1px solid var(--border)" }}
                >
                  {items.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeItem(index)}
                      className="absolute top-4 right-4 p-1 hover:opacity-70 transition-opacity"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                  <div className="grid md:grid-cols-12 gap-4">
                    <div className="md:col-span-4">
                      <label
                        className="block text-xs uppercase tracking-wider mb-2 font-medium"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Product Name *
                      </label>
                      <input
                        type="text"
                        value={item.productName}
                        onChange={(e) =>
                          updateItem(index, "productName", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-transparent outline-none transition-colors"
                        style={{
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                        }}
                        placeholder="e.g., Aluminium Extrusion"
                        required
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label
                        className="block text-xs uppercase tracking-wider mb-2 font-medium"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Variant / Spec
                      </label>
                      <input
                        type="text"
                        value={item.variant}
                        onChange={(e) =>
                          updateItem(index, "variant", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-transparent outline-none transition-colors"
                        style={{
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                        }}
                        placeholder="e.g., 6063-T6"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label
                        className="block text-xs uppercase tracking-wider mb-2 font-medium"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Qty *
                      </label>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateItem(
                            index,
                            "quantity",
                            parseInt(e.target.value) || 1
                          )
                        }
                        className="w-full px-4 py-3 bg-transparent outline-none transition-colors"
                        style={{
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                        }}
                        required
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label
                        className="block text-xs uppercase tracking-wider mb-2 font-medium"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Unit
                      </label>
                      <select
                        value={item.unit}
                        onChange={(e) =>
                          updateItem(index, "unit", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-transparent outline-none transition-colors"
                        style={{
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                        }}
                      >
                        <option value="pcs">Pieces</option>
                        <option value="kg">Kilograms</option>
                        <option value="sheets">Sheets</option>
                        <option value="meters">Meters</option>
                        <option value="rolls">Rolls</option>
                        <option value="boxes">Boxes</option>
                      </select>
                    </div>
                    <div className="md:col-span-12">
                      <label
                        className="block text-xs uppercase tracking-wider mb-2 font-medium"
                        style={{ color: "var(--text-muted)" }}
                      >
                        Notes
                      </label>
                      <input
                        type="text"
                        value={item.notes}
                        onChange={(e) =>
                          updateItem(index, "notes", e.target.value)
                        }
                        className="w-full px-4 py-3 bg-transparent outline-none transition-colors"
                        style={{
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                        }}
                        placeholder="Any specific requirements for this item"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="submit"
              className="btn-primary flex items-center gap-2 text-sm"
            >
              <Send className="w-4 h-4" />
              Submit Quote Request
            </button>
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Enquire on WhatsApp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense
      fallback={
        <div className="akmc-section text-center">
          <div
            className="text-sm uppercase tracking-widest"
            style={{ color: "var(--text-muted)" }}
          >
            Loading...
          </div>
        </div>
      }
    >
      <QuoteForm />
    </Suspense>
  );
}
