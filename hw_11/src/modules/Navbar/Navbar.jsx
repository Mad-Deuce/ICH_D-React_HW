import { NavLink } from "react-router-dom";

import { menu } from "./menu";

import styles from "./Navbar.module.css";

const elements = menu.map(({ title, link }) => (
  <li key={title} className={styles.menuItem}>
    <NavLink className={styles.link} to={link}>{title}</NavLink>
  </li>
));

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div></div>
      <ul className={styles.menu}>{elements}</ul>
      <div></div>
    </div>
  );
}
