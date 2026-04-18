"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Products.module.css";

export default function Products() {
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
    <section id="products" className={styles.section} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.header} animate-on-scroll`}>
          <h2 className="section-title">Uncompromising Quality</h2>
          <p className="section-subtitle">
            Our 100% Pure SPC Vinyl Flooring is engineered for absolute durability and timeless aesthetics. No recycled materials, just pure performance.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.imageWrapper} animate-on-scroll delay-100`}>
            <Image
              src="/images/spc_flooring_light_details_1776535042862.png"
              alt="Close up of Light SPC Vinyl Flooring"
              fill
              className={styles.image}
            />
          </div>
          
          <div className={styles.content}>
            <h3 className={`${styles.subheading} animate-on-scroll delay-200`}>Technical Superiority</h3>
            <ul className={styles.featureList}>
              <li className={`${styles.featureItem} animate-on-scroll delay-300`}>
                <div className={styles.icon}>20M</div>
                <div>
                  <h4>20 Mil Wear Layer</h4>
                  <p>Maximum scratch resistance for high-traffic commercial and residential spaces.</p>
                </div>
              </li>
              <li className={`${styles.featureItem} animate-on-scroll delay-300`}>
                <div className={styles.icon}>WP</div>
                <div>
                  <h4>100% Waterproof</h4>
                  <p>Perfect for kitchens, bathrooms, and basements. Never worry about spills again.</p>
                </div>
              </li>
              <li className={`${styles.featureItem} animate-on-scroll delay-300`}>
                <div className={styles.icon}>SPC</div>
                <div>
                  <h4>Pure SPC Core</h4>
                  <p>Stone Plastic Composite means extreme stability and fire resistance.</p>
                </div>
              </li>
            </ul>

            <div className={`${styles.accessoriesCard} animate-on-scroll delay-200`}>
              <h4>Seamless Integration</h4>
              <p>We stock exact color-matching stair noses and reducers for a flawless, professional finish on every job.</p>
            </div>
            
            <div className={`${styles.panelsCard} animate-on-scroll delay-300`}>
              <h4>Also Available: Acoustic Wall Panels</h4>
              <p>Elevate your space with our premium selection of acoustic wall panels, designed to reduce noise and add a modern architectural touch.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
