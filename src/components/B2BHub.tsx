"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./B2BHub.module.css";

export default function B2BHub() {
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
    <section id="b2b" className={styles.section} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <span className={`${styles.label} animate-on-scroll`}>For Professionals</span>
          <h2 className="section-title animate-on-scroll delay-100">Winnipeg's Most Reliable Supply Partner</h2>
          <p className="section-subtitle animate-on-scroll delay-200">
            Builders, contractors, and infill developers trust Hi Land Interiors for unbeatable B2B pricing, consistent stock, and immediate availability.
          </p>
          
          <ul className={`${styles.list} animate-on-scroll delay-300`}>
            <li>
              <strong>Massive Winnipeg Inventory:</strong> No more waiting for out-of-province shipping. Pick up same-day from our local warehouse.
            </li>
            <li>
              <strong>Contractor Pricing:</strong> Maximize your margins with our aggressive B2B pricing tiers.
            </li>
            <li>
              <strong>Complete Project Matching:</strong> Seamlessly match floors with our exact color-matching accessories (stair noses, reducers).
            </li>
          </ul>
        </div>
        
        <div className={`${styles.imageContainer} animate-on-scroll delay-200`}>
          <Image
            src="/images/warehouse_forklift_1776535839835.png"
            alt="Massive SPC Vinyl Flooring Inventory in our Winnipeg Warehouse"
            fill
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
