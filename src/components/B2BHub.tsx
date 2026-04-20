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
        <div className={`${styles.content} glass bento-card animate-on-scroll`}>
          <span className={styles.label}>For Professionals</span>
          <h2 className="section-title">THE ARCHITECTURAL <br/><span>SUPPLY PARTNER</span></h2>
          <p className="section-subtitle">
            Curated B2B programs for Winnipeg's leading builders, developers, and flooring professionals.
          </p>
          
          <ul className={styles.list}>
            <li className="animate-on-scroll delay-100">
              <strong>LOGISTICAL EXCELLENCE</strong>
              <p>Immediate, same-day fulfillment from our local Winnipeg inventory. Eliminate shipping delays.</p>
            </li>
            <li className="animate-on-scroll delay-200">
              <strong>CONTRACTOR TIER PRICING</strong>
              <p>Maximize margins with our tiered commercial pricing structure, tailored for high-volume partners.</p>
            </li>
            <li className="animate-on-scroll delay-300">
              <strong>CURATED MATCHING</strong>
              <p>Architectural consistency with exact color-matching stair noses, reducers, and transitions.</p>
            </li>
          </ul>
        </div>
        
        <div className={`${styles.imageContainer} animate-on-scroll delay-200 bento-card`}>
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
