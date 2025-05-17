import { createContext, useState } from "react";

import langs from "/src/data/langs";

export const langContext = createContext([]);

export default function LangProvider({ children }) {
  const [currentLang, setCurrentLang] = useState(langs[0]);

  const switchLang = (key) => {
    setCurrentLang(langs.find((item) => item.key === key));
  };

  return (
    <langContext.Provider value={{ langs, currentLang, switchLang }}>
      {children}
    </langContext.Provider>
  );
}
