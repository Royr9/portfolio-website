import React, { useState } from 'react'
import GlowingFillButton from '../library/library_components/glowing_fill_button/GlowingFillButton';
import { ProjectsObjectType } from '../db/projects';



export default function ProjectContainer({...props} : ProjectsObjectType) {

    const [currentBg, setCurrentBg] = useState<string>(props.image);

  return (
    <div
    onMouseOver={()=> setCurrentBg(props.themeBackground)} 
    onMouseOut={()=>setCurrentBg(props.image)}
    style={{background: currentBg, transition: ' 0.8s ease-in-out'}}
     className='card-center ProjectContainer'>
        {props.logo}
        <div className='hover-content'>
          <p>{props.description}</p>
          <div className='tech-used'>
            {props.techUsed.map((tech)=>{
                return(
                    <span>{tech}</span>
                )
            })}
          </div>
          <div className='buttons-div'>
          <GlowingFillButton Element='a' colorClass='glow-btn-mint '>To Website</GlowingFillButton>
          <GlowingFillButton Element='a' colorClass='glow-btn-mint '>Git Repo</GlowingFillButton>

          </div>
          
        </div>
        
      
    </div>
  )
}
