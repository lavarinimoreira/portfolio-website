import { useContext } from 'react';
import EnglishGallery from '../components/english/gallery';
import PortugueseGallery from '../components/portuguese/gallery';
import LanguageContext, { languages } from '../contexts/language-context';

export default function GalleryPage() {
    const language = useContext(LanguageContext);

    return language === languages.english ? <EnglishGallery /> : <PortugueseGallery />;
}
