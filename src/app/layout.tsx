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
        url: "/images/hero-bg.jpg", // Using the hero image as default OG image
        width: 1200,
        height: 630,
        alt: "Hi Land Interiors Showroom",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
