"use client";

import styles from "./Kontakt.module.css";

export default function Kontakt() {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className={styles.section} id="kontakt">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Kontakt i narudžbe</h2>
        <p className={styles.subheading}>
          Pošaljite upit — posebno vas pozivamo na upite za vjenčanja.
        </p>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div>
            <label className={styles.label} htmlFor="name">
              Ime i prezime
            </label>
            <input
              className={styles.input}
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="message">
              Poruka
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              name="message"
              required
              rows={5}
            />
          </div>
          <button type="submit" className={styles.submit}>
            Pošalji upit
          </button>
        </form>
        <div className={styles.contactInfo}>
          <p>
            <strong>Cvjetni design Daniela</strong>
          </p>
          <p>Split i okolica</p>
          <p>Tel: +385 00 000 0000</p>
          <p>Email: info@cvjetnidesign.hr</p>
          <p className={styles.contactNote}>
            Radujemo se vašim upitima za vjenčanja i sve prigode.
          </p>
        </div>
      </div>
    </section>
  );
}
