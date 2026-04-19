"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./Services.module.css";

export default function Services() {
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
    <section id="installation" className={styles.section} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2 className="section-title animate-on-scroll">Professional Flooring Installation in Winnipeg</h2>
          <p className={`${styles.description} animate-on-scroll delay-100`}>
            We don't just supply premium materials; we provide the most reliable flooring installation in Winnipeg. 
            Access our network of elite, vetted professional installers and experience a seamless transformation for your home or business.
          </p>
          
          <div className={`${styles.pricingCard} animate-on-scroll delay-200`}>
            <div className={styles.priceHeader}>
              <span className={styles.priceTag}>Starting at</span>
              <span className={styles.price}>$0.99</span>
              <span className={styles.sqft}>/ sq. ft.</span>
            </div>
            <p className={styles.priceDesc}>Highly competitive, genuine pricing for professional installation.</p>
          </div>
          
          <div className={`${styles.benefits} animate-on-scroll delay-300`}>
            <div className={styles.benefit}>
              <div className={styles.check}>✓</div>
              <span>Complimentary Project Estimates & Free Quotes</span>
            </div>
            <div className={styles.benefit}>
              <div className={styles.check}>✓</div>
              <span>Vetted & Experienced Installation Network</span>
            </div>
            <div className={styles.benefit}>
              <div className={styles.check}>✓</div>
              <span>Fast Turnaround Times Guaranteed</span>
            </div>
          </div>
          
          <div className="animate-on-scroll delay-300">
            <Link href="/quote" className={`btn-primary ${styles.cta}`}>Request Your Free Quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
