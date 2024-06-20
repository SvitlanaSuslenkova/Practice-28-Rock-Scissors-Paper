import GameButton from "../GameButton";
import { Choices } from "../Types";
import "./StageTwo.css";

interface StageTwoProps {
  value?: Choices;
  choice: Choices;
  setChoice?: (choice: Choices) => void;
  computerChoice: number | undefined;
}

const StageTwo: React.FC<StageTwoProps> = ({ choice, computerChoice }) => {
  return (
    <div className="game-container-stageTwo">
      <GameButton value={choice} />
      {computerChoice == undefined && (
        <div className="emptyComputerChoice"></div>
      )}
      {computerChoice !== undefined && <GameButton value={computerChoice} />}
      <p className="pickedText">You picked</p>
      <p className="pickedText">The house picked</p>
    </div>
  );
};

export default StageTwo;
