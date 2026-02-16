import styles from "./Usluge.module.css";

const services = [
  {
    title: "Vjenčanja",
    description:
      "Kompletna cvjetna oprema vjenčanja: buketi, dekoracije crkve i dvorane, aranžmani za stolove i sve što vaš dan učini nezaboravnim.",
    image: "/images/pexels-asadphoto-169196.jpg",
  },
  {
    title: "Buketi za sve prigode",
    description:
      "Rođendani, godišnjice, iznenađenja i svakodnevna radost — buketi prilagođeni prigodi i vašem ukusu.",
    image: "/images/pexels-sara-734725946-27102252.jpg",
  },
  {
    title: "Cvjetni aranžmani i dekoracije",
    description:
      "Dekoracije za proslave, korporativne događaje i sve vrste svečanosti. Od jednostavnih do raskošnih aranžmana.",
    image: "/images/pexels-storiesofdesign-16660106.jpg",
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
