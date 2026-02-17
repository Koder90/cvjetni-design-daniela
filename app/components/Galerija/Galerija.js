import styles from "./Galerija.module.css";
import { galleryCategories } from "./galleryImages";

function getItemClasses(index, total) {
  const classes = [styles.item];
  if (index % 6 === 0) classes.push(styles.spanCol);
  if (index % 5 === 2) classes.push(styles.spanRow);
  return classes.join(" ");
}

export default function Galerija() {
  return (
    <section className={styles.section} id="galerija">
      <h2 className={styles.mainHeading}>Galerija</h2>
      <div className={styles.categories}>
        {galleryCategories.map((category) => (
          <div key={category.id} className={styles.category}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>
            <div className={styles.grid}>
              {category.images.map((filename, i) => {
                const src = `${category.path}/${filename}`;
                return (
                  <div
                    key={src}
                    className={getItemClasses(i, category.images.length)}
                  >
                    <img src={src} alt="" width={500} height={500} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
