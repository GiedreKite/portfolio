// src/LanguageSwitcher.js
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext'; // Import the context
import style from './LanguageSwitcher.module.css'

const LanguageSwitcher = () => {
  const { language, changeLanguage, translations } = useContext(LanguageContext); // Access the context

  return (
    <div>
    
      <button className={style.first} onClick={() => changeLanguage('en')}>English</button>
      <button className={style.second} onClick={() => changeLanguage('lt')}>Lietuvių</button>
     
    </div>
  );
};

export default LanguageSwitcher;
