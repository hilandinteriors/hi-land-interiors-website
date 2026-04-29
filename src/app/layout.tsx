import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hilandinteriors.ca"),
  title: "Flooring Winnipeg | #1 SPC Vinyl & LVP Store — Hi Land Interiors",
  description: "Winnipeg's largest in-stock flooring store. 100% waterproof SPC vinyl flooring engineered for Manitoba basements. 20+ colors ready for same-day pickup. Professional installation from $0.99/sq.ft. Visit our showroom at 50 Mandalay Drive.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Hi Land Interiors",
  },
  keywords: [
    "flooring winnipeg",
    "flooring store winnipeg",
    "vinyl flooring winnipeg",
    "spc vinyl winnipeg",
    "luxury vinyl plank winnipeg",
    "lvp flooring winnipeg",
    "waterproof flooring winnipeg",
    "basement flooring winnipeg",
    "flooring installation winnipeg",
    "cheap flooring winnipeg",
    "best flooring winnipeg",
    "flooring winnipeg showroom",
    "vinyl plank winnipeg",
    "spc flooring near me",
    "flooring store near me winnipeg",
    "wholesale flooring winnipeg",
    "flooring contractor winnipeg",
    "laminate flooring winnipeg",
    "hardwood alternative winnipeg",
    "pet proof flooring winnipeg",
    "flooring winnipeg manitoba",
    "commercial flooring winnipeg",
    "flooring winnipeg same day pickup",
    "flooring 50 mandalay drive winnipeg",
  ],
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Flooring Winnipeg | #1 SPC Vinyl & LVP Store — Hi Land Interiors",
    description: "Winnipeg's largest in-stock flooring store. 100% waterproof SPC vinyl for Manitoba basements. 20+ colors, same-day pickup. Installation from $0.99/sq.ft.",
    url: "https://www.hilandinteriors.ca",
    siteName: "Hi Land Interiors",
    images: [
      {
        url: "/images/hero_flooring_ultra_hd.png",
        width: 1200,
        height: 630,
        alt: "Hi Land Interiors — Flooring Store Winnipeg — Premium SPC Vinyl Showroom",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flooring Winnipeg | #1 SPC Vinyl & LVP Store",
    description: "Winnipeg's largest in-stock flooring store. 100% waterproof SPC vinyl. 20+ colors, same-day pickup. Installation from $0.99/sq.ft.",
    images: ["/images/hero_flooring_ultra_hd.png"],
  },
  alternates: {
    canonical: "https://www.hilandinteriors.ca",
  },
  icons: {
    apple: "/images/logo.png",
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
};

export const viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "FlooringStore",
    "name": "Hi Land Interiors",
    "alternateName": "Hi Land Interiors Winnipeg",
    "image": "https://www.hilandinteriors.ca/images/logo.png",
    "@id": "https://www.hilandinteriors.ca",
    "url": "https://www.hilandinteriors.ca",
    "telephone": "+12049520254",
    "priceRange": "$$",
    "description": "Winnipeg's largest in-stock flooring store specializing in 100% waterproof SPC vinyl flooring, luxury vinyl plank (LVP), and professional flooring installation. Over 20 colors ready for same-day pickup.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "50 Mandalay Drive",
      "addressLocality": "Winnipeg",
      "addressRegion": "MB",
      "postalCode": "R2X 2Z2",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.934336,
      "longitude": -97.168541
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Winnipeg",
        "sameAs": "https://en.wikipedia.org/wiki/Winnipeg"
      },
      {
        "@type": "State",
        "name": "Manitoba"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61570692601234",
      "https://www.instagram.com/hilandinteriors/",
      "https://www.tiktok.com/@hilandinteriors"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Flooring Products & Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "SPC Vinyl Flooring",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Pure SPC Vinyl Flooring",
                "description": "100% waterproof stone-polymer composite vinyl flooring with 20 mil wear layer. Engineered for Manitoba basements and extreme climate conditions.",
                "brand": { "@type": "Brand", "name": "Hi Land Interiors" },
                "material": "Stone Polymer Composite (SPC)",
                "category": "Flooring"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Flooring Installation",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Professional Flooring Installation Winnipeg",
                "description": "Professional flooring installation services across Winnipeg and surrounding Manitoba communities.",
                "areaServed": "Winnipeg, MB",
                "provider": { "@type": "LocalBusiness", "name": "Hi Land Interiors" }
              },
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "0.99",
                "priceCurrency": "CAD",
                "unitText": "sq. ft.",
                "priceType": "https://schema.org/MinimumAdvertisedPrice"
              }
            }
          ]
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Hi Land Interiors",
    "url": "https://www.hilandinteriors.ca",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.hilandinteriors.ca/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <Navbar />
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
