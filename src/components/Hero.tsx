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
          alt="Luxury SPC Vinyl Flooring Showroom Winnipeg - Hi Land Interiors"
          fill
          priority
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.heroContent}`}>
        <div className={`${styles.heroText} glass`}>
          <div className={styles.textStack}>
            <span className={`${styles.badge} animate-on-scroll`}>The Premier SPC Vinyl Supplier</span>
            <h1 className={`${styles.massiveTitle} animate-on-scroll delay-100`}>
              WINNIPEG'S PREMIER <br/><span>FLOORING STORE</span>
            </h1>
            <p className={`${styles.subtitle} animate-on-scroll delay-200`}>
              Specializing in Luxury Vinyl Plank (LVP) and SPC flooring. Our 100% waterproof, stone-core vinyl is the architect's choice for Winnipeg homes.
            </p>
            <div className={`${styles.priceTag} animate-on-scroll delay-200`}>
              Winnipeg Installation starting at $0.99/sq. ft.
            </div>
            <div className={`${styles.ctaGroup} animate-on-scroll delay-300`}>
              <Link href="/quote" className="btn-primary">Get Wholesale Quote</Link>
              <Link href="/#products" className="btn-secondary">In-Stock Colors</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
