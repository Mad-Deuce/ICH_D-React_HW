import { useState, useEffect } from "react";
import styles from "./ListItems.module.css";

export default function ListItems() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("Component ListItems was updated");
  }, []);

  const addItem = () => {
    if (inputValue === "") return setError("the field cannot be empty");
    setItems((prev) => [...prev, inputValue]);
    setInputValue("");
    setError("");
  };

  const elements = items.map((item, index) => (
    <li key={index} className={styles.item}>
      {item}
    </li>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          placeholder={error}
          onChange={() => setInputValue(event.target.value)}
        />
        <button className={styles.button} type="button" onClick={addItem}>
          Add item
        </button>
      </div>
      <ul className={styles.list}>{elements}</ul>
    </div>
  );
}
