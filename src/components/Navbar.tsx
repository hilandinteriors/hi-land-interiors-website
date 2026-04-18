"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
        
        <div className={styles.navLinks}>
          <Link href="/#products" className={styles.link}>Products</Link>
          <Link href="/#installation" className={styles.link}>Installation</Link>
          <Link href="/#portfolio" className={styles.link}>Portfolio</Link>
          <Link href="/#b2b" className={styles.link}>B2B Supply</Link>
        </div>
        
        <a href="tel:2049520254" className={`btn-primary ${styles.ctaButton}`}>
          Call Us Now
        </a>
      </div>
    </nav>
  );
}
