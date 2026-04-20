import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Hi Land Interiors | Wholesale SPC Vinyl & Basement-Ready Flooring Winnipeg",
  description: "Winnipeg's top-rated wholesale flooring supplier. 100% waterproof SPC vinyl specifically engineered for Manitoba basements. Professional installation starting at $0.99/sq. ft.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Hi Land Interiors",
  },
  keywords: ["flooring store winnipeg", "spc vinyl winnipeg", "luxury vinyl plank winnipeg", "lvp flooring winnipeg", "waterproof flooring winnipeg", "flooring installation winnipeg"],
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Hi Land Interiors | Best Vinyl Flooring Store & SPC Vinyl in Winnipeg",
    description: "Winnipeg's premium destination for Luxury Vinyl Plank (LVP) and SPC flooring. 100% waterproof and professionally installed. Visit our showroom.",
    url: "https://www.hilandinteriors.ca",
    siteName: "Hi Land Interiors",
    images: [
      {
        url: "/images/hero_flooring_light_1776535022100.png",
        width: 1200,
        height: 630,
        alt: "Hi Land Interiors Winnipeg Flooring Store",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.hilandinteriors.ca",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo.png",
  },
};

export const viewport = {
  themeColor: "#121212",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
