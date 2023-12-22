import React, { useEffect, useRef, useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';
import GameCard from './GameCard';
import { cardGameSkills, skillsArrayType} from '../db/skillList';
import HeadingTypeErase from '../library/library_components/HeadingTypeErase';
import HeadingAnimated from '../library/library_components/HeadingAnimated';



export default function SkillsGame({...props}) {
  


// states 

const [cards, setCards] = useState<skillsArrayType  >(cardGameSkills());

const [isGamePlayed, setIsGamePlayed] = useState(false);
// const [counter, setCounter] = useState(0);


const [selectedCards, setSelectedCards] = useState<string[]>([]);
const [matchedCards, setMatchedCards] = useState<string[]>([]);
const [isNoMatch, setIsNoMatch] = useState<string[]>([]);
const [isGameWon, setIsGameWon] = useState(false);
const [isRestarting, setIsRestarting] = useState(false);
const [intro, setIntro] = useState(true);

// play the game function
 function playGame() {
      setIsRestarting(true);
      setIntro(false);
      setTimeout(() => {
      setIsGameWon(false);
      setCards(cardGameSkills());
      setIsGamePlayed(true);
      setIsRestarting(false);
      }, 1700);
      
      
    }


useEffect(()=>{
  if (matchedCards.length * 2 === cards.length) {
    setTimeout(() => {
      setIsGameWon(true);
    }, 100);
  }
  if (selectedCards.length === 2) {
    if (selectedCards[0] === selectedCards[1]){
        console.log("matchFound");
        setMatchedCards((preValue)=>{
          return(
            [...preValue,selectedCards[0]]
          )
        })
      }else{
        setIsNoMatch([selectedCards[0], selectedCards[1]]);
        setTimeout(() => {
          setIsNoMatch([]);
        }, 1200);
      }
      setSelectedCards([]); 
  }
},[selectedCards])

  function handleCardClick(cardValue: string) {
    setSelectedCards((prevValue)=>{
      return (
        [...prevValue, cardValue]
      )
    })
       
  }

  function handlePlayOrStop() {
   
   if (isGamePlayed) {
    setIsGamePlayed(false);
    setMatchedCards([]);
    setSelectedCards([]);
    setIsNoMatch([]);
    playGame();
      
    
   
    
   }
  if (!isGamePlayed) {
   playGame();
  } 
}
// clear interval when counter reaches 0
// useEffect(() => {
//   if (counter === 0 ) {
//     clearInterval(counterInterval.current!);
//     counterInterval.current = null;
//   }
// }, [counter,isGamePlayed])

   


  return (
    <div  className={'game-container ' + props.className}>
      <h4 className='display-5 text-bg-danger p-3 '>The Skills Memory Game</h4>
    
      <span style={{height: "50px"}} 
      className='counter fs-3 p-0 m-0 d-inline-block '>{isRestarting ? 
      <HeadingAnimated className={"animate--normal"} Element='p'>
         Shuffling the cards...
      </HeadingAnimated> : !isGamePlayed ?
       <HeadingTypeErase  Element='p' extraClasses="p-0 m-0 d-inline-block"
      firstText='Welcome to the skills Memory Game!'
      secondText='Press Start to begin game'/> : isGameWon ? <p >Congratz! You Won!! </p> 
       : <HeadingAnimated Element='p' >
          Good Luck!
      </HeadingAnimated> }</span>
      <Container className='cards-container mt-0 mb-5 m-auto  row gx-4  gy-4 '>
        {cards.map((card,index)=>{
            return(
             <GameCard onCardClick={()=> handleCardClick(card.name)}
              key={index}
              index={index} 
              cardName={card.name} 
              cardIconUrl= {card.iconUrl}
              matchFound={matchedCards.includes(card.name)}
              isNoMatch= {isNoMatch.length === 2}
              isGamePlayed={isGamePlayed}
              notMatch={isNoMatch.includes(card.name)}
              RunIntro={intro}
              
              />
            )
        })}
      </Container>
       
        <ButtonGroup className='mt-0' size='lg'>
            <Button className='mx-2 rounded ' onClick={handlePlayOrStop} 
        variant={isGamePlayed ? "primary": "success"}
         >{isGameWon ? "Play Again" : isGamePlayed ? "Start Over" : "Start Game"}</Button>
         <Button onClick={()=> props.onQuitGame()}  className='mx-2  rounded '  variant='danger'>Quit Game</Button>
        </ButtonGroup>
        
      
    </div>
  )
}



