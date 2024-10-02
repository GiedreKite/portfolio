
import style from './Contact.module.css';
import git from './git.png'
import linkedin from './linkedin.png'
import Header from '../header/Header';
import Photo from '../photo/Photo';
import Footer from '../footer/Footer';


export default function Contact() {

return(   <>
<Header/>

   <h2>Giedrė Narvilaitė:</h2>     
   <Photo src={git} alt="Git" />    
   <div>Git</div>

   <Photo src={linkedin} alt="Linkedin" />

   <Footer/>
 
</>
                

) };