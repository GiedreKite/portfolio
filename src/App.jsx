import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/contact/Contact'
import MainPage from './components/mainPage/MainPage';
import Project from './components/projects/Project';
import Work from './components/works/Work';
import { NotFound } from './components/notfound/NotFound';
import About from './components/about/About';
import { LanguageProvider } from './components/language/LanguageContext';
import LanguageSwitcher from './components/language/LanguageSwitcher';
import OtherComponent from './components/language/OtherComponent';
import Education from './components/education/Education';
import { ThemeProvider } from './components/themeContext/ThemeContext';



// import style from './App.css'

export default function App() {
  return (

    <LanguageProvider>
      <ThemeProvider>

        <BrowserRouter>
          <Routes>

            <Route path='/home' element={ <MainPage /> }></Route>
            <Route path='/contact' element={ <Contact /> }></Route>

            <Route path='/about' element={ <About /> }></Route>
            <Route path='/education' element={ <Education /> }></Route>
            <Route path='/project' element={ <Project /> }></Route>
            <Route path='/work' element={ <Work /> }></Route>


          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>

  );
}