import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useToggleFlip from "./hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, toggleIsFacingUp] = useToggleFlip(true);

  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={toggleIsFacingUp}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
