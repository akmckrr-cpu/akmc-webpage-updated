import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "./themes.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Script from "next/script";
import { generateLocalBusinessSchema } from "@/lib/seo-utils";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: {
    default: "A Karur Metal Co. | Bus Body Building Materials Supplier",
    template: "%s | A Karur Metal Co.",
  },
  description:
    "Leading bus body building materials supplier in Karur, Tamil Nadu. Aluminium extrusions, ACP sheets, chequered plywood, paints, sealants, and hardware. Supply across Tamil Nadu, Kerala & Karnataka.",
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
    siteName: "A Karur Metal Co.",
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
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="theme-architectural-minimal">
        <ThemeProvider>
          <Script
            id="local-business-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <ThemeSwitcher />
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
