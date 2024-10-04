import React, { useContext } from 'react';
import { LanguageContext } from '../language/LanguageContext'; 
import logo from './img/logo.png';
import { Link } from 'react-router-dom'
import style from './Header.module.css'
import LanguageSwitcher from '../language/LanguageSwitcher';
import { ThemeContext } from '../themeContext/ThemeContext';



export default function Header() {
    const { language, translations } = useContext(LanguageContext); 
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
            <header className={`header ${theme}`}>
            
            <img className={style.img} src={logo} alt="logo" />

                        <Link to="/" className={style.link}>{translations[language].home}</Link>
                  
                        <Link to="/contact" className={style.link}>{translations[language].contact}</Link>
                    
                        <Link to="/about" className={style.link}>{translations[language].about}</Link>
                   
                        <Link to="/project" className={style.link}>{translations[language].projects}</Link>

                        <Link to="/education" className={style.link}>{translations[language].education}</Link>

                        <Link to="/work" className={style.link}>{translations[language].workplaces}</Link>               

      
      {/* Buttons to toggle theme */}
      <button onClick={() => toggleTheme("light")}>Light Mode</button>
      <button onClick={() => toggleTheme("dark")}>Dark Mode</button>
                        <LanguageSwitcher/>
 
            </header>
    );
}