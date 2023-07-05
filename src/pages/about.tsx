import { useContext } from 'react';
import EnglishAbout from '../components/english/about';
import PortugueseAbout from '../components/portuguese/about';
import LanguageContext, { languages } from '../contexts/language-context';

export default function AboutPage() {
    const language = useContext(LanguageContext);

    return language === languages.english ? <EnglishAbout /> : <PortugueseAbout />;
}
