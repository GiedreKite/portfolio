
import React, { useContext, useState, useEffect } from 'react';
import style from './MainPage.module.css';
import photo from './img/photo.jpg';
import logo from './img/logo.png';
import Header from '../header/Header';
import translations from '../language/translations.js';
import Language from '../language/LanguageSwitcher.jsx'
import Footer from '../footer/Footer.jsx';
import '../text/textLeft.css';
import '../text/textRight.css';

import { LanguageContext } from '../language/LanguageContext'; 






    export default function MainPage() {
        const { language, translations } = useContext(LanguageContext); 
      
        const [visible, setVisible] = useState(false);
   

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 500); // Optional delay
  }, []);

        return <>
        <Header/>
      
        <main>
            <div className={style.container}>
            <img className={style.photo} src={logo} alt="logo" />
            <div className={style.welcome}>
            <h1 className={`text ${visible ? 'slide-in-left' : 'hidden'}`}>{translations[language].welcome}</h1>
            </div>
            <div className={style.description}>
            <h1 className={`text ${visible ? 'slide-in-right' : 'hidden'}`}>{translations[language].description}</h1>
            </div>
           
         
           
            </div>
            <div className={style.container}>
           
     <h3 className={style.name}>{translations[language].name} Giedrė Narvilaitė</h3>     
     <img className={style.img} src={photo} alt="photo" />
            </div>
           
      

        </main>

        <Footer/>
        
        </>
    
    }
   
   
  
    
    
