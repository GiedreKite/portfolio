// src/LanguageSwitcher.js
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext'; // Import the context

const LanguageSwitcher = () => {
  const { language, changeLanguage, translations } = useContext(LanguageContext); // Access the context

  return (
    <div>
    
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('lt')}>Lietuvių</button>
     
    </div>
  );
};

export default LanguageSwitcher;
