"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) / 50;
      const moveY = (clientY - window.innerHeight / 2) / 50;
      setMousePos({ x: moveX, y: moveY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div 
        className={styles.heroBackground}
        style={{ 
          transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.05)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <Image
          src="/images/hero_flooring_ultra_hd.png"
          alt="Premium SPC Vinyl Flooring Store Winnipeg - Hi Land Interiors"
          fill
          priority
          sizes="100vw"
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
              <Link href="/quote" className={`btn-primary ${styles.interactiveBtn}`}>Get Wholesale Quote</Link>
              <Link href="/#products" className={`btn-secondary ${styles.interactiveBtn}`}>In-Stock Colors</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
