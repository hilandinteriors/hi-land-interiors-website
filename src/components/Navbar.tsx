"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} glass`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logoLink}>
          <Image 
            src="/images/logo.png" 
            alt="Hi Land Interiors Logo" 
            width={300} 
            height={100} 
            className={styles.logoImage}
            priority
          />
        </Link>
        
        <div className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <Link href="/#products" className={styles.link} onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/#installation" className={styles.link} onClick={() => setIsOpen(false)}>Installation</Link>
          <Link href="/#portfolio" className={styles.link} onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/#b2b" className={styles.link} onClick={() => setIsOpen(false)}>B2B Supply</Link>
          <div className={styles.mobileActions}>
            <a href="tel:2049520254" className={`btn-secondary ${styles.mobileLink}`}>
              Call Us
            </a>
            <Link href="/quote" className={`btn-primary ${styles.mobileLink}`} onClick={() => setIsOpen(false)}>
              Get Quote
            </Link>
          </div>
        </div>
        
        <div className={styles.rightNav}>
          <div className={styles.desktopActions}>
            <a href="tel:2049520254" className={styles.phoneLink}>
              (204) 952-0254
            </a>
            <Link href="/quote" className="btn-primary">
              Get a Quote
            </Link>
          </div>
          <button 
            className={`${styles.hamburger} ${isOpen ? styles.open : ""}`} 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
