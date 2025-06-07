import styles from "./TextInput.module.css";

export default function TextInput({ handleChange, ...props }) {
  return (
    <div className={styles.wrapper}>
      <input {...props} className={styles.input} onChange={handleChange}/>
    </div>
  );
}
