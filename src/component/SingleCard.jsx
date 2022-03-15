import React from "react";
import "./singleCard.css";

const singleCard = ({ card }) => {
  return (
    <>
      <div className="card">
        <img className="" src={card.src} alt="card front" />
        <img className="" src="/img/cover.png" alt="card back" />
      </div>
    </>
  );
};

export default singleCard;
