"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#o-nama", label: "O nama" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kontakt", label: "Kontakt" },
];

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
      <a href="#hero" className={styles.logo}>
        Cvjetni design Daniela
      </a>
      <nav className={styles.nav} aria-label="Glavna navigacija">
        <ul className={styles.navList}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.navLink}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#kontakt" className={styles.cta}>
              Zatraži ponudu
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
