"use client";

import { useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";

const reviews = [
  {
    name: "Mark S.",
    role: "Homeowner",
    comment: "Found exactly what I was looking for. Their light grey SPC vinyl is beautiful and high quality. Best prices in Winnipeg by far.",
  },
  {
    name: "Sarah L.",
    role: "Homeowner",
    comment: "The installation was incredibly fast. I couldn't believe the $0.99/sqft price for such professional work. Highly recommend Hi Land Interiors.",
  },
  {
    name: "David K.",
    role: "Contractor",
    comment: "As a contractor, I need a supplier who actually has stock. These guys are the only ones in Manitoba with 20+ colors ready for same-day pickup.",
  },
  {
    name: "Jennifer M.",
    role: "Homeowner",
    comment: "I was skeptical about the stone core being 100% waterproof, but we had a small leak and the floor stayed perfect. This product is amazing.",
  },
  {
    name: "Robert T.",
    role: "Developer",
    comment: "Visiting the showroom at 50 Mandalay was a great experience. The staff is knowledgeable and didn't push us. We use them for all our infill projects.",
  },
  {
    name: "Kevin P.",
    role: "Homeowner",
    comment: "Did my entire basement DIY. The interlocking system is very easy to work with. Saved thousands compared to the big box stores.",
  },
  {
    name: "Elena R.",
    role: "Homeowner",
    comment: "The color selection is stunning. They even had the exact matching stair noses which I couldn't find anywhere else. Five stars!",
  },
  {
    name: "Jason B.",
    role: "Home Builder",
    comment: "Highest quality SPC I've found in Winnipeg. My clients love the premium look, and I love the durability. A reliable partner for any builder.",
  },
  {
    name: "Michelle W.",
    role: "Homeowner",
    comment: "Had my floors installed just 3 days after ordering. The turnaround time is unbeatable. The crew was professional and left everything clean.",
  },
  {
    name: "Chris H.",
    role: "Homeowner",
    comment: "Pure SPC is a must-have for Winnipeg winters. It doesn't expand or contract like regular vinyl. Great product and even better service.",
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
      </div>
    </section>
  );
}
