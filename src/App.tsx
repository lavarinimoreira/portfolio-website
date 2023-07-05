import { Outlet } from "react-router-dom";

import LanguageContext, { languages } from "./contexts/language-context";
import useLanguage from "./hooks/useLanguage";
import { Theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/global";
import EnglishNavBar from "./components/english/nav-bar";
import PortugueseNavBar from "./components/portuguese/nav-bar";

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
        {language === languages.english ? (
          <EnglishNavBar toggleLanguage={toggleLanguage} />
        ) : (
          <PortugueseNavBar toggleLanguage={toggleLanguage} />
        )}
        <Outlet />
        <GlobalStyle />
      </LanguageContext.Provider>
    </Theme>
  );
}

export default App;
