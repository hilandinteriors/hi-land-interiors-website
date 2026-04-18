"use client";

import Image from "next/image";
import styles from "./Portfolio.module.css";
import { useEffect, useRef } from "react";

export default function Portfolio() {
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
    <section id="portfolio" className={styles.section} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className="animate-on-scroll">
          <h2 className="section-title">Installed Perfection</h2>
          <p className="section-subtitle">
            See how our vibrant, light-colored vinyl flooring transforms ordinary rooms into stunning, premium spaces.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.portfolioItem} animate-on-scroll delay-100`}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/portfolio_living_room_1776535876535.png"
                alt="Light Oak Flooring in Living Room"
                fill
                className={styles.image}
              />
              <div className={`${styles.overlay} glass-dark`}>
                <h3>Living Room</h3>
                <p>Light Oak SPC</p>
              </div>
            </div>
          </div>

          <div className={`${styles.portfolioItem} animate-on-scroll delay-200`}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/portfolio_bedroom_1776535895288.png"
                alt="Light Maple Flooring in Bedroom"
                fill
                className={styles.image}
              />
              <div className={`${styles.overlay} glass-dark`}>
                <h3>Bedroom</h3>
                <p>Light Maple SPC</p>
              </div>
            </div>
          </div>
          
          <div className={`${styles.portfolioItem} animate-on-scroll delay-300`}>
             <div className={styles.imageWrapper}>
              <Image
                src="/images/portfolio_kitchen_espresso_1776540531724.png"
                alt="Espresso Brown Flooring in Kitchen"
                fill
                className={styles.image}
              />
              <div className={`${styles.overlay} glass-dark`}>
                <h3>Luxury Kitchen</h3>
                <p>Espresso Brown SPC</p>
              </div>
            </div>
          </div>

          <div className={`${styles.portfolioItem} animate-on-scroll delay-100`}>
             <div className={styles.imageWrapper}>
              <Image
                src="/images/portfolio_office_grey_1776540551618.png"
                alt="Grey Flooring in Home Office"
                fill
                className={styles.image}
              />
              <div className={`${styles.overlay} glass-dark`}>
                <h3>Home Office</h3>
                <p>Cool Grey SPC</p>
              </div>
            </div>
          </div>

          <div className={`${styles.portfolioItem} animate-on-scroll delay-200`}>
             <div className={styles.imageWrapper}>
              <Image
                src="/images/portfolio_bathroom_dualtone_1776540571297.png"
                alt="Dualtone Flooring in Bathroom"
                fill
                className={styles.image}
              />
              <div className={`${styles.overlay} glass-dark`}>
                <h3>Waterproof Bathroom</h3>
                <p>Dualtone SPC</p>
              </div>
            </div>
          </div>

          <div className={`${styles.portfolioItem} animate-on-scroll delay-300`}>
             <div className={styles.imageWrapper}>
              <Image
                src="/images/portfolio_dining_brown_1776540594191.png"
                alt="Rich Brown Flooring in Dining Room"
                fill
                className={styles.image}
              />
              <div className={`${styles.overlay} glass-dark`}>
                <h3>Elegant Dining</h3>
                <p>Classic Brown SPC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
