import './App.css';
import React, { useState } from 'react';
//question about the first 151 pokemon
const questions = [
  {
    question: "What is the very first Pokémon in the Pokédex?",
    answer: "Bulbasaur",
    image: "/bulb.jpg"
  },
  {
    question: "Which Pokémon evolves into Charizard?",
    answer: "Charmeleon",
    image: "/charmeleon.jpg"
  },
  {
    question: "Which three Pokémon can evolve from Eevee in Gen 1?",
    answer: "Vaporeon, Jolteon, Flareon",
    image: "three.jpg"
  },
  {
    question: "What type is Pikachu?",
    answer: "Electric",
    image: "/pika.jpg"
  },
  {
    question: "Which legendary bird is Ice/Flying-type?",
    answer: "Articuno",
    image: "/arti.png"
  },
  {
    question: "Which Pokémon has a skull on its head as part of its body?",
    answer: "Cubone",
    image: "/cubone.png"
  },
  {
    question: "What are the three final evolutions of the Kanto starter Pokémon?",
    answer: "Venusaur, Charizard, Blastoise",
    image: "/vcb.jpg"
  },
  {
    question: "Which Pokémon is number 151 in the Pokédex?",
    answer: "Mew",
    image: "/mew.png"
  },
  {
    question: "Which Pokémon evolves into Gyarados?",
    answer: "Magikarp",
    image: "/magikarp.jpg"
  },
  {
    question: "Which two Pokémon are fossil Pokémon in Gen 1?",
    answer: "Omanyte and Kabuto",
    image: "/ok.png"
  },
  {
    question: "Which Psychic-type Pokémon is known for its spoons?",
    answer: "Alakazam",
    image: "/alakazam.jpg"
  },
  {
    question: "What is the only Ghost-type evolutionary line in Gen 1?",
    answer: "Gastly → Haunter → Gengar",
    image: "/ghg.jpg"
  },
  {
    question: "Which Pokémon is known for saying its own name and is a balloon?",
    answer: "Jigglypuff",
    image: "/jigglypuff.jpg"
  },
  {
    question: "Which Pokémon is the original form of Raichu?",
    answer: "Pikachu",
    image: "/pika.jpg"
  },
  {
    question: "Which Pokémon do Team Rocket often use in the anime?",
    answer: "Ekans and Koffing",
    image: "/ke.jpg"
  },
  {
    question: "Which two Pokémon can only evolve via trading in Gen 1?",
    answer: "Machoke Kadabra Haunter Graveler",
    image: "/four.jpg"
  },
  {
    question: "Which Pokémon is known as the 'Evolution Pokémon'?",
    answer: "Eevee",
    image: "/eevee.jpg"
  },
  {
    question: "Which dual-type Bug/Flying Pokémon evolves from Caterpie?",
    answer: "Butterfree",
    image: "/butterfree.png"
  },
  {
    question: "Which Dragon-type Pokémon is the final evolution of Dratini?",
    answer: "Dragonite",
    image: "/dragonite.jpg"
  }
];



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
            <div className="answer">
              <h3>{questions[currentQuestion].answer}</h3>
              <img src={questions[currentQuestion].image} alt={questions[currentQuestion].answer} />
            </div>
          </div>
        </div>
      </div>

      <div className='nextPrevious'>
         {/* button to go to the previous question */}
        <button className="prev" onClick={() => {
          setShowAnswer(false);
          setTimeout(() => {
            setCurrentQuestion((currentQuestion - 1 + questions.length) % questions.length);
          },200)
          
        }}>
          Previous Question
        </button>
        {/* button to go to the next question */}
        <button className="next" onClick={() => {
          setShowAnswer(false);
          setTimeout(() => {
          setCurrentQuestion((currentQuestion + 1) % questions.length);
          }, 200)
          
        }}>
          Next Question
        </button>
      </div>


    </div>
  )
}

export default App
