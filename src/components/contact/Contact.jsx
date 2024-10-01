import { Link } from 'react-router-dom'
import style from './Contact.module.css';
import git from './git.png'
import linkedin from './linkedin.png'
import Header from '../header/Header';


export default function Contact() {

return(   <>
<Header/>
   <h2>Giedrė Narvilaitė:</h2>         
   <div>Git</div>
   <img className={style.logo} src={git} alt="git" />
   <div>Linkedin</div><img className={style.logo} src={linkedin} alt="linkedin" />
</>
                

) };