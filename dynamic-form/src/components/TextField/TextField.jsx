import { useId } from "react";

import styles from "./TextField.module.css";

export default function TextField({
  label,
  register,
  name,
  rules,
  error,
  ...props
}) {
  const id = useId();

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        {...register(name, rules)}
        {...props}
      />
      {error && <p className={styles.error}>{error.message}</p>}
    </div>
  );
}
