import { useContext } from 'react';
import EnglishProjects from '../components/english/projects';
import PortugueseProjects from '../components/portuguese/projects';
import LanguageContext, { languages } from '../contexts/language-context';

export default function CertificationsPage() {
    const language = useContext(LanguageContext);

    return language === languages.english ? <EnglishProjects /> : <PortugueseProjects />;
}
