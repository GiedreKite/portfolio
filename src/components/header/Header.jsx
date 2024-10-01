import React, { useContext } from 'react';
import { LanguageContext } from '../language/LanguageContext'; 

import { Link } from 'react-router-dom'
import style from './Header.module.css'
import LanguageSwitcher from '../language/LanguageSwitcher';



export default function Header() {
    const { language, translations } = useContext(LanguageContext); 
   
    return (
            <header className="">
            
                

                        <Link to="/" className={style.link}>{translations[language].home}</Link>
                  
                        <Link to="/contact" className={style.link}>{translations[language].contact}</Link>
                    
                        <Link to="/about" className={style.link}>{translations[language].about}</Link>
                   
                        <Link to="/project" className={style.link}>{translations[language].projects}</Link>

                        <Link to="/education" className={style.link}>{translations[language].education}</Link>

                        <Link to="/work" className={style.link}>{translations[language].workplaces}</Link>               

                        <LanguageSwitcher/>
 
            </header>
    );
}