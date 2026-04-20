"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./ColorGrid.module.css";

export default function ColorGrid() {
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
    <section id="colors" className={styles.section} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className="animate-on-scroll">
          <h2 className="section-title">LIVE IN-STOCK GALLERY</h2>
          <p className="section-subtitle">
            Skip the 6-week wait times. All 24 signature colors are stocked in our Winnipeg warehouse and ready for immediate professional installation or same-day pickup.
          </p>
        </div>
        
        <div className={`${styles.displayImageContainer} animate-on-scroll delay-100 bento-card`}>
          <Image 
            src="/images/massive_color_grid_1776540284792.png" 
            alt="Physical flooring color samples showing over 20 options" 
            width={1200}
            height={400}
            className={styles.displayImage}
          />
          <div className={styles.stockBadge}>
            <span className={styles.dot}></span> IN-STOCK TODAY
          </div>
        </div>

        <div className={`${styles.ctaContainer} animate-on-scroll delay-200`}>
          <a href="/quote" className="btn-secondary" style={{ width: '100%', textAlign: 'center', borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>
            Check Inventory Availability & Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
