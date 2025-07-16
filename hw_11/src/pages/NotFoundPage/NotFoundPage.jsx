import { useLocation, Link } from "react-router-dom";

import Button from "/src/shared/components/Button/Button";

import styles from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  const location = useLocation();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>page "{location.pathname}" not found</p>
      <Link to={"/"}>
        <Button className={styles.button} type="button">
          Home
        </Button>
      </Link>
    </div>
  );
}
