import { useId } from "react";

import styles from "./Input.module.css";

export default function Input({ label, ...props }) {
  const id = useId();

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>{label}</label>
      <input className={styles.input} {...props} id={id} />
    </div>
  );
}
