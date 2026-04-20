"use client";

import { useEffect, useRef } from "react";
import styles from "./TrustBanner.module.css";

export default function TrustBanner() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.trustItem} animate-on-scroll`}>
          <div className={styles.icon}>🏠</div>
          <div>
            <span className={styles.title}>Basement Ready</span>
            <span className={styles.label}>100% Flood-Proof Core</span>
          </div>
        </div>
        
        <div className={`${styles.trustItem} animate-on-scroll delay-100`}>
          <div className={styles.icon}>🛡️</div>
          <div>
            <span className={styles.title}>30-Year Warranty</span>
            <span className={styles.label}>Guaranteed Durability</span>
          </div>
        </div>

        <div className={`${styles.trustItem} animate-on-scroll delay-200`}>
          <div className={styles.icon}>🚚</div>
          <div>
            <span className={styles.title}>Winnipeg In-Stock</span>
            <span className={styles.label}>Ready for Same-Day Pickup</span>
          </div>
        </div>

        <div className={`${styles.trustItem} animate-on-scroll delay-300`}>
          <div className={styles.icon}>💎</div>
          <div>
            <span className={styles.title}>Wholesale Pricing</span>
            <span className={styles.label}>Skip the Retail Markup</span>
          </div>
        </div>
      </div>
    </section>
  );
}
