import { useContext } from "react";

import { langContext } from "/src/context/LangProvider";

import styles from "./LangView.module.css";

export default function LangView() {
  const langCtx = useContext(langContext);

  return <p className={styles.text}> {langCtx.currentLang.message} </p>;
}
