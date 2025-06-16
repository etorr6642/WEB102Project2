import './App.css';
import React, { useState } from 'react';

const questions = [
  {
    question: "What is the name of the first Pokemon?",
    answer: "Bulbasaur",
  },
  {
    question: "What is the name of the second Pokemon?",
    answer: "Ivysaur",
  },
  {
    question: "What is the name of the third Pokemon?",
    answer: "Venusaur",
  },
]

const App = () => {
  // State variables
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [flip, setFlip] = useState(false);

//function to flip the card and show the answer
  const flipCard = () => {
    setShowAnswer(!showAnswer);
  }

  return (
    <div className="App">
      {/* header information */}
      <div className="header">
        {/* title */}
        <h1 className='=title'>The Ultimate Pokemon Trainer</h1>
        {/* Description */}
        <p>How well do you know your pokemon? Test your knowledge of the original 151 Pokemon here!</p>
        {/* Number of cards in the deck */}
        <p>Number of cards: {questions.length} </p>
      </div>

      {/* button that displays a random question and shows the answer when clicked */}
      {/* <button className="card" onClick={flipCard}>
        <h3>{showAnswer ? questions[currentQuestion].answer : questions[currentQuestion].question}</h3>
      </button> */}

      {/* create a card that looks like it is flipping when clicked */}
      <div className ='card-flip-container' onClick={() => flipCard()}>
        <div className={`card-inner ${showAnswer ? 'flipped' : ''}`}>
          <div className="front card">
            <h3>{questions[currentQuestion].question}</h3>
          </div>
          <div className="back card">
            <h3>{questions[currentQuestion].answer}</h3>
          </div>
        </div>
      </div>

      <div className='nextPrevious'>
        {/* button to go to the next question */}
        <button className="next" onClick={() => {
          setCurrentQuestion((currentQuestion + 1) % questions.length);
          setShowAnswer(false);
        }}>
          Next Question
        </button>
        {/* button to go to the previous question */}
        <button className="prev" onClick={() => {
          setCurrentQuestion((currentQuestion - 1 + questions.length) % questions.length);
          setShowAnswer(false);
        }}>
          Previous Question
        </button>
      </div>


    </div>
  )
}

export default App
