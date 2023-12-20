import React, { useEffect, useState } from 'react'
import GlowingFillButton from '../library/library_components/glowing_fill_button/GlowingFillButton';
import { ProjectsObjectType } from '../db/projects';

type ProjectContainerPropsType = {
  project: ProjectsObjectType;
}

export default function ProjectContainer({project}:ProjectContainerPropsType) {
const [isHovered, toggleIsHovered] = useState(false);


    const returnButtons = ()=>{
      if (project.isComingSoon) {
        return(
          <div className='buttons-div'>
                 <GlowingFillButton rel='noopener' target='_blank' Element='a' href={project.websiteLink}  colorClass='glow-btn-filled'>Coming Soon</GlowingFillButton>
          </div>
     
        )
      }else if (project.githubLink) {
        return (
            <div className='buttons-div'>
              <GlowingFillButton rel='noopener' target='_blank' Element='a' href={project.websiteLink}  colorClass='glow-btn-mint  '>To Website</GlowingFillButton>
              <GlowingFillButton rel='noopener' target='_blank' Element='a' href={ project.githubLink} colorClass='glow-btn-mint '>Git Repo</GlowingFillButton>
            </div>
        )
      }else{
        return(
          <div className='buttons-div'>
                 <GlowingFillButton rel='noopener' target='_blank' Element='a' href={project.websiteLink}  colorClass='glow-btn-mint  '>To Website</GlowingFillButton>
          </div>
        )
      }
    }

 

    return(
      <div onMouseOver={()=>toggleIsHovered(true)} onMouseOut={()=>toggleIsHovered(false)} className={`ProjectContainer  p-0 ${isHovered ? "": ""}`} >
       <img src={project.imageSrc} className='' alt="" />
     {isHovered && (<div className='hovered appear-smooth animate--fast'>
 <div className='hover-content'>
          <p>{project.description}</p>
          <div className='tech-used'>
            {project.techUsed.map((tech)=>{
                return(
                    <span>{tech}</span>
                )
            })}
          </div>
          {returnButtons()}
        </div>
      </div>)} 
      </div>
    )

  
}
