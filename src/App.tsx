import { Outlet } from "react-router-dom";

import LanguageContext, { languages } from "./contexts/language-context";
import useLanguage from "./hooks/useLanguage";
import { Theme } from "./styles/Theme";

function App() {
  const [language, setLanguage] = useLanguage(
    "language",
    navigator.language === "pt-BR" ? languages.portuguese : languages.english
  );

  const toggleLanguage = () => {
    language === languages.english
      ? setLanguage(languages.portuguese)
      : setLanguage(languages.english);
  };

  return (
    <Theme>
      <LanguageContext.Provider value={language}>
        <h1>website-portfolio</h1>
        <Outlet />
      </LanguageContext.Provider>
    </Theme>
  );
}

export default App;
