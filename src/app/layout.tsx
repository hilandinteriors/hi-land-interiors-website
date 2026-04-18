import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Hi Land Interiors | Premium Vinyl Flooring in Winnipeg",
  description: "Winnipeg's largest inventory of 100% Pure SPC Vinyl Flooring. 100% waterproof, highly durable, and professionally installed starting at $1/sq. ft.",
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
