import React, { useEffect, useState } from 'react'
import GlowingFillButton from '../library/library_components/glowing_fill_button/GlowingFillButton';
import { ProjectsObjectType } from '../db/projects';

type ProjectContainerPropsType = {
  project: ProjectsObjectType;
}

export default function NewProjectContainer({project}:ProjectContainerPropsType) {
const [isHovered, toggleIsHovered] = useState(false);

     useEffect(()=>{
   
    },[project]);

    if (!isHovered) {
        return(
            <div className='card-center'>

            </div>
        )
    }

  return (
    <div>NewProjectContainer</div>
  )
}
