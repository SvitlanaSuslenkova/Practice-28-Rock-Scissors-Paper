//import React from "react";
import GameButton from "../GameButton";
import { Choices } from "../Types";
import "./StageOne.css";

interface StageOneProps {
  setChoice: (choice: Choices) => void;
}

const StageOne: React.FC<StageOneProps> = ({ setChoice }) => {
  return (
    <div className="game-container">
      <GameButton value={Choices.paper} setChoice={setChoice} />
      <GameButton value={Choices.scissors} setChoice={setChoice} />
      <div className="rockButtonDiv">
        <GameButton value={Choices.rock} setChoice={setChoice} />
      </div>
    </div>
  );
};

export default StageOne;
