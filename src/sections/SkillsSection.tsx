import { Button, Container, Nav } from "react-bootstrap";
import skills, { skillsArrayType } from "../db/skillList"
import SkillsGame from "../components/SkillsGame";
import { useEffect, useState } from "react";
import PlayCircle from "@mui/icons-material/PlayCircle";
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import HeadingTypeErase from "../library/library_components/HeadingTypeErase";
import HeadingAnimated from "../library/library_components/HeadingAnimated";
import { IconButton, makeStyles } from "@mui/material";
import { log } from "console";


export default function SkillsSection() {

const [skillsList, setSkillList] = useState(skills());


type GameStateKeysType = {
  isGameOn: boolean,
  isGamePlayed: boolean,
  isGameRestarting: boolean,
  isGameWon: boolean,
  moveCounter: number
}

const [userScores, setUserScores] = useState([] as number[]);
const [userHighScore, setUserHighScore] = useState<null | number>(null);
useEffect(()=>{
setUserHighScore(()=>{
  return(
    Math.min(...userScores)
  )
})
},[userScores])

const [gameState, setGameState] = useState<GameStateKeysType>({
  isGameOn: false,
  isGamePlayed: false,
  isGameRestarting: false,
  isGameWon: false,
  moveCounter: 0
})

//  restart Game
useEffect(()=>{
  let restartTimeOut: NodeJS.Timeout;
if (gameState.isGameRestarting) {
  setGameState((prevValue)=>{
    return ({
      ...prevValue, 
      isGameWon: false,
      isGamePlayed: false,
      moveCounter: 0
    })
  });
  restartTimeOut =  setTimeout(()=>{
      setGameState((prevValue)=>{
    return ({
      ...prevValue, 
      isGameRestarting: false,
      isGamePlayed: true,
      moveCounter: 0
    })
  });
  }, 1700)
}

return ()=> clearTimeout(restartTimeOut);
},[gameState.isGameRestarting, gameState.isGameWon])

// handle game buttons 
const handleGame = (elementId: "isGameOn" | "isGamePlayed" | "isGameRestarting" | "isGameWon")=>{


  setGameState((prevValue)=>{
    if (prevValue.isGameOn && elementId === "isGameOn") {
      return({
        ...prevValue,
        isGameOn: false,
        isGamePlayed:false,
        isGameWon: false,
        isGameRestarting: false,
        moveCounter: 0
      })
    } 
return ({
  ...prevValue,
  [elementId] : !prevValue[elementId]
})
  })
}

const handleGameWon = (isGameWon:boolean)=>{
  if (isGameWon) {
      setUserScores((prevValue)=>{return[...prevValue,gameState.moveCounter]});
     setGameState((prevValue)=> { 
    return({
       ...prevValue,
    isGameWon: true
    })
   
  })
  }
}

function renderGameText() {
  // before game
  if (!gameState.isGameOn) {
    return <div>
    <p className="display-6 ">Want to play a little memory game? </p>
    <IconButton  color="primary"  onClick={()=> handleGame("isGameOn")}>
      <PlayCircle fontSize="large" sx={{fontSize: 60, "&:hover" :{ color: "rgb(13, 118, 238)"}}}/>
    </IconButton>
          {/* <div  className="icon-div"  >
            <div id="isGameOn" onClick={handleGame} className="svg-container"></div>
            <PlayCircle className="play-circle"  sx={{fontSize: 60, cursor: "pointer"}}/>
          </div> */}
          
    </div>
  }
  // restart game
  if (gameState.isGameRestarting) {
    return <div>
        <HeadingAnimated className={"display-3 fs-3 animate--normal "}
     Element="p">Shuffling cards. . .</HeadingAnimated> 
    </div> 
  } 
  // start game
  else if (gameState.isGameOn && !gameState.isGamePlayed){
    return <div>
      <div>
        <HeadingTypeErase extraClasses={" display-3 fs-3 animate--faster"} Element="p" 
         firstText="Welcome to the skills memory game!" 
         secondText="Press START to begin"/> 
         <div>
          <Button className="play-quit-btn" id="isGamePlayed" onClick={()=> handleGame("isGamePlayed")}
          variant="primary"  size="lg">START </Button> 
          <Button className="play-quit-btn" id="isGameOn" onClick={()=> handleGame("isGameOn")} 
          variant="danger" size="lg">QUIT </Button> 
         </div>
         
      </div>
    </div>
    // game won
  }else if (gameState.isGameWon) {
    return <div>
      <p  className="display-6 text-success ">You Won! <br />
      Moves made: <span className="text-dark">{gameState.moveCounter}</span> <br />
      Your High Score: <span className="text-dark">{userHighScore}</span> <br />
      Want to play again?</p>
    <div  className="game-controls w-100 m-auto  "> 
            <IconButton size="large" className="mx-2 " onClick={()=> handleGame("isGameRestarting")}>
              <ReplayRoundedIcon   sx={{color: "white",fontSize: 52,borderRadius: "50%", backgroundColor: "black"}}/>
              </IconButton> 
            
            <IconButton  className="mx-2 " onClick={()=> handleGame("isGameOn")}>
              <CancelRoundedIcon color="error" sx={{fontSize: 60}}/>
             </IconButton>
            </div> 
      </div>
  }  
  // return good luck and game play
    return <div>
      <HeadingAnimated className={"display-6 animate--normal "} Element="h6">Good Luck!!</HeadingAnimated> 
    <div  className="game-controls w-100 m-auto  "> 
            <IconButton size="large" className="mx-2 " onClick={()=> handleGame("isGameRestarting")}>
              <ReplayRoundedIcon   sx={{color: "white",fontSize: 52,borderRadius: "50%", backgroundColor: "black"}}/>
              </IconButton> 
            
            <IconButton  className="mx-2 " onClick={()=> handleGame("isGameOn")}>
              <CancelRoundedIcon color="error" sx={{fontSize: 60}}/>
             </IconButton>
            </div> 
            <p className="fs-5 " >Move Count: <span className="text-dark fs-5 ">{gameState.moveCounter}</span></p>
    </div>
  
}

function addToCounter() {
  setGameState((prevValue) =>{return({
    ...prevValue, 
    moveCounter: prevValue.moveCounter + 1
  })})
}
// htmllllll

  return (
    <section id="skills-section">
      <Container fluid className="row w-100 h-100 p-0  m-0  ">
     <div  className="title-col col-sm-4 d-flex flex-column justify-content-center  ">
      <div className="title-col-content d-flex 
       flex-column justify-content-center h-50 my-lg-2 gap-5  align-items-center">
         <h4 className="display-2  ">My Skills</h4>
         
         {renderGameText()}
      </div>
       
      </div>
      <div className=" col-sm-8   skills-col p-0  ">
        {gameState.isGameOn ? <SkillsGame moveCounter={addToCounter} playGame={gameState.isGamePlayed} gameWon={handleGameWon}/> : 
        <div className="skills-container h-100  card-center">
              {skillsList.map((skill,index)=> {
                return (
                    <div className={` col-4  skill-${index}`} key={index}>
                      <div className="skill-div">
                    <img src={skill.iconUrl} alt="" /> <span className="  ">{skill.name}</span>
                      </div>
                        
                    </div>
                )
            })}
        </div>
              } 
      </div>
      </Container>
     
   
    </section>
  )
}

