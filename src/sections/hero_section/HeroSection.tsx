//css 
import "./hero.css";


//imports
import VideoWithBtn from "../../components/video_w_btn/VideoWithBtn";
import HeadingAnimated from "../../library/library_components/HeadingAnimated";
import GlowingFillButton from "../../library/library_components/glowing_fill_button/GlowingFillButton";



export default function HeroSection() {




  return (
      <section id='hero-section'>
        <div className='hero-title'>
          <HeadingAnimated Element="h1">
          I AM ROY
          </HeadingAnimated>
          <h2>Full-Stack Web Developer.</h2>
           {/* <HeadingAnimated Element="h2" delay="animate--delay2s animate--slower">
            Full-Stack Web Developer
          </HeadingAnimated> */}
        <h4>On a mission to create apps that will
          make the world a better place</h4>
          <div className="title-buttons">
          
          <GlowingFillButton href="/media/Roy-CV.pdf" download="Roy-CV.pdf" Element="a">Download CV</GlowingFillButton>
          <GlowingFillButton Element="button">View my work</GlowingFillButton>

          </div>
          
        </div>
        <div className="projects-teaser">
           {/* <img src="/media/images/aguamar-store.png" alt="" />
          <VideoWithBtn src="/media/videos/gyz-video.mp4" PlayButtonColor="white"/>
             <VideoWithBtn src="/media/videos/aguamaril.com.mp4" PlayButtonColor="black"/> */}
           
    
          
          <img src="/media/images/coming-soon.png" alt="" />
          <img src="/media/images/coming-soon.png" alt="" />
          <img src="/media/images/coming-soon.png" alt="" />
          <img src="/media/images/coming-soon.png" alt="" />
       

         
         
        </div>


      </section>
   

  
  )
}
