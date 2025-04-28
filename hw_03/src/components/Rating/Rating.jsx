import { useState } from "react";

import ratingList from "/src/data/ratingList.js";

import styles from "./Rating.module.css";

export default function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  function handleClick(index) {
    setRatingValue(index);
  }

  const buttons = ratingList.map((_, index) => {
    return (
      <button
        key={index}
        onClick={() => handleClick(index)}
        className={styles.btn}
      >
        {index} stars
      </button>
    );
  });

  return (
    <div>
      <img src={ratingList[ratingValue]} alt="" className={styles.img} />
      <div className={styles.btnsContainer}>{buttons}</div>
    </div>
  );
}
