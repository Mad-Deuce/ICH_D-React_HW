import { useContext } from "react";

import { langContext } from "/src/context/LangProvider";
import locale from "/src/locale/langSelectorLocale.js";

import styles from "./LangSelector.module.css";

export default function LangSelector() {
  const { langs, switchLang } = useContext(langContext);

  const options = langs.map((item) => (
    <option key={item} value={item}>
      {locale[item].value}
    </option>
  ));

  return (
    <select
      className={styles.select}
      onChange={() => switchLang(event.target.value)}
    >
      {options}
    </select>
  );
}
