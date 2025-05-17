import { useContext } from "react";

import { langContext } from "/src/context/LangProvider";

import styles from "./LangSelector.module.css";

export default function LangSelector() {
  const langCtx = useContext(langContext);

  const options = langCtx.langs.map(({ key, title }) => (
    <option key={key} value={key}>
      {title}
    </option>
  ));

  return (
    <select
      className={styles.select}
      onChange={() => langCtx.switchLang(event.target.value)}
    >
      {options}
    </select>
  );
}
