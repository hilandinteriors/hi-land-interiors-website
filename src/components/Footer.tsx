"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  const sectionRef = useRef<HTMLElement>(null);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    
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

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.contactInfo} animate-on-scroll`}>
          <span className={styles.label}>Connect</span>
          <h2 className={styles.title}>WINNIPEG <br/><span>SHOWROOM</span></h2>
          <p className={styles.address}>
            <strong>Hi Land Interiors</strong><br />
            50 Mandalay Drive<br />
            Winnipeg, MB R2X 2Z2
          </p>
          <a href="tel:2049520254" className={styles.phone}>(204) 952-0254</a>
          
          <div className={styles.socials}>
            <a href="https://www.instagram.com/hilandinteriors/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
            <a href="https://www.facebook.com/profile.php?id=61570692601234" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
          </div>
          
          <a href="https://maps.google.com/?q=50+Mandalay+Drive,+Winnipeg,+MB" target="_blank" rel="noopener noreferrer" className="btn-primary">Get Directions</a>
        </div>
        
        <div className={`${styles.mapContainer} animate-on-scroll delay-200 glass`}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2568.106497554378!2d-97.16854122304917!3d49.93433607149791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea76b00afc1dc3%3A0x6331a96ed0851888!2s50%20Mandalay%20Dr%2C%20Winnipeg%2C%20MB%20R2X%202Z2%2C%20Canada!5e0!3m2!1sen!2sus!4v1713481234567!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Hi Land Interiors Location"
          ></iframe>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {new Date().getFullYear()} Hi Land Interiors. <br/><span>Architectural Flooring Solutions.</span></p>
      </div>

      <div className={`back-to-top ${showScroll ? 'visible' : ''}`} onClick={scrollToTop}>
        ↑
      </div>
    </footer>
  );
}
