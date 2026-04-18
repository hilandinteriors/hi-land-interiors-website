"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./CoreTech.module.css";

export default function CoreTech() {
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
        <div className={styles.grid}>
          <div className={`${styles.imageWrapper} animate-on-scroll delay-100`}>
            <Image
              src="/images/technical_core_diagram_1776537997712.png"
              alt="SPC Stone Core Technical Diagram"
              fill
              className={styles.image}
            />
          </div>
          
          <div className={styles.content}>
            <span className={`${styles.badge} animate-on-scroll`}>Advanced Engineering</span>
            <h2 className={`section-title animate-on-scroll delay-100`}>The Anatomy of Unstoppable Floors</h2>
            <p className={`section-subtitle animate-on-scroll delay-200`}>
              Our Pure SPC (Stone Plastic Composite) vinyl flooring is built layer by layer to withstand extreme abuse while maintaining flawless aesthetics.
            </p>
            
            <div className={styles.layerList}>
              <div className={`${styles.layerItem} animate-on-scroll delay-300`}>
                <div className={styles.layerNumber}>01</div>
                <div>
                  <h4>UV Ceramic Wear Layer</h4>
                  <p>A crystal-clear, scratch-resistant shield that prevents fading and scuffing from heavy traffic.</p>
                </div>
              </div>
              
              <div className={`${styles.layerItem} animate-on-scroll delay-300`}>
                <div className={styles.layerNumber}>02</div>
                <div>
                  <h4>HD Decor Print Film</h4>
                  <p>Ultra-realistic wood and stone textures that capture every natural knot and grain detail.</p>
                </div>
              </div>
              
              <div className={`${styles.layerItem} animate-on-scroll delay-300`}>
                <div className={styles.layerNumber}>03</div>
                <div>
                  <h4>Solid SPC Core</h4>
                  <p>A dense composite of natural limestone powder and PVC, making it 100% waterproof and rigid.</p>
                </div>
              </div>
              
              <div className={`${styles.layerItem} animate-on-scroll delay-300`}>
                <div className={styles.layerNumber}>04</div>
                <div>
                  <h4>Acoustic Underlayment</h4>
                  <p>Attached EVA/IXPE backing that absorbs sound and provides cushioned comfort underfoot.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
