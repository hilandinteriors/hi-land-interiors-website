"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "./ColorGrid.module.css";

const colors = [
  { name: "Light Oak", hex: "#d1bfae", image: "/images/portfolio_living_room_1776535876535.png" },
  { name: "Light Maple", hex: "#e6d5c3", image: "/images/portfolio_bedroom_1776535895288.png" },
  { name: "Espresso Brown", hex: "#4a3c31", image: "/images/portfolio_kitchen_espresso_1776540531724.png" },
  { name: "Cool Grey", hex: "#8a8d91", image: "/images/portfolio_office_grey_1776540551618.png" },
  { name: "Dualtone", hex: "#b5a397", image: "/images/portfolio_bathroom_dualtone_1776540571297.png" },
  { name: "Classic Brown", hex: "#7a5c43", image: "/images/portfolio_dining_brown_1776540594191.png" },
  { name: "Whitewash", hex: "#f2efe9", image: "/images/portfolio_living_room_1776535876535.png" },
  { name: "Charcoal", hex: "#3b3c3e", image: "/images/portfolio_office_grey_1776540551618.png" }
];

export default function ColorGrid() {
  const [activeColor, setActiveColor] = useState(colors[0]);
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
          <h2 className="section-title">LIVE IN-STOCK GALLERY</h2>
          <p className="section-subtitle">
            Skip the 6-week wait times. Explore our signature colors stocked in our Winnipeg warehouse and ready for immediate professional installation or same-day pickup.
          </p>
        </div>
        
        <div className={`${styles.interactiveArea} animate-on-scroll delay-100`}>
          <div className={styles.swatchGrid}>
            {colors.map((color, index) => (
              <div 
                key={index}
                className={`${styles.swatch} ${activeColor.name === color.name ? styles.active : ''}`}
                style={{ backgroundColor: color.hex }}
                onClick={() => setActiveColor(color)}
                onMouseEnter={() => setActiveColor(color)}
              >
                <span className={styles.swatchName}>{color.name}</span>
              </div>
            ))}
          </div>

          <div className={styles.previewPanel}>
            <Image 
              src={activeColor.image}
              alt={`${activeColor.name} SPC Vinyl Flooring`}
              fill
              style={{ objectFit: 'cover', zIndex: 0 }}
            />
            <div className={styles.previewContent} style={{ zIndex: 1, position: 'relative' }}>
              <h3>{activeColor.name}</h3>
              <p>Premium SPC Vinyl • 20 Mil Wear Layer • In Stock</p>
            </div>
          </div>
        </div>

        <div className={`${styles.ctaContainer} animate-on-scroll delay-200`} style={{ marginTop: '3rem' }}>
          <a href="/quote" className="btn-secondary" style={{ width: '100%', textAlign: 'center', borderColor: 'var(--accent-gold)', color: 'var(--accent-gold)' }}>
            Check Inventory Availability & Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
