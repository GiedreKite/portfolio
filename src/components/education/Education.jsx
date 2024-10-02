import React, { useContext } from 'react';
import { LanguageContext } from '../language/LanguageContext'; 

import Header from '../header/Header';
import style from './Education.module.css';
import Footer from '../footer/Footer';


const Education = () => {


      
    const { language, translations } = useContext(LanguageContext); 
        
   

        
        return <>
                <Header/>
        <main >
          <h1></h1>
     

     <div className={style.timeline}>
        <div className={style.timelineItem }>
          <div className={style.timelineContent}>
            <div className={style.timelineLeft}>
              <h4>"BIT" Baltijos technologijų institutas   </h4>
              <span className={style.timelineDate}>2024-04 2024-09</span>
            </div>
            <div className={style.timelineRight}>
              <p>{translations[language].edu1}</p>
            </div>
            <span className={style.timelineCircle}></span> 
          </div>
        </div>
        <div className={style.timelineItem }>
          <div className={style.timelineContent}>
            <div className={style.timelineLeft}>
              <h4>"LAJM" Lietuvos aukštoji jūreivystės mokykla</h4>
              <span className={style.timelineDate}>2007-09 2010-07</span>
            </div>
            <div className={style.timelineRight}>
              <p>{translations[language].edu2}</p>
            </div>
            <span className={style.timelineCircle}></span> 
          </div>
        </div>
        <div className={style.timelineItem }>
          <div className={style.timelineContent}>
            <div className={style.timelineLeft}>
              <h4>"Ąžuolyno gimnazija"</h4>
              <span className={style.timelineDate}>1999-09 2007-06</span>
            </div>
            <div className={style.timelineRight}>
              <p>{translations[language].edu3}</p>
            </div>
            <span className={style.timelineCircle}></span> 
          </div>
        </div>
    </div>
 





        </main>
        <Footer/>
        
        </>
    
    }
    export default Education;
   
