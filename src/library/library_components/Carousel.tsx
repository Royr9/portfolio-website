import { useState, useEffect, useRef } from "react";
import "./carousel.scss";

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

export default function Carousel() {

    const projects = ["1","2","3","4","5"];
    const totalAmountOfProjects = projects.length;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [numOfShownProjects,setNumOfShownProjects] = useState<number>({} as number);
    const [visibleProjects, setVisibleProjects]= useState([] as string[]);
    // next animation states
    const [nextOutAnimation, toggleNextOutAnimation] = useState(false);
    const [nextInAnimation, toggleNextInAnimation] = useState(false);
    const [isNextAnimating, toggleIsNextAnimating] = useState(false);

    // prev animation states
    const [prevOutAnimation, togglePrevOutAnimation] = useState(false);
    const [prevInAnimation, togglePrevInAnimation] = useState(false);
    const [isPrevAnimating, toggleIsPrevAnimating] = useState(false);


    useEffect(()=>{
        const handleResize = ()=>{
            const viewportWidth = window.innerWidth;
            const breakPoints = {
                lg: 960,
                md: 768
            }
            if (viewportWidth > breakPoints.lg) {
                setNumOfShownProjects(3);
            }else if (viewportWidth > breakPoints.md) {
                setNumOfShownProjects(2);
            }else{
                setNumOfShownProjects(1);
            }
        }
        handleResize();
        window.addEventListener("resize",handleResize);

        return ()=>{
            window.removeEventListener("resize", handleResize);
        }
    },[])

useEffect(()=>{
    const upLimit = currentIndex + numOfShownProjects;
    let updatedArray = [];
    console.log(currentIndex);
    console.log(upLimit);
    if (upLimit > totalAmountOfProjects) {
        let arr1 = projects.slice(currentIndex, upLimit);
        let arr2 = projects.slice(0, upLimit - totalAmountOfProjects);
        updatedArray = arr1.concat(arr2);
    }else{
        updatedArray = projects.slice(currentIndex, upLimit);
    }
     setVisibleProjects(updatedArray);
    
},[currentIndex,numOfShownProjects])


const nextProject = () => {
     if ( isPrevAnimating || isNextAnimating ) {
        return;
     }
     toggleIsPrevAnimating(true);
     toggleNextOutAnimation(true);
     setTimeout(()=>{
        toggleNextInAnimation(true);
        toggleNextOutAnimation(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1 ) % totalAmountOfProjects);
        setTimeout(() => {
            toggleNextInAnimation(false);
            toggleIsNextAnimating(false);
            toggleIsPrevAnimating(false);
        }, 300);
     },300);
};

const prevProject =  ()=>{
     if (isPrevAnimating || isNextAnimating) {  
        return;}
      // If an animation is already in progress, skip this click
        toggleIsPrevAnimating(true);
         togglePrevOutAnimation(true);
    setTimeout(()=>{
        togglePrevInAnimation(true);
        togglePrevOutAnimation(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalAmountOfProjects) % totalAmountOfProjects);
        setTimeout(()=>{
            togglePrevInAnimation(false);
            toggleIsPrevAnimating(false);
            toggleIsNextAnimating(false);
        }, 300)
    },300);  
};



    return (
          <div className="row gy-4 d-flex justify-content-center projects-container roy-carousel">
            <  div  className="col-md-1 col-2  justify-content-center ">
                 <NavigateBeforeIcon onClick={prevProject}sx={{fontSize: 50, cursor: "pointer"}}/>
           </div>   
          
         {visibleProjects.map((project,index)=>{
           
            return(
                <div key={index} 
                 className={`col active-project  
                   ${ prevOutAnimation  ? index === numOfShownProjects - 1 ? "slidePrevOut" : "slideRight" : ""}
                   ${index === 0 &&  prevInAnimation && "slidePrevIn"}
                    ${ nextOutAnimation  ? index === 0 ? "slideNextOut" : "slideLeft" : ""}
                   ${index === numOfShownProjects - 1 &&  nextInAnimation && "slideNextIn"}
                   `
                   
                    } > 
                    <div className="card-center ProjectContainer "> 
                        <h1 >{project}</h1>
                    </div>
                    
                </div>
            )
          })}
          
          <div className="col-md-1 col-2 ">
              <NavigateNextIcon 
           
              onClick={nextProject}
               sx={{fontSize: 50, cursor: "pointer"}}  /> 
           </div>
         
            
            </div>
  )
}
  

