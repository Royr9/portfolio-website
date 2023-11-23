import "./video-w-btn.css"


import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseIcon from '@mui/icons-material/Pause';
import { useRef, useState } from "react";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";


type videoWithBtnProps = {
    src: string,
    PlayButtonColor?: string,
    customStyle: React.CSSProperties
}

export default function VideoWithBtn(props:videoWithBtnProps) {

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
    <div  onClick={handleVideoClick} style={props.customStyle} className="project-video-container">
              <video src={props.src} ref={videoRef} controlsList="nodownload nofullscreen noremoteplayback noremoteplayback"  loop  muted >               
          Your browser does not support the vidseo tag.
          </video>
            <PlayPauseBtn   style={{color: props.PlayButtonColor, visibility, fontSize: 60}} className="play-pause-btn"/>

          </div>
  )
}
