import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Vinyl Flooring Winnipeg | SPC & LVP Flooring Store — Hi Land Interiors",
  description: "Best vinyl flooring in Winnipeg. Luxury Vinyl Plank (LVP) and SPC vinyl flooring at wholesale prices. 100% waterproof, pet-proof, and perfect for Manitoba basements. 20+ in-stock colors. Visit our showroom.",
  alternates: {
    canonical: "https://www.hilandinteriors.ca/vinyl-flooring-winnipeg",
  },
  openGraph: {
    title: "Vinyl Flooring Winnipeg | SPC & LVP Store — Hi Land Interiors",
    description: "Best vinyl flooring in Winnipeg at wholesale prices. 100% waterproof SPC vinyl for Manitoba basements. 20+ colors in stock.",
    url: "https://www.hilandinteriors.ca/vinyl-flooring-winnipeg",
  },
};

export default function VinylFlooringWinnipeg() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hilandinteriors.ca" },
      { "@type": "ListItem", "position": 2, "name": "Vinyl Flooring Winnipeg", "item": "https://www.hilandinteriors.ca/vinyl-flooring-winnipeg" }
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Hi Land Pure SPC Vinyl Flooring",
    "description": "100% waterproof SPC vinyl flooring with stone-polymer core, 20 mil wear layer, and pre-attached IXPE underpad. Engineered for Winnipeg basements and Manitoba climate conditions.",
    "brand": { "@type": "Brand", "name": "Hi Land Interiors" },
    "material": "Stone Polymer Composite (SPC)",
    "category": "Vinyl Flooring",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "CAD",
      "lowPrice": "1.99",
      "highPrice": "4.99",
      "offerCount": "20",
      "availability": "https://schema.org/InStock"
    },
    "additionalProperty": [
      { "@type": "PropertyValue", "name": "Wear Layer", "value": "20 mil" },
      { "@type": "PropertyValue", "name": "Core Type", "value": "Stone Polymer Composite" },
      { "@type": "PropertyValue", "name": "Waterproof Rating", "value": "100%" },
      { "@type": "PropertyValue", "name": "Warranty", "value": "30 Years Residential" },
      { "@type": "PropertyValue", "name": "Underpad", "value": "Pre-attached IXPE" },
      { "@type": "PropertyValue", "name": "Installation Method", "value": "Click-Lock (Floating)" }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      {/* Hero */}
      <section style={{
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        background: '#0a0a0a',
        overflow: 'hidden'
      }}>
        <Image
          src="/images/flooring_samples_1776535858904.png"
          alt="Vinyl flooring Winnipeg — SPC vinyl plank samples at Hi Land Interiors showroom"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.35 }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '6rem 2rem' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <ol style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
              <li><Link href="/" style={{ color: 'var(--accent-gold)' }}>Home</Link></li>
              <li>/</li>
              <li>Vinyl Flooring Winnipeg</li>
            </ol>
          </nav>
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.1,
            marginBottom: '1.5rem'
          }}>
            Vinyl Flooring in Winnipeg:<br/>
            <span style={{ color: 'var(--accent-gold)' }}>SPC, LVP & LVT Guide</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', maxWidth: '700px', lineHeight: 1.8 }}>
            Not all vinyl flooring is created equal. Learn the difference between SPC, LVP, and WPC — 
            and why Winnipeg&apos;s climate demands a stone-core solution.
          </p>
        </div>
      </section>

      {/* Article */}
      <article style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
            Understanding Vinyl Flooring Types
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            When shopping for <strong>vinyl flooring in Winnipeg</strong>, you&apos;ll encounter several types. 
            Understanding the differences is critical to making the right choice for Manitoba&apos;s unique conditions.
          </p>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '1rem', marginTop: '3rem' }}>
            SPC Vinyl Flooring (Stone Polymer Composite)
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '1rem' }}>
            <strong>SPC vinyl flooring</strong> is the premium tier of vinyl flooring. It features a rigid stone-polymer 
            core made from limestone powder and stabilizers. This makes it:
          </p>
          <ul style={{ fontSize: '1.1rem', lineHeight: 2, color: 'var(--text-secondary)', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li><strong>100% waterproof</strong> — the stone core cannot absorb moisture</li>
            <li><strong>Dimensionally stable</strong> — zero expansion/contraction in temperature extremes</li>
            <li><strong>Extremely durable</strong> — resists dents, impacts, and heavy furniture</li>
            <li><strong>Ideal for basements</strong> — the #1 recommended flooring for below-grade installation</li>
          </ul>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            At Hi Land Interiors, we exclusively carry SPC vinyl because it is the only vinyl flooring type 
            we trust for Winnipeg conditions. Our <strong>Pure SPC vinyl</strong> features a 20 mil wear layer, 
            pre-attached IXPE underpad, and is available in over 20 designer colors.
          </p>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '1rem', marginTop: '3rem' }}>
            LVP — Luxury Vinyl Plank
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            <strong>Luxury Vinyl Plank (LVP)</strong> is a broad category that includes both SPC and WPC vinyl 
            designed to look like real hardwood planks. When Winnipeg homeowners search for &quot;LVP flooring,&quot; 
            they&apos;re typically looking for the plank format — which is exactly what we carry. Every Hi Land 
            plank features realistic wood-grain textures with registered embossing for an authentic look and feel.
          </p>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '1rem', marginTop: '3rem' }}>
            WPC vs. SPC: Which Is Better for Winnipeg?
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            WPC (Wood Polymer Composite) vinyl has a foamed core that is softer underfoot but less dense than SPC. 
            While WPC offers good comfort, its foamed core makes it more susceptible to denting and less stable in 
            extreme temperatures. For <strong>Winnipeg basements</strong> and homes with large pets, 
            <strong> SPC is the superior choice</strong> due to its rigid, stone-based construction.
          </p>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '1rem', marginTop: '3rem' }}>
            Why Buy Vinyl Flooring From Hi Land Interiors?
          </h3>
          <ul style={{ fontSize: '1.1rem', lineHeight: 2, color: 'var(--text-secondary)', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li><strong>Wholesale pricing</strong> — skip the retail markup, buy direct</li>
            <li><strong>20+ colors in stock</strong> — no 6-week lead times</li>
            <li><strong>Same-day pickup</strong> — drive to 50 Mandalay Drive and load up</li>
            <li><strong>Professional installation</strong> — from $0.99/sq.ft. across Winnipeg</li>
            <li><strong>30-year residential warranty</strong> — guaranteed durability</li>
            <li><strong>Contractor pricing</strong> — volume discounts for builders and developers</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '1rem', marginTop: '3rem' }}>
            Best Vinyl Flooring for Winnipeg Basements
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Manitoba basements face unique challenges: potential flooding from spring thaw, high humidity, 
            and concrete slab moisture. Traditional flooring fails in these conditions. Our SPC vinyl flooring 
            is the <strong>best basement flooring for Winnipeg homes</strong> because its inorganic stone core 
            cannot rot, swell, or support mold growth — even if submerged in standing water.
          </p>

          {/* CTA */}
          <div style={{
            marginTop: '4rem',
            padding: '3rem',
            background: '#1a1a1a',
            textAlign: 'center',
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>
              See Our Full Vinyl Flooring Collection
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Visit our showroom or get a free quote. Over 20 designer colors in stock today.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/quote" className="btn-primary">Get a Free Quote</Link>
              <Link href="/#products" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                View In-Stock Colors
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
