import React from "react";
import "./singleCard.css";

const singleCard = ({ card, onAddChoice }) => {
  const handleCard = () => {
    onAddChoice(card);
  };
  return (
    <>
      <div className="card">
        <img className="" src={card.src} alt="card front" />
        <img
          className=""
          src="/img/cover.png"
          alt="card back"
          onClick={handleCard}
        />
      </div>
    </>
  );
};

export default singleCard;
