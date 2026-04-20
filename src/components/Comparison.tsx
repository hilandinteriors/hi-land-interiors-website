"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Comparison.module.css";

const comparisonData = [
  {
    feature: "Water Resistance",
    spc: "100% Waterproof",
    laminate: "Low (Swells with water)",
    hardwood: "None (Damaged by moisture)",
  },
  {
    feature: "Pet/Scratch Proof",
    spc: "High (20 Mil Wear Layer)",
    laminate: "Medium (Prone to chips)",
    hardwood: "Low (Scratches easily)",
  },
  {
    feature: "Stability (Expansion)",
    spc: "High (Zero expansion)",
    laminate: "Low (Gaps in humidity)",
    hardwood: "Very Low (Moves with seasons)",
  },
  {
    feature: "Installation Ease",
    spc: "Very High (Click-Lock)",
    laminate: "High (Click-Lock)",
    hardwood: "Low (Nail/Glue required)",
  },
  {
    feature: "Winnipeg Basements",
    spc: "Recommended #1",
    laminate: "Not Recommended",
    hardwood: "Not Recommended",
  }
];

export default function Comparison() {
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
    <section id="comparison" className={styles.section} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title animate-on-scroll">The Superior Choice</h2>
          <p className="section-subtitle animate-on-scroll delay-100">
            See why architectural professionals and Winnipeg homeowners are switching from laminate and hardwood to Pure SPC Vinyl.
          </p>
        </div>

        <div className={`${styles.tableWrapper} animate-on-scroll delay-200`}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Comparison Point</th>
                <th className={styles.highlight}>Hi Land Pure SPC</th>
                <th>Standard Laminate</th>
                <th>Solid Hardwood</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index}>
                  <td>{row.feature}</td>
                  <td><span className={styles.check}>✓</span> {row.spc}</td>
                  <td><span className={styles.cross}>✕</span> {row.laminate}</td>
                  <td><span className={styles.cross}>✕</span> {row.hardwood}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.visualComparison}>
          <div className={`${styles.visualText} animate-on-scroll`}>
            <h3 className="section-title">Engineered for <br/><span>Architectural Strength</span></h3>
            <p className="section-subtitle">
              Unlike laminate which is made of pressed wood chips, or hardwood which is a living material that warps, 
              <strong> Hi Land Pure SPC</strong> is built with a stone-polymer core. It is inorganic, meaning it cannot 
              rot, swell, or support mold growth—even in a flooded basement.
            </p>
            <div className="gold-thread"></div>
          </div>

          <div className={`${styles.imageGrid} animate-on-scroll delay-200`}>
            <div className={`${styles.compareCard} bento-card`}>
              <span className={styles.imageLabel}>Hi Land Pure SPC Vinyl</span>
              <Image 
                src="/images/flooring_comparison_spc_vinyl_1776697437328.png" 
                alt="Close up of SPC Vinyl Core" 
                fill 
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
