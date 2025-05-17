import LangProvider from "/src/context/LangProvider";

import LangSelector from "/src/components/LangSelector/LangSelector";
import LangView from "/src/components/LangView/LangView";

export default function App() {
  return (
    <LangProvider>
      <LangSelector />
      <LangView />
    </LangProvider>
  );
}
