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
        <div className={`${styles.stat} animate-on-scroll`}>
          <span className={styles.number}>500+</span>
          <span className={styles.label}>Manitoba Homes Transformed</span>
        </div>
        <div className={styles.divider} />
        <div className={`${styles.stat} animate-on-scroll delay-100`}>
          <span className={styles.number}>20+</span>
          <span className={styles.label}>Colors In Stock Today</span>
        </div>
        <div className={styles.divider} />
        <div className={`${styles.stat} animate-on-scroll delay-200`}>
          <span className={styles.number}>Same Day</span>
          <span className={styles.label}>Winnipeg Pickup Available</span>
        </div>
      </div>
    </section>
  );
}
