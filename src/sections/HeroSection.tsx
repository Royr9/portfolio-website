//css 
import GlowingFillButton from "../library/library_components/glowing_fill_button/GlowingFillButton";
import "./hero.css";

//imports
import { Button} from 'react-bootstrap';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';
import { useRef, useState } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export default function HeroSection() {
const videoRef = useRef<HTMLVideoElement>(null);

const [PlayPauseBtn, setPlayPauseButton] = useState<OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
}>(PlayCircleIcon);

const[visibility, setVisibility] = useState<"visible" | "hidden">("visible");
const [timeoutId,setTimeoutId] = useState<number | NodeJS.Timeout | null>(null);

const handleVideoClick = ()=>{
const video = videoRef.current;

  if (video?.paused) {
    video.play();
    setVisibility("visible");
    setPlayPauseButton(PauseIcon);
  }else{
    video?.pause();
    setVisibility("visible");
    setPlayPauseButton(PlayCircleIcon);
  }
if (timeoutId) {
  clearTimeout(timeoutId);
}

  const newTimeoutId = setTimeout(() => {
      setVisibility('hidden');
    }, 2000);

    setTimeoutId(newTimeoutId);
}

 



  return (
      <section id='hero-section'>
        <div className='hero-title'>
        <h1>I AM ROY</h1>
         <i className="bi bi-play-btn"></i>
        <h2>Full-Stack Web Developer</h2>
        <h4>On a mission to create apps that will
          make the world a better place</h4>
          <div className="title-buttons">
          
          <GlowingFillButton href="/media/Roy-CV.pdf" download="Roy-CV.pdf" Element="a">Download CV</GlowingFillButton>
          <GlowingFillButton Element="button">View my work</GlowingFillButton>

          </div>
          
        </div>
        <div className="projects-teaser">
          <div  onClick={handleVideoClick} className="project-video">
              <video ref={videoRef} loop  muted playsInline>
            <source src="/media/videos/gyz-video.mp4" type="video/mp4"/>
           
          Your browser does not support the video tag.
          </video>
            <PlayPauseBtn fontSize="large" style={{color: "white", visibility}} className="play-pause-btn"/>

          </div>
      
          <img src="" alt="" />
           <img src="" alt="" />
          <img src="/media/images/aguamar-store.png" alt="" />
         
        </div>


      </section>
   

  
  )
}
