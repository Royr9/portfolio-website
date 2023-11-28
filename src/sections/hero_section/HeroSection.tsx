//css 
import "./hero.css";


//imports
import VideoWithBtn from "../../components/video_w_btn/VideoWithBtn";
import HeadingAnimated from "../../library/library_components/HeadingAnimated";
import GlowingFillButton from "../../library/library_components/glowing_fill_button/GlowingFillButton";
import { Container } from "react-bootstrap";
import AppNavbar from "../../components/AppNavbar";
import HeadingTypeErase from "../../library/library_components/HeadingTypeErase";



export default function HeroSection() {




  return (
      <section id='hero-section'>
        <AppNavbar/>
   <Container fluid className="hero-section-container">

        <div className='hero-title'>
          <h1><span className="appear-smooth animate--fillBackwards">I</span> <span className="appear-smooth animate--delay1s animate--fillBackwards">AM</span>
           <span className="appear-smooth animate--delay2s animate--fillBackwards"> ROY</span> </h1>
          <HeadingTypeErase firstText="A Full-Stack Web Developer" secondText="An Entrepreneur"  Element="h2"/>
           {/* <HeadingAnimated  Element="h2" delay="animate--slower">
            Full-Stack Web Developer
          </HeadingAnimated> */}
        <h4>On a mission to create apps that will
          make the world a better place</h4>
          <div className="title-buttons">
          
          <GlowingFillButton href="/media/Roy-CV.pdf" download="Roy-CV.pdf" Element="a">Download CV</GlowingFillButton>
          <GlowingFillButton Element="button">View my work</GlowingFillButton>

          </div>
          
        </div>
         
           </Container>
      </section>
   

  
  )
}
