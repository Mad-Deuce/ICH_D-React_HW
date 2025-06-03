import styles from "./Title.module.css";

export default function Title({ children }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{children}</h1>
    </div>
  );
}
