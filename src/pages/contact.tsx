import { useContext } from 'react';
import EnglishContact from '../components/english/contact';
import PortugueseContact from '../components/portuguese/contact';
import LanguageContext, { languages } from '../contexts/language-context';

export default function ContactPage() {
    const language = useContext(LanguageContext);

    return language === languages.english ? <EnglishContact /> : <PortugueseContact />;
}
