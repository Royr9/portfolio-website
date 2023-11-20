//css 
import "./hero.css";

//imports
import { Button} from 'react-bootstrap';

export default function HeroSection() {
  return (

      <section id='hero-section'>
        <div className='hero-title'>
        <h1>I AM ROY</h1>
        <h2>Full-stack web developer</h2>
        <h4>On a mission to create apps that will
          make the world a better place</h4>
          <div className="title-buttons">
          <Button>Download CV</Button>
          <Button>View my work</Button>
          </div>
          
        </div>
        <div className="projects-teaser">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>


      </section>
   

  
  )
}