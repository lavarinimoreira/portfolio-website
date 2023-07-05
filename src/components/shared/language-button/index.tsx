import LanguageContext, { languages } from '../../../contexts/language-context';
import { Container } from './styles';
import '/node_modules/flag-icons/css/flag-icons.min.css';

import { useContext } from 'react';

interface LanguageSelectorProps {
    toggleLanguage: () => void;
}

function LanguageSelector({ toggleLanguage }: LanguageSelectorProps) {
    const language = useContext(LanguageContext);

    return (
        <Container type='button' onClick={toggleLanguage}>
            {language === languages.portuguese ? (
                <span className='fi fi-br'></span>
            ) : (
                <span className='fi fi-gb'></span>
            )}
        </Container>
    );
}

export default LanguageSelector;
