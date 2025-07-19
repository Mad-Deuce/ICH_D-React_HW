import { useSelector } from "react-redux";
import {  totalResultSelector } from "/src/redux/questionnaire/questionnaireSelectors";

import styles from "./Result.module.css";

export default function Result() {
  const totalResult = useSelector(totalResultSelector);
  return (
    <div className={styles.result}>
      <p className={styles.text}>Your Score: {totalResult}</p>
    </div>
  );
}
