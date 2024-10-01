import React, { useContext } from 'react';
import { LanguageContext } from '../language/LanguageContext'; 

import Header from '../header/Header';
import style from './Work.module.css';
import Footer from '../footer/Footer';



import works from './works';


const Work = () => {


      
    const { language, translations } = useContext(LanguageContext); 
    const t = translations[language];    
   

        
        return <>
                <Header/>
        <main >
          <h1></h1>
     

     <div className={style.timeline}>
      {works.map((job) => (
        <div
          className={style.timelineItem }
          key={job.id}
        >
          <div className={style.timelineContent}>
            <div className={style.timelineLeft}>
              <h3>{t.work.position}:{job.position}</h3>
              <h4>{job.company}</h4>
              <span className={style.timelineDate}>{t.work.startDate}: {job.startDate} - {t.work.endDate}: {job.endDate}</span>
            </div>
            <div className={style.timelineRight}>
              <p>{t.work.description}: {job.description}</p>
            </div>
            <span className={style.timelineCircle}></span> {/* The circle point on the timeline */}
          </div>
        </div>
      ))}
    </div>
  
 





        </main>
        <Footer/>
        
        </>
    
    }
    export default Work;
   
