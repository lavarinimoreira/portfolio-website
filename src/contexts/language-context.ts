import React from 'react';

export const languages = {
    english: 'english',
    portuguese: 'portuguese',
};

const LanguageContext = React.createContext(languages.english);

export default LanguageContext;
