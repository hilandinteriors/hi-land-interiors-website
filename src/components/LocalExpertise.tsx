"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./LocalExpertise.module.css";

export default function LocalExpertise() {
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
        <div className={styles.content}>
          <span className={`${styles.label} animate-on-scroll`}>Winnipeg Certified</span>
          <h2 className={`${styles.title} animate-on-scroll delay-100`}>
            ENGINEERED FOR THE <br/><span>MANITOBA CLIMATE</span>
          </h2>
          <p className={`${styles.description} animate-on-scroll delay-200`}>
            Winnipeg homes face extreme seasonal shifts. From -40°C winters to humid summers and basement moisture risks, 
            your floors need more than just good looks. Hi Land Pure SPC is the only flooring specifically curated for 
            the local environment.
          </p>
          
          <div className={styles.points}>
            <div className={`${styles.point} animate-on-scroll delay-300`}>
              <span className={styles.pointIcon}>❄️</span>
              <span className={styles.pointTitle}>Zero Thermal Shift</span>
              <p className={styles.pointDesc}>Will not expand or contract during Winnipeg's extreme temperature swings.</p>
            </div>
            <div className={`${styles.point} animate-on-scroll delay-300`}>
              <span className={styles.pointIcon}>💧</span>
              <span className={styles.pointTitle}>Basement Ready</span>
              <p className={styles.pointDesc}>100% waterproof stone core. The ultimate defense against basement flooding.</p>
            </div>
            <div className={`${styles.point} animate-on-scroll delay-400`}>
              <span className={styles.pointIcon}>☀️</span>
              <span className={styles.pointTitle}>UV Resistant</span>
              <p className={styles.pointDesc}>Advanced wear layer prevents fading from high-exposure floor-to-ceiling windows.</p>
            </div>
            <div className={`${styles.point} animate-on-scroll delay-400`}>
              <span className={styles.pointIcon}>🐾</span>
              <span className={styles.pointTitle}>Impact Proof</span>
              <p className={styles.pointDesc}>Highest-rated impact resistance for active families and large pets.</p>
            </div>
          </div>
        </div>
        
        <div className={`${styles.imageContainer} animate-on-scroll delay-200 bento-card`}>
          <Image
            src="/images/portfolio_living_room_1776535876535.png"
            alt="Luxury SPC Vinyl in a Winnipeg Home"
            fill
            sizes="(max-width: 992px) 100vw, 50vw"
            className={styles.image}
          />
          <div className="glass" style={{ position: 'absolute', bottom: '2rem', right: '2rem', padding: '1.5rem', border: '1px solid rgba(255,255,255,0.2)' }}>
            <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 800 }}>Showroom Sample</p>
            <p style={{ fontSize: '1.25rem', color: 'var(--accent-gold)' }}>Calgary Oak 9.5"</p>
          </div>
        </div>
      </div>
    </section>
  );
}
