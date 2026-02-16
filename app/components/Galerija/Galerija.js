import styles from "./Galerija.module.css";

const images = [
  "/images/pexels-asadphoto-169196.jpg",
  "/images/pexels-coralbellestudios-712651.jpg",
  "/images/pexels-esra-salturk-1165434438-27140162.jpg",
  "/images/pexels-jonathanborba-13617314.jpg",
  "/images/pexels-nudethephotographer-34542758.jpg",
  "/images/pexels-sara-734725946-27102252.jpg",
  "/images/pexels-soulseeker-14703685.jpg",
  "/images/pexels-storiesofdesign-16660106.jpg",
];

export default function Galerija() {
  return (
    <section className={styles.section} id="galerija">
      <h2 className={styles.heading}>Galerija</h2>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <div key={src + i} className={styles.item}>
            <img src={src} alt="" width={400} height={400} />
          </div>
        ))}
      </div>
    </section>
  );
}
