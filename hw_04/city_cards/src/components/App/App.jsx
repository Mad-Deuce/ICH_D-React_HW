import CitySelector from "/src/components/CitySelector/CitySelector";
import CityCard from "/src/components/CityCard/CityCard";

import styles from "./App.module.css";
import { useState } from "react";

export default function App() {
  const [city, setCity] = useState();

  const handleCityChange = (city) => {
    setCity(city);
  };

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <CitySelector handleCityChange={handleCityChange} />
        <CityCard city={city} />
      </div>
    </div>
  );
}
