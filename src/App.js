import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import SingleCard from "./component/SingleCard";
import "./component/singleCard.css";

const DUMMY_CARDS = [
  { src: "/img/helmet-1.png" },
  { src: "/img/potion-1.png" },
  { src: "/img/ring-1.png" },
  { src: "/img/scroll-1.png" },
  { src: "/img/shield-1.png" },
  { src: "/img/sword-1.png" },
];

function App() {
  const [card, setCard] = useState([]);
  const [turn, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [isDisable, setDisable] = useState(false);

  const shuffleCardsHandler = () => {
    const shuffleCards = [...DUMMY_CARDS, ...DUMMY_CARDS]
      .map((card) => ({
        ...card,
        id: Math.random(),
      }))
      .sort((card) => card.id - 0.5);
    console.log(shuffleCards);
    setCard(shuffleCards);
    setTurns(0);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisable(true);
      if (choiceOne.src === choiceTwo.src) {
        console.log("match found");
        setCard((preVal) =>
          preVal.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, hasMatched: true };
            } else {
              return card;
            }
          })
        );
        setTimeout(() => resetVal(), 1000);
        setDisable(false);
      } else {
        console.log("no match found");
        setTimeout(() => resetVal(), 1000);
        setDisable(false);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCardsHandler();
  }, []);

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const resetVal = () => {
    console.log("reset");
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((preVal) => preVal + 1);
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button className="button" onClick={shuffleCardsHandler}>
        New Game
      </button>
      <div className="card-grid">
        {card.map((card) => (
          <SingleCard
            card={card}
            key={card.id}
            onAddChoice={handleChoice}
            flipped={
              card === choiceOne || card === choiceTwo || card.hasMatched
            }
            disabled={isDisable}
          />
        ))}
      </div>
      <p>{turn} </p>
    </div>
  );
}

export default App;
