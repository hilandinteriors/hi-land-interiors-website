"use client";

import { useEffect, useRef } from "react";
import styles from "./Footer.module.css";

export default function Footer() {
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
    <footer className={styles.footer} ref={sectionRef}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.contactInfo} animate-on-scroll`}>
          <h2 className={styles.title}>Visit Our Showroom</h2>
          <p className={styles.address}>
            <strong>Hi Land Interiors</strong><br />
            50 Mandalay Drive<br />
            Winnipeg, MB
          </p>
          <a href="tel:2049520254" className={styles.phone}>(204) 952-0254</a>
          
          <div className={styles.socials}>
            <a href="https://www.instagram.com/hilandinteriors/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Instagram</a>
            <a href="https://www.tiktok.com/@hilandinteriors" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>TikTok</a>
            <a href="https://www.facebook.com/profile.php?id=61570692601234" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>Facebook</a>
          </div>
          
          <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className={`btn-primary ${styles.cta}`}>Get Directions</a>
        </div>
        
        <div className={`${styles.mapContainer} animate-on-scroll delay-200`}>
          {/* Google Maps Embed Placeholder */}
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
        <p>&copy; {new Date().getFullYear()} Hi Land Interiors. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.7 }}>Proudly Canadian. Locally Owned & Operated in Winnipeg, Manitoba.</p>
      </div>
    </footer>
  );
}
