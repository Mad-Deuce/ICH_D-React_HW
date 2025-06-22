import styles from "./Filter.module.css";

export default function Filter({ setFilter }) {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder="Input username"
      onChange={() => setFilter(event.target.value)}
    />
  );
}
