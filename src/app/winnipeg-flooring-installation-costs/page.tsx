import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Flooring Installation Costs Winnipeg | Pricing Guide | Hi Land Interiors",
  description: "How much does it cost to install flooring in Winnipeg? See our transparent pricing guide. Professional SPC Vinyl installation starting at just $0.99/sq.ft.",
};

export default function InstallationCostsPage() {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', lineHeight: 1.1 }}>
          Flooring Installation Costs in <span style={{ color: 'var(--accent-gold)' }}>Winnipeg</span>
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          At Hi Land Interiors, we believe in complete transparency. While most Winnipeg flooring stores hide their installation 
          rates until they give you an estimate, we proudly display ours because we offer the most competitive professional 
          rates in Manitoba.
        </p>

        <div style={{ padding: '2rem', border: '2px solid var(--accent-gold)', borderRadius: '12px', margin: '3rem 0' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)', textAlign: 'center' }}>
            Professional Installation Rate
          </h2>
          <div style={{ fontSize: '4rem', fontWeight: 800, color: 'var(--accent-gold)', textAlign: 'center', marginBottom: '1rem' }}>
            $0.99<span style={{ fontSize: '1.5rem', color: 'inherit' }}>/sq.ft.</span>
          </div>
          <p style={{ textAlign: 'center', fontWeight: 600 }}>For all standard SPC Luxury Vinyl Plank installations.</p>
        </div>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
          What Affects The Total Cost?
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
          While our base installation rate is $0.99 per square foot, your total project cost will depend on a few site-specific factors:
        </p>

        <ul style={{ marginBottom: '2rem', lineHeight: 1.8, paddingLeft: '1.5rem' }}>
          <li><strong>Subfloor Preparation:</strong> Concrete leveling or plywood repair if your current subfloor is heavily damaged or uneven.</li>
          <li><strong>Old Flooring Removal:</strong> The cost to tear out and dispose of old carpet, tile, or glued-down hardwood.</li>
          <li><strong>Baseboards & Trim:</strong> Removing existing baseboards and installing new quarter-round or shoe molding.</li>
          <li><strong>Stairs:</strong> Staircases require specialized custom nosing and detailed labor.</li>
        </ul>

        <h2 style={{ fontSize: '2rem', marginTop: '3rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>
          Why Our Rates Are Lower
        </h2>
        <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
          Because we are a direct wholesale supplier with our own in-house teams of architectural installation professionals, 
          we cut out the middleman. You don't pay retail markup on the product, and you don't pay contractor markup on the labor.
        </p>

        <div style={{ marginTop: '3rem', padding: '2rem', borderRadius: '12px', textAlign: 'center', border: '1px solid var(--accent-gold)' }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-gold)' }}>Get Your Exact Price Today</h3>
          <p style={{ marginBottom: '2rem' }}>Contact us with your square footage for an exact, no-hidden-fees quote.</p>
          <Link href="/quote" className="btn-primary" style={{ display: 'inline-block' }}>
            Request an Exact Quote
          </Link>
        </div>
      </div>
    </main>
  );
}
