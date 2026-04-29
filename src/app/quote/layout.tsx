import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Flooring Quote | Hi Land Interiors Winnipeg",
  description: "Get a free, transparent wholesale quote on premium SPC Vinyl flooring and professional installation in Winnipeg. Quick response guaranteed.",
  alternates: {
    canonical: "https://www.hilandinteriors.ca/quote",
  },
  openGraph: {
    title: "Request a Flooring Quote | Hi Land Interiors Winnipeg",
    description: "Get a free, transparent wholesale quote on premium SPC Vinyl flooring and professional installation in Winnipeg.",
    url: "https://www.hilandinteriors.ca/quote",
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
