import React from "react";
import "./singleCard.css";

const singleCard = ({ card, onAddChoice, flipped, disabled }) => {
  const handleCard = () => {
    if (!disabled) {
      onAddChoice(card);
    }
  };

  const { id, src, hasMatched } = card;

  return (
    <>
      <div className="card">
        <p>{card.src}</p>
        {flipped ? (
          <img className="" src={card.src} alt="card front" />
        ) : (
          <img
            className=""
            src="/img/cover.png"
            alt="card back"
            onClick={handleCard}
          />
        )}
      </div>
    </>
  );
};

export default singleCard;
