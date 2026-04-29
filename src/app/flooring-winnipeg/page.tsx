import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Flooring Winnipeg | Best Flooring Store Near You — Hi Land Interiors",
  description: "Looking for flooring in Winnipeg? Hi Land Interiors is Winnipeg's largest in-stock flooring store. 100% waterproof SPC vinyl, luxury vinyl plank, and professional installation from $0.99/sq.ft. Visit our showroom at 50 Mandalay Drive.",
  alternates: {
    canonical: "https://www.hilandinteriors.ca/flooring-winnipeg",
  },
  openGraph: {
    title: "Flooring Winnipeg | Best Flooring Store Near You — Hi Land Interiors",
    description: "Winnipeg's largest in-stock flooring store. 100% waterproof SPC vinyl for Manitoba basements. 20+ colors ready for same-day pickup.",
    url: "https://www.hilandinteriors.ca/flooring-winnipeg",
  },
};

export default function FlooringWinnipeg() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.hilandinteriors.ca" },
      { "@type": "ListItem", "position": 2, "name": "Flooring Winnipeg", "item": "https://www.hilandinteriors.ca/flooring-winnipeg" }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        background: '#0a0a0a',
        overflow: 'hidden'
      }}>
        <Image
          src="/images/hero_flooring_ultra_hd.png"
          alt="Flooring store Winnipeg — Hi Land Interiors showroom featuring premium SPC vinyl flooring"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', opacity: 0.4 }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '6rem 2rem' }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: '2rem' }}>
            <ol style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
              <li><Link href="/" style={{ color: 'var(--accent-gold)' }}>Home</Link></li>
              <li>/</li>
              <li>Flooring Winnipeg</li>
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
            Flooring in Winnipeg:<br/>
            <span style={{ color: 'var(--accent-gold)' }}>Your Complete Guide</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', maxWidth: '700px', lineHeight: 1.8 }}>
            Finding the right flooring store in Winnipeg means finding a supplier who understands Manitoba&apos;s 
            unique climate challenges. Hi Land Interiors is Winnipeg&apos;s dedicated SPC vinyl flooring specialist.
          </p>
        </div>
      </section>

      {/* Main Content — SEO-rich article */}
      <article style={{ padding: '5rem 0', background: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
            Why Winnipeg Homeowners Are Choosing SPC Vinyl Flooring
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Winnipeg&apos;s extreme climate — from -40°C winters to humid summers — makes traditional flooring like 
            hardwood and laminate a risky investment. Wood warps, laminate swells, and carpet traps moisture. That&apos;s 
            why <strong>SPC vinyl flooring</strong> has become the #1 choice for Winnipeg homes and basements.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            At <strong>Hi Land Interiors</strong>, we specialize exclusively in premium SPC (Stone Polymer Composite) vinyl 
            flooring. Unlike big box stores that carry everything, we focus on one thing: giving Winnipeg the best 
            waterproof flooring solution at wholesale prices.
          </p>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '1rem', marginTop: '3rem' }}>
            What Makes Our Flooring Perfect for Winnipeg?
          </h3>
          <ul style={{ fontSize: '1.1rem', lineHeight: 2, color: 'var(--text-secondary)', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
            <li><strong>100% Waterproof Stone Core</strong> — Will never swell, warp, or grow mold, even in a flooded Winnipeg basement</li>
            <li><strong>Zero Thermal Expansion</strong> — Maintains dimensional stability from -40°C to +35°C Manitoba temperature swings</li>
            <li><strong>20 Mil Commercial Wear Layer</strong> — Resists scratches from pets, kids, and heavy furniture</li>
            <li><strong>Click-Lock Installation</strong> — No glue or nails required, reducing installation cost and time</li>
            <li><strong>Built-In Underpad</strong> — Pre-attached IXPE underlay for sound reduction and thermal comfort</li>
          </ul>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '1rem', marginTop: '3rem' }}>
            Flooring Installation in Winnipeg — Starting at $0.99/sq. ft.
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            We provide professional <strong>flooring installation across Winnipeg</strong> and surrounding Manitoba 
            communities including Bridgwater, Linden Woods, Sage Creek, River Heights, Tuxedo, Charleswood, 
            St. Vital, Transcona, and Seven Oaks. Our vetted installation network delivers fast turnaround 
            times and guaranteed quality workmanship.
          </p>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '1rem', marginTop: '3rem' }}>
            Visit Our Winnipeg Flooring Showroom
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            Our showroom and warehouse is located at <strong>50 Mandalay Drive, Winnipeg, MB R2X 2Z2</strong>. 
            We carry over <strong>20 in-stock colors</strong> ready for same-day pickup — no 6-week wait times 
            like other Winnipeg flooring stores. Whether you&apos;re a homeowner renovating your basement or a 
            contractor outfitting a multi-unit development, we have the inventory and pricing to serve you.
          </p>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '1rem', marginTop: '3rem' }}>
            Winnipeg Flooring: SPC Vinyl vs. Laminate vs. Hardwood
          </h3>
          <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
              <thead>
                <tr style={{ background: '#1a1a1a', color: 'white' }}>
                  <th style={{ padding: '1rem', textAlign: 'left' }}>Feature</th>
                  <th style={{ padding: '1rem', textAlign: 'center', background: 'var(--accent-gold)', color: '#1a1a1a' }}>Hi Land SPC Vinyl</th>
                  <th style={{ padding: '1rem', textAlign: 'center' }}>Laminate</th>
                  <th style={{ padding: '1rem', textAlign: 'center' }}>Hardwood</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Waterproof", "✅ 100%", "❌ Swells", "❌ Warps"],
                  ["Winnipeg Basements", "✅ Recommended", "❌ Not safe", "❌ Not safe"],
                  ["Pet Scratch Proof", "✅ 20 mil layer", "⚠️ Chips easily", "❌ Scratches"],
                  ["Temperature Stable", "✅ Zero expansion", "❌ Gaps in winter", "❌ Seasonal movement"],
                  ["Installation Cost", "✅ From $0.99/sqft", "$$", "$$$"],
                  ["Lifespan", "30+ years", "10-15 years", "25+ years (with maintenance)"],
                ].map(([feature, spc, laminate, hardwood], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '1rem', fontWeight: 700 }}>{feature}</td>
                    <td style={{ padding: '1rem', textAlign: 'center', background: 'rgba(212,175,55,0.05)' }}>{spc}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>{laminate}</td>
                    <td style={{ padding: '1rem', textAlign: 'center' }}>{hardwood}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', marginBottom: '1rem', marginTop: '3rem' }}>
            Neighborhoods We Serve in Winnipeg
          </h3>
          <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            We deliver and install flooring across all Winnipeg neighborhoods and surrounding Manitoba communities:
            <strong> Bridgwater, Linden Woods, Sage Creek, River Heights, Tuxedo, Charleswood, St. Vital, 
            Transcona, Seven Oaks, Kildonan, St. James, Wolseley, Fort Garry, St. Boniface, North Kildonan, 
            Garden City, Maples, Windsor Park, Island Lakes, Royalwood, South Pointe, Waverley West, 
            Headingley, East St. Paul, West St. Paul, and Selkirk.</strong>
          </p>

          {/* CTA */}
          <div style={{
            marginTop: '4rem',
            padding: '3rem',
            background: '#1a1a1a',
            textAlign: 'center',
          }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', color: 'white', marginBottom: '1rem' }}>
              Ready to Transform Your Winnipeg Home?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Get a free quote on flooring supply and installation. Same-day response guaranteed.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/quote" className="btn-primary">Get a Free Quote</Link>
              <a href="tel:2049520254" className="btn-secondary" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>
                Call (204) 952-0254
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
