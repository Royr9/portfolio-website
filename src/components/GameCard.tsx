 import { useEffect, useRef, useState } from "react";

 type GameCardProps = {
    index: number;
    cardName: string;
    cardIconUrl: string;
    isNoMatch: boolean;
    isGamePlayed: boolean;
    onCardClick: ()=> void;
    matchFound: boolean;
    notMatch: boolean;
    RunIntro: boolean;
    
 }


 const GameCard= ({...props}: GameCardProps)=>{
      const [isHidden,setIsHidden] = useState(true);
       let introTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);


         function AnimateIntro() {
      const index = props.index
      const delay = 150 * (index + 1);
      introTimeoutRef.current = setTimeout(()=>{
          setIsHidden(false);
        }, delay)
      }
 
    


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
      }, 1000);
    }
    }
 
  }, [props.matchFound,props.notMatch, props.isGamePlayed])
  

    useEffect(() => {
      if (props.RunIntro) {
        AnimateIntro()
      }else{
        clearInterval(introTimeoutRef.current);
        setIsHidden(true);
      }
    
      return () => {
        clearInterval(introTimeoutRef.current);
      }
    }, [props.RunIntro])
    


        
  const handleClick = ()=>{
    
       if (props.isGamePlayed && !props.matchFound && !props.notMatch && !props.isNoMatch ) {
           if (isHidden) {
             props.onCardClick();
             setIsHidden(false);
        }

    }
  }


   

      
        

       return(
         <div onClick={handleClick}  className='col-3 col-md-3   ' >
  
          <div  style={{cursor: "pointer"}}
          className={` card-center  position-relative  p-0  d-flex   ${!isHidden ? "flipped" : "bg-gradient"}   m-auto  border-5 game-card
          ${props.matchFound ? "text-success border-success bg-success-subtle  ": props.notMatch && !isHidden ? "no-match": ""}`} >
            <img className={ `skill-icon align-self-center m-auto ${!isHidden ? "visible": ""}` }
             style={{ height: "60%", width: "auto"}}
              src={props.cardIconUrl}
               alt={props.cardName + "Icon"} 
                />
            
          </div>
        </div>  
       )
    }

    export default GameCard;