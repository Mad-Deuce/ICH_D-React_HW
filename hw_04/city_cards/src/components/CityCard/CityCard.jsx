import styles from "./CityCard.module.css";

export default function CityCard({ city }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{city?.name}</h3>
      <div className={styles.imgContainer}>
        <img src={city?.imageUrl} alt={city?.name} className={styles.image} />
      </div>
      <p className={styles.description}>{city?.description}</p>
      <ul className={styles.factList}>
        {city?.facts.map((fact, index) => (
          <li key={index} className={styles.factItem}>
            {fact}
          </li>
        ))}
      </ul>
    </div>
  );
}
