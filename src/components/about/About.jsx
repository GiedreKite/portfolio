import React, { useContext } from 'react';

import { LanguageContext } from '../language/LanguageContext'; 
import free from './img/free.jpg';
import freedom from './img/freedom.jpg';
import freee from './img/freee.jpg';
import careme from './img/careme.jpg';
import freetime from './img/freetime.jpg';
import fre from './img/fre.jpg';
import I from './img/I.jpg';
import moletai from './img/moletai.jpg';
import bum from './img/bum.jpg';

import Header from '../header/Header';
import style from './About.module.css';
import Photo from '../photo/Photo';


export default function About() {
const { language, translations } = useContext(LanguageContext); 


return(   <>
<Header/>
<h2 className={style.text}>{translations[language].aboutMe}</h2>  
<div className={style.container}>
     
  <div className={style.img}>
  <Photo src={moletai} alt="My Photo" />
  </div>
  <div className={style.text}>
  <p>{translations[language].aboutMe1}</p>  
   </div>

<div className={style.img}>
<Photo src={I} alt="My Photo" />
</div>
</div>
<div className={style.container}>

<div className={style.text}>
<p>{translations[language].aboutMe2}</p>  
</div>
<div className={style.img}>
<Photo src={careme} alt="My Photo" />
</div>

<div className={style.text}>
<p>{translations[language].aboutMe3}</p>  
</div>
</div>
<div className={style.container}>
<div className={style.img}>
<Photo src={freetime} alt="My Photo" />
</div>

<div className={style.text}>
  <p>{translations[language].aboutMe4}</p>  
</div>
<div className={style.img}>
<Photo src={fre} alt="My Photo" />
</div>
</div>
<div className={style.container}>
<div className={style.text}>
<p>{translations[language].aboutMe5}</p>  
</div>
<div className={style.img}>
<Photo src={freedom} alt="My Photo" />
</div>

<div className={style.text}>
<p>{translations[language].aboutMe6}</p>  
</div>
</div>
<div className={style.container}>
<div className={style.img}>
<Photo src={freee} alt="My Photo" />
</div>

<div className={style.text}>
<p>{translations[language].aboutMe7}</p>  
</div>
<div className={style.img}>
<Photo src={bum} alt="My Photo" />
</div>
</div>
<div className={style.container}>
<div className={style.text}>
<p>{translations[language].aboutMe8}</p>  

</div>








</div>

</>
                

) };