import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Hi Land Interiors | Premium Vinyl Flooring in Winnipeg",
  description: "Winnipeg's largest inventory of 100% Pure SPC Vinyl Flooring. 100% waterproof, highly durable, and professionally installed starting at $0.99/sq. ft.",
  openGraph: {
    title: "Hi Land Interiors | Premium Vinyl Flooring in Winnipeg",
    description: "Winnipeg's largest inventory of 100% Pure SPC Vinyl Flooring. 100% waterproof, highly durable, and professionally installed starting at $0.99/sq. ft.",
    url: "https://www.hilandinteriors.ca",
    siteName: "Hi Land Interiors",
    images: [
      {
        url: "/images/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Hi Land Interiors Showroom",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.hilandinteriors.ca",
  },
};

import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FlooringBusiness",
    "name": "Hi Land Interiors",
    "image": "https://www.hilandinteriors.ca/images/logo.png",
    "@id": "https://www.hilandinteriors.ca",
    "url": "https://www.hilandinteriors.ca",
    "telephone": "+12049520254",
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
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61570692601234",
      "https://www.instagram.com/hilandinteriors/",
      "https://www.tiktok.com/@hilandinteriors"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
