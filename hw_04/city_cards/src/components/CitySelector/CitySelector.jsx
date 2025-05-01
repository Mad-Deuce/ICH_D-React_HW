import cities from "/src/data/cities";

import styles from "./CitySelector.module.css";

export default function CitySelector({ handleCityChange }) {
  const handleSelectChange = (event) => {
    handleCityChange(cities[event.target.value]);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Выберите город:</h2>
      <select name="" className={styles.select} onChange={handleSelectChange}>
        <option className={styles.option}> </option>
        {cities.map((city, index) => (
          <option key={index} value={index} className={styles.option}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}
