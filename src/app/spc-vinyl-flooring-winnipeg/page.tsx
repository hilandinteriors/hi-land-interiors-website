import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SPC Vinyl Flooring Winnipeg | 100% Waterproof | Hi Land Interiors",
  description: "Shop premium SPC Vinyl Flooring in Winnipeg. 100% waterproof, 20 mil wear layer, stone-polymer core. In-stock for same-day pickup. Wholesale prices.",
};

export default function SPCVinylFlooringPage() {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
          SPC Vinyl Flooring <span style={{ color: 'var(--accent-gold)' }}>Winnipeg</span>
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          Hi Land Interiors is Winnipeg’s premier supplier of <strong>Pure SPC (Stone Polymer Composite) Vinyl Flooring</strong>. 
          Engineered specifically for the harsh temperature swings of the Manitoba climate, our SPC vinyl is the ultimate hardwood alternative.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
          Why Choose SPC Vinyl in Manitoba?
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
          Standard laminate flooring swells when exposed to moisture, and solid hardwood contracts during dry Winnipeg winters. 
          <strong>SPC Vinyl</strong> features an inorganic limestone core. This means it has a zero-expansion rate. It will not warp, 
          it will not swell, and it is 100% waterproof—making it the safest and most durable option for your home.
        </p>

        <ul style={{ marginBottom: '2rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
          <li><strong>20 Mil Commercial Wear Layer:</strong> Scratch-resistant against large pets and high traffic.</li>
          <li><strong>100% Waterproof Core:</strong> Perfect for kitchens, bathrooms, and basements.</li>
          <li><strong>Built-in Underlayment:</strong> Acoustic padding is pre-attached for sound dampening and warmth.</li>
          <li><strong>Click-Lock Installation:</strong> Fast, glueless, and seamless.</li>
        </ul>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
          In-Stock & Ready for Pickup
        </h2>
        <p style={{ marginBottom: '2rem', lineHeight: 1.8 }}>
          Unlike big-box retailers that make you wait 6 weeks for delivery, we stock over 24 signature colors directly in our 
          Winnipeg warehouse located at 50 Mandalay Drive. You can purchase your flooring and pick it up the very same day.
        </p>

        <div style={{ marginTop: '3rem', padding: '2rem', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--accent-gold)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>Get Your Wholesale Quote</h3>
          <p style={{ marginBottom: '2rem' }}>We offer direct-to-consumer wholesale pricing on all our SPC Vinyl products.</p>
          <Link href="/quote" className="btn-primary" style={{ display: 'inline-block' }}>
            Request Pricing & Availability
          </Link>
        </div>
      </div>
    </main>
  );
}
