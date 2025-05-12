import Logo from "/src/components/Logo/Logo";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.wrapper}>
      <Logo />
    </div>
  );
}
