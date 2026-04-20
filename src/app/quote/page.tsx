"use client";

import { useState } from "react";
import styles from "./quote.module.css";
import Footer from "@/components/Footer";

export default function QuotePage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/maqabnjn", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

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
            <div className={`glass ${styles.formContainer} bento-card`}>
              {status === "success" ? (
                <div className={styles.successMessage}>
                  <h3>Request Received</h3>
                  <p>Our concierge will reach out to you within 24 business hours.</p>
                  <div className={styles.successActions}>
                    <button onClick={() => setStatus("idle")} className={`btn-primary ${styles.resetBtn}`}>New Request</button>
                    <a 
                      href="https://www.google.com/search?q=Hi+Land+Interiors+Winnipeg#lrd=0x52ea76b00afc1dc3:0x6331a96ed0851888,3" 
                      target="_blank" 
                      rel="noreferrer" 
                      className={`btn-secondary ${styles.reviewBtnSuccess}`}
                    >
                      Rate on Google
                    </a>
                    <a 
                      href="https://maps.apple.com/?q=Hi+Land+Interiors+Winnipeg" 
                      target="_blank" 
                      rel="noreferrer" 
                      className={`btn-secondary ${styles.appleBtnSuccess}`}
                    >
                      Rate on Apple
                    </a>
                  </div>
                </div>
              ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" required />
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" placeholder="john@example.com" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone</label>
                      <input type="tel" id="phone" name="phone" placeholder="(204) 555-0123" required />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="product">Project Type</label>
                    <select id="product" name="product" required>
                      <option value="">Select Project Type</option>
                      <option value="vinyl_supply">Vinyl Supply Only</option>
                      <option value="installation">Installation Services</option>
                      <option value="both">Supply & Installation</option>
                      <option value="b2b">Contractor/Developer Inquiry</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Additional Details</label>
                    <textarea id="message" name="message" rows={4} placeholder="Describe your flooring project..."></textarea>
                  </div>

                  {status === "error" && (
                    <p className={styles.errorMessage}>There was a problem. Please try again or call us.</p>
                  )}

                  <button type="submit" className="btn-primary" style={{ width: '100%' }} disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                  </button>
                </form>
              )}
            </div>

            {/* Bento Grid Side */}
            <div className={styles.bentoGrid}>
              <div className={`${styles.bentoBox} ${styles.boxLarge} glass bento-card`}>
                <h3>Our Showroom</h3>
                <p><strong>Hi Land Interiors</strong></p>
                <p>50 Mandalay Drive<br/>Winnipeg, MB</p>
                <a href="https://maps.google.com/?q=50+Mandalay+Drive,+Winnipeg,+MB" target="_blank" rel="noreferrer" className={styles.textLink}>Directions &rarr;</a>
              </div>
              
              <div className={`${styles.bentoBox} ${styles.boxAccent} glass bento-card`}>
                <h3>Direct Hotline</h3>
                <a href="tel:2049520254" className={styles.bentoPhone}>(204) 952-0254</a>
              </div>
              
              <div className={`${styles.bentoBox} glass bento-card`}>
                <h3>Digital Presence</h3>
                <div className={styles.bentoSocials}>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
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
