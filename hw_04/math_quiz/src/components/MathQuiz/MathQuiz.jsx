import { useState } from "react";
import Answer from "/src/components/Answer/Answer";

import styles from "./MathQuiz.module.css";

const getRandomNumber = () => {
  let result = Math.round(Math.random() * (10 - 1) + 1) / 1;
  return result;
};

export default function MathQuiz() {
  const [points, setPoints] = useState(0);

  const a = getRandomNumber();
  const b = getRandomNumber();

  const handleAnswer = (answer) => {
    setPoints((prevPoints) => prevPoints + (a + b === answer ? 1 : -1));
  };

  return (
    <div className={styles.form}>
      <p className={styles.points}>Ваши очки: {points}</p>
      <p className={styles.task}>
        {a} + {b} = ?
      </p>
      <Answer handleAnswer={handleAnswer} />
    </div>
  );
}
