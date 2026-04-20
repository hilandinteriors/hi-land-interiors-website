"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    question: "What is the best flooring for Winnipeg basements?",
    answer: "For Winnipeg basements, 100% Pure SPC Vinyl is the gold standard. It is completely waterproof and built with a solid stone core that doesn't expand or contract during our harsh Manitoba winters.",
  },
  {
    question: "Do you offer professional flooring installation in Winnipeg?",
    answer: "Yes! We provide professional flooring installation across Winnipeg and surrounding areas starting at just $0.99/sq. ft. Our vetted installers ensure a flawless transformation for your home or business.",
  },
  {
    question: "Where is the Hi Land Interiors showroom located?",
    answer: "Our main showroom and warehouse are located at 50 Mandalay Drive, Winnipeg, MB. We are open for both professional contractors and homeowners to view our massive inventory in person.",
  },
  {
    question: "Is SPC Vinyl suitable for homes with large pets or active families?",
    answer: "Absolutely. Our SPC Vinyl is engineered with a high-density stone core and a 20 mil commercial-grade wear layer. It is specifically designed to resist deep scratches from large dogs, high-impact traffic from kids, and the heavy furniture typical of a modern Winnipeg home.",
  },
  {
    question: "Can I pick up my order on the same day?",
    answer: "Yes, we pride ourselves on having the largest local inventory in Winnipeg. Most of our 20+ colors are in stock and ready for same-day local pickup from our warehouse.",
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  // FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className={styles.section} ref={sectionRef}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container">
        <div className={styles.header}>
          <h2 className="section-title animate-on-scroll">Frequently Asked Questions</h2>
          <p className="section-subtitle animate-on-scroll delay-100">
            Everything you need to know about our premium Winnipeg flooring solutions.
          </p>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${activeIndex === index ? styles.active : ""} animate-on-scroll`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button 
                className={styles.question} 
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                {faq.question}
                <span className={styles.icon}>+</span>
              </button>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
