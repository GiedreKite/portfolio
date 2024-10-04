import React, { useContext, useState, useEffect } from 'react';

import Header from '../header/Header';
import style from './Project.module.css';
import { ThemeContext } from '../themeContext/ThemeContext.jsx';
import '../../App.css'

// import photo from './photo.jpg'




    export default function Project() {
      
        const { theme } = useContext(ThemeContext); // Get the current theme
        
   

        
        return <>
        <Header/>
        <main className={`page ${theme}`}>
     <h1 className={style.name}>Projektai:</h1>     
     {/* <img className={style.photo} src={photo} alt="photo" /> */}

        </main>
        
        </>
    
    }
   
   
  