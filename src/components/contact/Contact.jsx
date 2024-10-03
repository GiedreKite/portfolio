import React, { useContext, useState, useEffect } from 'react';
import { LanguageContext } from '../language/LanguageContext'; 

import style from './Contact.module.css';
import git from './git.png'
import linkedin from './linkedin.png'
import Header from '../header/Header';
import Photo from '../photo/Photo';
import Footer from '../footer/Footer';
import '../text/textLeft.css';
import '../text/textRight.css';

export default function Contact() {
   const { language, translations } = useContext(LanguageContext); 
   const [visible, setVisible] = useState(false);
   

   useEffect(() => {
     setTimeout(() => {
       setVisible(true);
     }, 500); // Optional delay
   }, []);

return(   <>
<Header/>
<main>



<div className={style.section1}>
   <div className={`text ${visible ? 'slide-in-right' : 'hidden'}`}>
      <div className={style.card}>
            <div className={style.cf}>
               <p className={`text ${visible ? 'slide-in-right' : 'hidden'}`}> {translations[language].contactMe}
               </p>
               <br />

               <p className={`text ${visible ? 'slide-in-left' : 'hidden'}`}>  Git
               </p>
         </div>
            <div className={style.cb}>
               <Photo src={git} alt="Git" />  
            </div>
        </div>
   </div>
   <div className={`text ${visible ? 'slide-in-left' : 'hidden'}`}>
   <div className={style.card}>
            <div className={style.cf}>
            <p className={`text ${visible ? 'slide-in-right' : 'hidden'}`}> {translations[language].contactMe}
               </p>
               <br />

               <p className={`text ${visible ? 'slide-in-left' : 'hidden'}`}>  Linkedin
               </p>
            </div>
            <div className={style.cb}>
            <Photo src={linkedin} alt="Linkedin" />
            </div>
            
        </div>
   </div>
    
   <div className={`text ${visible ? 'slide-in-right' : 'hidden'}`}>
        <div className={style.card}>
            <div className={style.cf}>Giedrė Narvilaitė: <br /> 
             Email: giedre.narvilaite@gmail.com <br /> 
             {translations[language].contactMe1}  <br /> 
             +370 67 669 034 <br /> 
             {translations[language].contactMe2} <br /> 
             FB - Giedrė Narvilaitė <br /> 
             Linkedin - Giedrė Narvilaitė 

</div>
            <div className={style.cb}>  {translations[language].contactMe3} </div>
        </div>
        </div>
        </div>

        </main>

<Footer/>


 
</>
                

) };