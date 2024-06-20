import { Choices } from "./Types";
import "./GameButton.css";

interface GameButtonProps {
  value: Choices;
  setChoice?: (choice: Choices) => void | undefined;
}
function getButtonDivClassName(value: Choices) {
  switch (value) {
    case Choices.rock:
      return "gameButtonDiv gameButtonDivRock";
    case Choices.scissors:
      return "gameButtonDiv gameButtonDivScissors";
    case Choices.paper:
      return "gameButtonDiv gameButtonDivPaper";
    default:
      return "gameButtonDiv";
  }
}
function getButtonClassName(value: Choices) {
  switch (value) {
    case Choices.rock:
      return "gameButton gameButtonRock";
    case Choices.scissors:
      return "gameButton gameButtonScissors";
    case Choices.paper:
      return "gameButton gameButtonPaper";
    default:
      return "gameButton";
  }
}
const GameButton: React.FC<GameButtonProps> = ({ value, setChoice }) => {
  return (
    <>
      <div className={getButtonDivClassName(value)}>
        <button
          className={getButtonClassName(value)}
          value={value}
          onClick={() => setChoice && setChoice(value)}
        ></button>
      </div>
    </>
  );
};

export default GameButton;
