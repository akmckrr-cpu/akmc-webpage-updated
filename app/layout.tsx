import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./themes.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";
import { generateLocalBusinessSchema } from "@/lib/seo-utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "AKMC — Premium Bus Body Materials | Karur, Tamil Nadu",
    template: "%s | AKMC",
  },
  description:
    "A Karur Metal Co. — Leading supplier of aluminium extrusions, ACP sheets, chequered plywood, paints, sealants & hardware for bus body construction across South India.",
  keywords: [
    "bus body materials",
    "aluminium extrusion",
    "ACP sheet",
    "chequered plywood",
    "bus body hardware",
    "Karur",
    "Tamil Nadu",
    "bus building",
    "aluminium sheet",
    "industrial paint",
    "sealant",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AKMC",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className={inter.variable}>
      <body style={{ background: "#0A0A0A", color: "#fff", margin: 0, padding: 0, fontFamily: "'Inter', -apple-system, sans-serif" }}>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
