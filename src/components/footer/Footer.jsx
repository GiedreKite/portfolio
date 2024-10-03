import React, { useContext } from 'react';
import { LanguageContext } from '../language/LanguageContext'; 
import style from './Footer.module.css'

export default function Footer() {
    const { language, translations } = useContext(LanguageContext); 

    const title = Math.random() > 0.5
    ? translations[language].footera
    : translations[language].footerb;

    return (
      
            <footer className={style.footer}>
                <p className="">&copy; 2024 Giedrė Narvilaitė</p>
<h6 className={style.yellow}>{title}</h6>
            </footer>
   
    );
}