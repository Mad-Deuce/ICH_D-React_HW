import { useState } from "react";

import peopleItems from "/src/data/people.js";

import styles from "./List.module.css";

export default function List() {
  const [people, setPeople] = useState(peopleItems);

  function handleClick(index) {
    setPeople((prevPeople) => {
      return prevPeople.filter((_, i) => i !== index);
    });
  }

  const elements = people.map((item, index) => {
    return (
      <li key={item.id} className={styles.listItem}>
        <p className={styles.text}>
          {item.name} {item.age}
        </p>
        <button className={styles.btn} onClick={() => handleClick(index)}>
          Remove
        </button>
      </li>
    );
  });

  return (
    <div className={styles.container}>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
}
