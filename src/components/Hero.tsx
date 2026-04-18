"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

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

    const elements = heroRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.heroBackground}>
        <Image
          src="/images/hero_flooring_light_1776535022100.png"
          alt="Premium Light Vinyl Flooring in Winnipeg"
          fill
          priority
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroText}>
          <span className={`${styles.badge} animate-on-scroll`}>Winnipeg's #1 SPC Vinyl Supplier</span>
          <h1 className={`${styles.massiveTitle} animate-on-scroll delay-100`}>
            WINNIPEG'S BIGGEST VINYL FLOORING INVENTORY <br/> ONLY AT HI LAND INTERIORS
          </h1>
          <p className={`${styles.subtitle} animate-on-scroll delay-200`}>
            Proudly serving Manitoba from our Winnipeg showroom. Engineered with a solid stone core — 100% waterproof, exceptionally stable, and built for our harsh Canadian winters.
          </p>
          <div className={`${styles.priceBadge} animate-on-scroll delay-200`}>
            <strong>Best Pricing in Winnipeg</strong> • Starting at just $1.59 per sqft
          </div>
          <div className={`${styles.ctaGroup} animate-on-scroll delay-300`}>
            <Link href="/quote" className="btn-primary">Request a Quote</Link>
            <Link href="/#portfolio" className="btn-secondary" style={{ borderColor: 'white', color: 'white' }}>View Portfolio</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
