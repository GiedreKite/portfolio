import React, { useContext } from 'react';
import { LanguageContext } from '../language/LanguageContext'; 


export default function Footer() {
    const { language, translations } = useContext(LanguageContext); 

    const title = Math.random() > 0.5
    ? translations[language].footera
    : translations[language].footerb;

    return (
      
            <footer className="">
                <p className="">&copy; 2024 Giedrė Narvilaitė</p>
<h6>{title}</h6>
            </footer>
   
    );
}