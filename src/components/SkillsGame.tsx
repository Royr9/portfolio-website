import React, { useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap';
import GameCard from './GameCard';
import {cardGameSkills, skillsArrayType} from '../db/skillList';


export default function SkillsGame() {
   const shuffleArray = (array: skillsArrayType)=>{
        const compareFn = ()=> Math.random() - 0.5;
        array.sort(compareFn);
        return array;
    }

    // const [cards, setCards] = useState(["1","1","2","2","3", "3", "4", "4", "5", "5","6","6"]);
    
    const [cards, setCards] = useState(cardGameSkills())
    
    
   
// states 

const [isGamePlayed, setIsGamePlayed] = useState(false);
const [counter, setCounter] = useState(0);


const [selectedCards, setSelectedCards] = useState<string[]>([]);
const [matchedCards, setMatchedCards] = useState<string[]>([]);
const [isNoMatch, setIsNoMatch] = useState<string[]>([]);
const [isGameWon, setIsGameWon] = useState(false);

const counterInterval = useRef<NodeJS.Timer | null>(null);

// play the game function
 function playGame() {
  setIsGameWon(false);
      setCards(shuffleArray(cards));
   setCounter(1);
     counterInterval.current = setInterval(()=>{
            setCounter(prevValue => prevValue > 0 ? prevValue - 1 : 0);
          }, 1000);
      
          setTimeout(() => {
            setIsGamePlayed(true);
      
          }, counter * 1000);
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
        }, 1000);
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
    setCounter(0);
    playGame();
    
   }
  if (!isGamePlayed) {
   playGame();
  } 
}
// clear interval when counter reaches 0
useEffect(() => {
  if (counter === 0) {
    clearInterval(counterInterval.current!);
    counterInterval.current = null;
  }
}, [counter])

   


  return (
    <div  className='game-container '>
      <h4 className='display-5 text-bg-danger '>The Skills Memory Game</h4>
      <span className='counter fs-3 '>{isGameWon ? "Congratz! You Won!!" : counter > 0 ? counter : "Good luck!"}</span>
      <div className='cards-container row gx-2 gy-2 '>
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
              notMatch={isNoMatch.includes(card.name)}/>
            )
        })}
      </div>
        
        <Button onClick={handlePlayOrStop} 
        className='mt-4 mx-1 px-3 ' 
        variant={isGamePlayed ? "primary": "success"}
         size='lg'>{isGameWon ? "Play Again" : isGamePlayed ? "Start Over" : "Start Game"}</Button>
         <Button size='lg' variant='danger' className='mt-4 mx-1 '>Quit Game</Button>
    </div>
  )
}



