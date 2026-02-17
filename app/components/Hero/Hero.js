import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.section} id="hero">
      <div className={styles.bgWrap}>
        <img
          className={styles.bgImage}
          src="/images/buketi/hero.jpg"
          alt=""
          width={1920}
          height={1280}
          fetchPriority="high"
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <h1 className={styles.title}>Cvjetni design Daniela</h1>
        <p className={styles.subtitle}>
          Cvjećarnica za vjenčanja i sve prigode
        </p>
        <a href="#kontakt" className={styles.cta}>
          Zatraži ponudu
        </a>
      </div>
    </section>
  );
}
