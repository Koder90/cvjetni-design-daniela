import styles from "./Usluge.module.css";

const services = [
  {
    title: "Vjenčanja",
    description:
      "Kompletna cvjetna oprema vjenčanja: buketi, dekoracije crkve i dvorane, aranžmani za stolove i sve što vaš dan učini nezaboravnim.",
    image: "/images/buketi/634069810_1441933254261937_3415247219588882590_n.jpg",
  },
  {
    title: "Buketi za sve prigode",
    description:
      "Rođendani, godišnjice, iznenađenja i svakodnevna radost — buketi prilagođeni prigodi i vašem ukusu.",
    image: "/images/buketi/634525993_887174587640907_3885394920025757697_n.jpg",
  },
  {
    title: "Cvjetni aranžmani i dekoracije",
    description:
      "Dekoracije za proslave, korporativne događaje i sve vrste svečanosti. Od jednostavnih do raskošnih aranžmana.",
    image: "/images/dekoracije/633278175_1689830905721680_9039982770617260291_n.jpg",
  },
];

export default function Usluge() {
  return (
    <section className={styles.section} id="usluge">
      <h2 className={styles.heading}>Usluge</h2>
      <div className={styles.grid}>
        {services.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.imageWrap}>
              <img
                src={item.image}
                alt=""
                width={400}
                height={300}
              />
            </div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
