import ProjectContainer from "../../components/ProjectContainer";
import { ProjectsObjectType } from "../../db/projects";
import { useState, useEffect, useRef } from "react";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function ProjectsCarousel() {
    // states

const projects = ["A", "B" , "C" , "D", "E"]
const [visibleProjectsAmount, setVisibleProjectsAmount] = useState<number>({} as number);
const [currentProjects, setCurrentProjects ] = useState<string[] >([] as string[]);
const [currentProjectsCounter, setCurrentProjectsCounter] = useState<number  >(0);

// Refs
const nextArrowRef = useRef<SVGSVGElement | null>(null);
const backArrowRef = useRef<SVGSVGElement | null>(null);

// use effects //use effects //use effects //use effects //use effects //use effects //

// resize event listener
useEffect(()=>{
const handleResize = ()=>{
    const breakPoints = {
  md: 576,
  lg: 960
}
  const portWidth = window.innerWidth;
  if (portWidth > breakPoints.lg) {
    setVisibleProjectsAmount(3);
  }else if (portWidth > breakPoints.md) {
    setVisibleProjectsAmount(2);
  } else{
    setVisibleProjectsAmount(1);
  }

}

window.addEventListener("resize", handleResize);

return ()=>{
  window.removeEventListener("resize", handleResize);
}

},[])
 



// carousel effect 

useEffect(()=>{
//   console.log("counter: " + currentProjectsCounter);
// console.log("vis: " + visibleProjectsAmount);
// console.log("projects-length: " + currentProjects.length);
 


if (currentProjectsCounter === projects.length + visibleProjectsAmount ) {
  setCurrentProjectsCounter(visibleProjectsAmount);
}


if (currentProjectsCounter >= visibleProjectsAmount && currentProjectsCounter <= projects.length) {
  setCurrentProjects(projects.slice(currentProjectsCounter - visibleProjectsAmount, currentProjectsCounter));
}
// combine beginning of array with ending
else if (currentProjectsCounter > projects.length) {
  let arr1 = projects.slice(currentProjectsCounter - visibleProjectsAmount, currentProjectsCounter);
  let arr2 = projects.slice(0, currentProjectsCounter - projects.length);
  setCurrentProjects(arr1.concat(arr2));
} 


},[currentProjectsCounter, visibleProjectsAmount])


// arrow click counter changer
const handleArrowClick = (arrowIconRef: React.RefObject<SVGSVGElement | null>) => {
if (nextArrowRef === arrowIconRef) {
  setCurrentProjectsCounter(prevValue => prevValue + 1 );
}
else{ 
  
  // reset counter to back counter
  if (currentProjectsCounter === visibleProjectsAmount ) {
  setCurrentProjectsCounter(visibleProjectsAmount + projects.length - 1);
}else{
setCurrentProjectsCounter(prevValue => prevValue - 1); 
}

}
};


  return (
          <div className="row gy-4 d-flex justify-content-center projects-container">
            <  div  className="col-1">
          <NavigateBeforeIcon
            ref={backArrowRef}
              onClick={()=>handleArrowClick(backArrowRef)}
          sx={{fontSize: 50, cursor: "pointer"}}/>
          </div>   
          {currentProjects.map((project)=>{
            return(
                <div className="col " key={project}>
                    <div className="card-center ProjectContainer"> 
                        <h1 >{project}</h1>
                    </div>
                    
                </div>
            )
          })}
              
          <div className="col-1 ">
              <NavigateNextIcon 
              ref={nextArrowRef}
              onClick={()=>handleArrowClick(nextArrowRef)}
               sx={{fontSize: 50, cursor: "pointer"}}  /> 
            </div>
            </div>
  )
}


// {currentProjects.map((project, index)=>{
//           return(
//             <ProjectContainer
//             key={project.name}
//             themeBackground= {project.themeBackground}
//             image={project.image}
//             techUsed={project.techUsed}
//             logo={project.logo}
//             description={project.description}
//             websiteLink={project.websiteLink}
//             githubLink={project.githubLink && project.githubLink}
//             />
//           )
//          })}