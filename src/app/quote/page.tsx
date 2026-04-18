import styles from "./quote.module.css";
import Footer from "@/components/Footer";

export default function QuotePage() {
  return (
    <main className={styles.main}>
      <section className={styles.quoteSection}>
        <div className={`container ${styles.container}`}>
          <div className={styles.header}>
            <h1 className="section-title">Request a Quote</h1>
            <p className="section-subtitle">
              Get pricing on our premium light flooring or professional installation services. We respond to all inquiries within 24 hours.
            </p>
          </div>

          <div className={styles.grid}>
            {/* Form Side */}
            <div className={`glass ${styles.formContainer}`}>
              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>
                
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="john@example.com" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="(204) 555-0123" required />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="product">Product/Service Inquiry</label>
                  <select id="product" required>
                    <option value="">Select an option</option>
                    <option value="vinyl_supply">Vinyl Flooring Supply (SPC)</option>
                    <option value="installation">Installation Services ($1/sq.ft)</option>
                    <option value="both">Both Supply & Installation</option>
                    <option value="b2b">B2B Contractor Account</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message">Message details (Optional)</label>
                  <textarea id="message" rows={4} placeholder="Tell us about your project..."></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%' }}>
                  Submit Request
                </button>
              </form>
            </div>

            {/* Bento Grid Side */}
            <div className={styles.bentoGrid}>
              <div className={`${styles.bentoBox} ${styles.boxLarge} glass`}>
                <h3>Our Showroom</h3>
                <p><strong>Hi Land Interiors</strong></p>
                <p>50 Mandalay Drive<br/>Winnipeg, MB</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className={styles.textLink}>Get Directions &rarr;</a>
              </div>
              
              <div className={`${styles.bentoBox} ${styles.boxAccent} glass`}>
                <h3>Call Directly</h3>
                <a href="tel:2049520254" className={styles.bentoPhone}>(204) 952-0254</a>
              </div>
              
              <div className={`${styles.bentoBox} glass`}>
                <h3>Socials</h3>
                <div className={styles.bentoSocials}>
                  <a href="#">Instagram</a>
                  <a href="#">TikTok</a>
                  <a href="#">Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
