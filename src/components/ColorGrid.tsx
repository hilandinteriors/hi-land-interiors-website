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
          <h2 className="section-title">A Spectrum of Possibilities</h2>
          <p className="section-subtitle">
            From sleek Grey and versatile Dualtone to rich classic Brown and extremely dark Espresso Brown, explore our comprehensive range of high-definition wood prints.
          </p>
        </div>
        
        <div className={`${styles.displayImageContainer} animate-on-scroll delay-100`}>
          <Image 
            src="/images/massive_color_grid_1776540284792.png" 
            alt="Physical flooring color samples showing over 20 options" 
            width={1200}
            height={400}
            className={styles.displayImage}
          />
        </div>

      </div>
    </section>
  );
}
