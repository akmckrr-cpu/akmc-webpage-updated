import type { Product, BusBodyMaterial, ACPCatalogItem, VehiclePlywoodItem, LocationPage } from "@/types";
import type { WithContext, Product as SchemaProduct, FAQPage, LocalBusiness, BreadcrumbList } from "schema-dts";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://akmc.in";
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919876543210";

export function generateProductSchema(product: Product): WithContext<SchemaProduct> {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.images.map((img) => `${SITE_URL}${img}`),
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      availability: product.inStock
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      lowPrice: Math.min(...product.variants.map((v) => v.price || 0)),
      highPrice: Math.max(...product.variants.map((v) => v.price || 0)),
      offerCount: product.variants.length,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "127",
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]): WithContext<FAQPage> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema(): WithContext<LocalBusiness> {
  return {
    "@context": "https://schema.org",
    "@type": "WholesaleStore",
    name: "A Karur Metal Co.",
    alternateName: "AKMC",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/images/storefront.jpg`,
    description: "Leading bus body building materials supplier in Karur, Tamil Nadu. Aluminium extrusions, ACP sheets, chequered plywood, paints, sealants, and hardware for bus body construction.",
    telephone: "+91-98765-43210",
    email: "info@akmc.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123/45, Bus Body Materials Market",
      addressLocality: "Karur",
      addressRegion: "Tamil Nadu",
      postalCode: "639001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "10.9601",
      longitude: "78.0766",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    priceRange: "₹₹",
    areaServed: [
      { "@type": "City", name: "Karur" },
      { "@type": "City", name: "Coimbatore" },
      { "@type": "City", name: "Salem" },
      { "@type": "City", name: "Madurai" },
      { "@type": "City", name: "Chennai" },
      { "@type": "City", name: "Bangalore" },
      { "@type": "City", name: "Kochi" },
    ],
    sameAs: [
      "https://wa.me/919876543210",
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]): WithContext<BreadcrumbList> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateLocationPageSchema(page: LocationPage): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${page.categoryDisplay} Supplier in ${page.city}`,
    provider: {
      "@type": "WholesaleStore",
      name: "A Karur Metal Co.",
      address: {
        "@type": "PostalAddress",
        addressLocality: page.city,
        addressRegion: page.state,
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "City",
      name: page.city,
    },
    description: page.description,
    serviceType: page.categoryDisplay,
  };
}

export function generateWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP}`;
  if (message) {
    return `${base}?text=${encodeURIComponent(message)}`;
  }
  return base;
}

export function generateCallLink(): string {
  return `tel:+91-98765-43210`;
}
