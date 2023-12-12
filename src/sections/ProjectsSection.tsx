import { Container } from "react-bootstrap";
import ProjectContainer from "../components/ProjectContainer";
import Logo from "../components/Logo";
import { ProjectsObjectType, projects } from "../db/projects";
import React, { Ref, useEffect, useRef, useState } from "react";


// icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { SvgIconTypeMap } from "@mui/material";


export default function ProjectsSection() {
// states
const [visibleProjectsAmount, setVisibleProjectsAmount] = useState<number>({} as number);
const [currentProjects, setCurrentProjects ] = useState<ProjectsObjectType[] >([] as ProjectsObjectType[]);
const [currentProjectsCounter, setCurrentProjectsCounter] = useState<number  >({} as number);
const [portWidth, setPortWidth] = useState(window.innerWidth);

const breakPoints = {
  md: 576,
  lg: 960
}

// Refs
const nextArrowRef = useRef<SVGSVGElement | null>(null);
const backArrowRef = useRef<SVGSVGElement | null>(null);

// use effects //use effects //use effects //use effects //use effects //use effects //

//first on render to set projects amount
useEffect(()=>{
  console.log(portWidth);
  
if (portWidth > breakPoints.lg ) {
  setVisibleProjectsAmount(3);
  setCurrentProjects(projects.slice(0,3));
  setCurrentProjectsCounter(3);
}else if (portWidth > breakPoints.md) {
  setVisibleProjectsAmount(2);
  setCurrentProjects(projects.slice(0,2));
  setCurrentProjectsCounter(2);
} else{ 
  setVisibleProjectsAmount(1);
  setCurrentProjects(projects.slice(0,1));
  setCurrentProjectsCounter(1);
}
},[]);

// resize event listener
useEffect(()=>{
const handleResize = ()=>{
  setPortWidth(window.innerWidth);
}

window.addEventListener("resize", handleResize);

return ()=>{
  window.removeEventListener("resize", handleResize);
}

},[])
 



// carousel effect 

useEffect(()=>{

// reset counter
if (currentProjectsCounter === projects.length + currentProjects.length ) {
  setCurrentProjectsCounter(currentProjects.length);
}


if (currentProjectsCounter >= currentProjects.length && currentProjectsCounter <= projects.length) {
  setCurrentProjects(projects.slice(currentProjectsCounter - currentProjects.length, currentProjectsCounter));
}
// combine beginning of array with ending
else if (currentProjectsCounter > projects.length) {
  let arr1 = projects.slice(currentProjectsCounter - currentProjects.length, currentProjectsCounter);
  let arr2 = projects.slice(0, currentProjectsCounter - projects.length);
  setCurrentProjects(arr1.concat(arr2));
} 

},[currentProjectsCounter])


// arrow click counter changer
const handleArrowClick = (arrowIconRef: React.RefObject<SVGSVGElement | null>) => {
if (nextArrowRef === arrowIconRef) {
  setCurrentProjectsCounter(prevValue => prevValue + 1 );
}
else{ 
  
  // reset counter to back counter
  if (currentProjectsCounter === currentProjects.length ) {
  setCurrentProjectsCounter(currentProjects.length + projects.length - 1);
}else{
setCurrentProjectsCounter(prevValue => prevValue - 1); 
}

}
};


  return (
    <section id="ProjectsSection">
        <Container  fluid style={{height: "100%"}} >
          <h1 style={{height: "20%", margin: "0"}}>Projects</h1>
          
          <div className="row gy-4 d-flex justify-content-center projects-container">
            <div  className="col-1">
          <NavigateBeforeIcon
            ref={backArrowRef}
              onClick={()=>handleArrowClick(backArrowRef)}
          sx={{fontSize: 50, cursor: "pointer"}}/>
          </div>   
              {currentProjects.map((project, index)=>{
          return(
            <ProjectContainer
            key={project.name}
            themeBackground= {project.themeBackground}
            image={project.image}
            techUsed={project.techUsed}
            logo={project.logo}
            description={project.description}
            websiteLink={project.websiteLink}
            githubLink={project.githubLink && project.githubLink}
            />
          )
         })}
          <div className="col-1 ">
              <NavigateNextIcon 
              ref={nextArrowRef}
              onClick={()=>handleArrowClick(nextArrowRef)}
               sx={{fontSize: 50, cursor: "pointer"}}  /> 
            </div>
         

        
          </div>
         
          
        </Container>
   </section>
  )
}
