

import style from './MainPage.module.css';
import photo from './photo.jpg'
import Header from '../header/Header';
import translations from '../language/translations.js';
import Language from '../language/LanguageSwitcher.jsx'
import Footer from '../footer/Footer.jsx';

import React, { useContext } from 'react';
import { LanguageContext } from '../language/LanguageContext'; 






    export default function MainPage() {
        const { language, translations } = useContext(LanguageContext); 
      
        
   
        return <>
        <Header/>
      
        <main className={style.container}>
            <h1>{translations[language].welcome}</h1>
            <h3>{translations[language].description}</h3>
     <h3 className={style.name}>{translations[language].name} Giedrė Narvilaitė</h3>     
     <img className={style.photo} src={photo} alt="photo" />

        </main>

        <Footer/>
        
        </>
    
    }
   
   
  
    
    
