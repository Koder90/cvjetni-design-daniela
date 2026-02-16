"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <span className={styles.name}>Cvjetni design Daniela</span>
      <a href="#kontakt" className={styles.cta}>
        Zatraži ponudu
      </a>
    </header>
  );
}
