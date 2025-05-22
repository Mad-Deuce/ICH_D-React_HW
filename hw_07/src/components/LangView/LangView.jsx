import { useContext } from "react";

import { langContext } from "/src/context/LangProvider";
import  locale  from "/src/locale/langViewLocale.js";

import styles from "./LangView.module.css";

export default function LangView() {
  const { currentLang } = useContext(langContext);

  return <p className={styles.text}> {locale[currentLang].message} </p>;
}
