import { useState } from "react";
import styles from "./Answer.module.css";

export default function Answer({ handleAnswer }) {
  const [answer, setAnswer] = useState("");

  const handleInputChange = (event) => {
    setAnswer(event.target.value);
  };
  const handleBtnClick = () => {
    if (answer === "") {
      return;
    }
    if (isNaN(Number(answer))) {
      return;
    }
    handleAnswer(Number(answer));
    setAnswer("");
  };

  return (
    <>
      <input
        className={styles.inp}
        type="number"
        value={answer}
        onChange={handleInputChange}
        placeholder="Введите ответ"
      />
      <button className={styles.btn} onClick={handleBtnClick}>
        Проверить
      </button>
    </>
  );
}
