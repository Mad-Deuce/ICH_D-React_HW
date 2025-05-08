import styles from "./Btn.module.css";

export default function Btn({ href = "/", children }) {
  return (
    <a href={href} className={styles.link}>
      {children}
    </a>
  );
}
