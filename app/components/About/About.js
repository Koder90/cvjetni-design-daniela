import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section} id="o-nama">
      <div className={styles.inner}>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>O nama</h2>
          <p className={styles.body}>
            Posvećeni smo stvaranju cvjetnih aranžmana koji oplemenjuju vaše
            najvažnije trenutke. Svaki buket i dekoracija nastaju s pažnjom na
            detalj, materijal i osjećaj — jer vjerujemo da cvijeće govori jezikom
            emocija i da posebni dani zaslužuju poseban pristup. Radimo s
            klijentima u Splitu i okolici te s onima koji traže autentičan,
            profinjen cvjetni dizajn za vjenčanja i sve vrste proslava.
          </p>
        </div>
        <picture>
          <div className={styles.imageWrap}>
            <img
              src="/images/pexels-esra-salturk-1165434438-27140162.jpg"
              alt="Cvjetni aranžman"
              width={800}
              height={600}
            />
          </div>
        </picture>
      </div>
    </section>
  );
}
