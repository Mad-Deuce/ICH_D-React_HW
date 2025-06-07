import styles from "./ValueDisplay.module.css";

export default function ValueDisplay({
  currentValue = "default current value",
  previousValue = "default previous value",
}) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Current Value: {currentValue}</p>
      <p className={styles.text}>Previous Value: {previousValue}</p>
    </div>
  );
}
