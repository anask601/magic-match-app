import { useState } from "react";
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

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button className="button" onClick={shuffleCardsHandler}>
        New Game
      </button>
      <div className="card-grid">
        {card.map((card) => (
          <SingleCard card={card} key={card.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
