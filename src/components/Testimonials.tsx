"use client";

import { useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    name: "Dmitri S.",
    role: "Homeowner",
    comment: "Excellent quality SPC vinyl. The durability is exactly what we were looking for. Best prices in Winnipeg for this level of quality.",
  },
  {
    name: "Arjun P.",
    role: "Homeowner",
    comment: "Very polite service and helpful staff at the showroom. The light grey planks look stunning in our new home. Highly recommended!",
  },
  {
    name: "Kofi A.",
    role: "Contractor",
    comment: "Best price for installation in Winnipeg. $0.99/sqft is very fair and the quality of work from their installation network is top-notch.",
  },
  {
    name: "Igor V.",
    role: "Homeowner",
    comment: "Showroom at 50 Mandalay is very professional. They had everything in stock and the pickup was seamless. Great experience overall.",
  },
  {
    name: "Priya R.",
    role: "Homeowner",
    comment: "Fastest delivery in Manitoba. We had our new floors delivered just 2 days after ordering. The turnaround time is truly impressive.",
  },
  {
    name: "Aisha M.",
    role: "Homeowner",
    comment: "The waterproof feature is a lifesaver for our busy family. Perfect for Winnipeg basements. The stone core makes it very stable.",
  },
  {
    name: "Svetlana K.",
    role: "Homeowner",
    comment: "We compared prices everywhere in the city, and Hi Land Interiors definitely has the best selection and the most competitive pricing.",
  },
  {
    name: "Rajesh G.",
    role: "Developer",
    comment: "I use them for all my rental properties in Winnipeg. Their SPC vinyl is durable, looks premium, and fits my budget perfectly.",
  },
  {
    name: "Oluwaseun T.",
    role: "Homeowner",
    comment: "The installation crew was very professional and respectful of our home. They finished the job quickly and the results are beautiful.",
  },
  {
    name: "Viktor N.",
    role: "Contractor",
    comment: "Massive inventory ready for same-day pickup. As a contractor, this saves me so much time. Great quality and even better service.",
  }
];

export default function Testimonials() {
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
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title animate-on-scroll">What Our Clients Say</h2>
          <p className="section-subtitle animate-on-scroll delay-100">
            Trusted by hundreds of homeowners and professionals across Manitoba.
          </p>
        </div>

        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className={`${styles.card} glass animate-on-scroll`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.comment}>"{review.comment}"</p>
              <div className={styles.footer}>
                <span className={styles.author}>{review.name}</span>
                <span className={styles.badge}>{review.role}</span>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <a 
            href="https://www.google.com/search?q=Hi+Land+Interiors+Winnipeg#lrd=0x52ea76b00afc1dc3:0x6331a96ed0851888,3" 
            target="_blank" 
            rel="noreferrer" 
            className={`btn-secondary ${styles.reviewBtn} animate-on-scroll delay-300`}
          >
            <span className={styles.googleIcon}>G</span> Love our floors? Review us on Google
          </a>
        </div>
      </div>
    </section>
  );
}
