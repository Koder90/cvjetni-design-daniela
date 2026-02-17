"use client";

import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const navLinks = [
  { href: "#o-nama", label: "O nama" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kontakt", label: "Kontakt" },
];

const mobileNavOrder = [
  { href: "#galerija", label: "Galerija" },
  { href: "#o-nama", label: "O nama" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

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
      <button
        type="button"
        className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Zatvori izbornik" : "Otvori izbornik"}
      >
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </button>
      <div
        className={`${styles.mobileOverlayWrap} ${menuOpen ? styles.mobileOverlayWrapOpen : ""}`}
        aria-hidden={!menuOpen}
      >
        <div className={styles.mobileBackdrop} onClick={closeMenu} aria-hidden="true" />
        <div className={styles.mobileMenuBox}>
          <ul className={styles.mobileNavList}>
            {mobileNavOrder.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={styles.mobileNavLink} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href="#kontakt" className={styles.mobileCta} onClick={closeMenu}>
                Zatraži ponudu
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
