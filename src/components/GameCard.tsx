 import { useEffect, useState } from "react";

 type GameCardProps = {
    index: number;
    card: string;
    isNoMatch: boolean;
    isGamePlayed: boolean;
    onCardClick: ()=> void;
    matchFound: boolean;
    notMatch: boolean;
 }


 const GameCard= ({...props}: GameCardProps)=>{
      const [isHidden,setIsHidden] = useState(true);
      // const [isMatchFound, setIsMatchFound] = useState(false);



  useEffect(() => {
    if (!props.isGamePlayed) {
      setIsHidden(true);
    }else{
      if (props.matchFound) {
      setIsHidden(false);
    }
      if (props.notMatch) {
     
      setTimeout(() => {
        setIsHidden(true);
      }, 800);
    }
    }
 
  }, [props.matchFound,props.notMatch, props.isGamePlayed])
  
        
  const handleClick = ()=>{
    
       if (props.isGamePlayed && !props.matchFound && !props.notMatch && !props.isNoMatch ) {
           if (isHidden) {
             props.onCardClick();
             setIsHidden(false);
        }

    }
  }
     
      
        

       return(
         <div onClick={handleClick} key={props.index} className='col-3  mx-auto   ' >
          <div style={{height: "100px", width: "100px"}} 
          className={`card-center d-flex align-content-center  m-auto  border-5 
          ${props.matchFound ? "text-success border-success ": props.notMatch && !isHidden ? "border-danger text-danger": ""}`} >
            <h3  hidden={isHidden} >{props.card}</h3>
          </div>
        </div>  
       )
    }

    export default GameCard;