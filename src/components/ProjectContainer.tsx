import React, { useEffect, useState } from 'react'
import GlowingFillButton from '../library/library_components/glowing_fill_button/GlowingFillButton';
import { ProjectsObjectType } from '../db/projects';


type ProjectContainerPropsType = {
  project: ProjectsObjectType;
}



export default function ProjectContainer({project}:ProjectContainerPropsType) {
  
    const [isHovered, toggleIsHovered] = useState(false);
    const [currentBg, setCurrentBg] = useState<string>(project.image);

    useEffect(()=>{
      setCurrentBg(project.image);
    },[project]);

  return (
    <div
    style={{background: currentBg}}
    onMouseOver={()=> {setCurrentBg(project.themeBackground); toggleIsHovered(true)}} 
    onMouseOut={()=>{setCurrentBg(project.image); toggleIsHovered(false);}}
    className={`card-center ProjectContainer w-100  p-0  position-relative  ${isHovered && "appear-smooth animate--fast" }`}>
        
        {project.logo}
        <div className='hover-content'>
          <p>{project.description}</p>
          <div className='tech-used'>
            {project.techUsed.map((tech)=>{
                return(
                    <span>{tech}</span>
                )
            })}
          </div>
          <div className='buttons-div'>
          <GlowingFillButton rel='noopener' target='_blank' Element='a' href={project.websiteLink}  colorClass='glow-btn-mint '>To Website</GlowingFillButton>
          {project.githubLink &&   <GlowingFillButton rel='noopener' target='_blank' Element='a' href={ project.githubLink} colorClass='glow-btn-mint '>Git Repo</GlowingFillButton>
}
         
          </div>
          
        </div>
        
      
    </div>
   
  )
}
