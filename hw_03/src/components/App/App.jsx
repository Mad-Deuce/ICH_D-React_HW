import Rating from "/src/components/Rating/Rating";
import List from "/src/components/List/List";

import styles from "./App.module.css";

export default function App() {
  return (
    <div className={styles.app}>
      <Rating />
      <List />
    </div>
  );
}
