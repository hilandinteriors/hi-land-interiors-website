import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Basement Flooring Winnipeg | Waterproof Solutions | Hi Land Interiors",
  description: "The #1 recommended basement flooring in Winnipeg. 100% waterproof SPC luxury vinyl plank. Prevents mold, resists flooding, stays warm. Free quotes.",
};

export default function BasementFlooringPage() {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
          The Best Basement Flooring in <span style={{ color: 'var(--accent-gold)' }}>Winnipeg</span>
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          Winnipeg basements are notorious for moisture issues, seasonal shifting, and potential flooding. Installing the wrong flooring 
          can lead to mold, warping, and thousands of dollars in replacement costs.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
          Why You Should Never Use Laminate or Hardwood
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
          Laminate flooring is made of compressed wood dust. If your basement experiences even minor seepage or high humidity during the summer, 
          laminate will swell and buckle. Solid hardwood is equally vulnerable to moisture and requires a subfloor system that eats into your ceiling height.
        </p>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
          The Ultimate Solution: Pure SPC Vinyl
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
          At Hi Land Interiors, we exclusively supply <strong>Stone Polymer Composite (SPC) Luxury Vinyl Plank</strong>. 
          Because the core is made of stone dust and polymer resins, it contains zero organic material. 
        </p>

        <ul style={{ marginBottom: '2rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
          <li><strong>100% Waterproof:</strong> In the event of a basement backup, SPC vinyl will not rot or swell. It can be dried and re-installed.</li>
          <li><strong>Mold Resistant:</strong> Zero organic matter means mold has nothing to feed on.</li>
          <li><strong>Thermal Stability:</strong> Remains completely stable through Winnipeg's -40°C winters and +30°C summers.</li>
          <li><strong>Warm Underfoot:</strong> The built-in acoustic underlayment provides insulation against cold concrete slabs.</li>
        </ul>

        <div style={{ marginTop: '3rem', padding: '2rem', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--accent-gold)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>Protect Your Basement Investment</h3>
          <p style={{ marginBottom: '2rem' }}>Contact us today for a free estimate on waterproof basement flooring.</p>
          <Link href="/quote" className="btn-primary" style={{ display: 'inline-block' }}>
            Get a Free Basement Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
