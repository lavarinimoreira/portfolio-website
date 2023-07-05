import { useContext } from "react";
import EnglishHome from "../components/english/home";
import PortugueseHome from "../components/portuguese/home";
import LanguageContext, { languages } from "../contexts/language-context";

export default function HomePage() {
  const language = useContext(LanguageContext);

  return language === languages.english ? <EnglishHome /> : <PortugueseHome />;
}
