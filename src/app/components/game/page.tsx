"use client"
import React, { useState } from 'react'
import styles from './../../page.module.css';
import ChoiceButton from '../choiceButton/page'


const page = () => {
    const choices = ['rock', 'paper', 'scissors']
    const [player,setplayer]=useState()
    const [computer,setComputer]=useState()
    const [result,setResult]=useState('')

    const playGame=(choice)=>{
        const randomchoice= choices[Math.floor(Math.random()*choice.length)]
        setplayer(choice)
        setComputer(randomchoice)
        determineWinner(choice,randomchoice)
    }
    const determineWinner=(player,computer)=>{
        if(player===computer){
            setResult('It Is Tie Match')
        }
        else if(
           ( player==='rock'&& computer==='scissors')||
           (player==='paper'&& computer==='rock')||
           (player==='scissors'&& computer==='paper')
        ){
            setResult('You Won')
        }
        else{
            setResult('You Lost')
        }
}


  return (
    <div className='bodyy'>
    <div className={styles.container}>

    <h1>Rock Paper scissor </h1>
    <div className={styles.choices}>
        {choices.map((choice) => (
          <ChoiceButton key={choice} choice={choice} playGame={playGame} />
        ))}
      </div>
      <div className='result'>
        {player && <p>Your choice: {player}</p>}
        {computer && <p>Computer's choice: {computer}</p>}
        {result && <p>{result}</p>}
      </div>

 
    </div>
    </div>
  )
}


export default page