import React, { useContext } from 'react';
import { LanguageContext } from '../language/LanguageContext'; 

import style from './Contact.module.css';
import git from './git.png'
import linkedin from './linkedin.png'
import Header from '../header/Header';
import Photo from '../photo/Photo';
import Footer from '../footer/Footer';


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

<div className={style.section1}>
        <div className={style.card}>
            <div className={style.cf}>
               <p>
                  </p>
                  <p className={`text ${visible ? 'slide-in' : 'hidden'}`}>
                     </p>
                     {translations[language].contactMe} Git</div>
            <div id="lietus" className={style.cb}>
            <Photo src={git} alt="Git" />  
            </div>
        </div>
        <div className={style.card}>
            <div className={style.cf}>{translations[language].contactMe} Linkedin</div>
            <div className={style.cb}>
            <Photo src={linkedin} alt="Linkedin" />
            </div>
            
        </div>
        <div className={style.card}>
            <div className={style.cf}>Giedrė Narvilaitė: <br /> </div>
            <div className={style.cb}>+370 67 669 034</div>
        </div>
        </div>





 
</>
                

) };