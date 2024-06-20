import GameButton from "../GameButton";
import { Choices, Result } from "../Types";
import "./StageTwo.css";
import "./StageThree.css";

function StageThree({
  choice,
  computerChoice,
  setChoice,
  setComputerChoice,
  setThirdStage,
  gameResult,
  setGameResult,
}: {
  choice: Choices | undefined;
  computerChoice: Choices | undefined;
  setChoice: (choice: Choices | undefined) => void;
  setComputerChoice: (computerChoice: Choices | undefined) => void;
  setThirdStage: (thirdStage: boolean) => void;
  gameResult: Result | undefined;
  setGameResult: (gameResult: Result | undefined) => void;
}) {
  const cleanChoices = () => {
    setChoice(undefined);
    setComputerChoice(undefined);
    setThirdStage(false);
    setGameResult(undefined);
  };
  return (
    <>
      <div className="game-container-stageThree">
        {choice !== undefined && <GameButton value={choice} />}

        {computerChoice == undefined && (
          <div className="emptyComputerChoice"></div>
        )}
        {computerChoice !== undefined && <GameButton value={computerChoice} />}
        {gameResult == "win" && <div className="winnerDiv"></div>}
        {gameResult == "loose" && <div className="looserDiv"></div>}
      </div>
      <div className="textPicked">
        <p className="pickedText">You picked</p>
        <p className="pickedText">The house picked</p>
      </div>

      {gameResult == "draw" && <p className="resultText"> Draw</p>}
      {gameResult == "win" && <p className="resultText"> You win </p>}
      {gameResult == "loose" && <p className="resultText"> You loose </p>}

      <button className="playAgainButton" onClick={cleanChoices}>
        Play Again
      </button>
    </>
  );
}

export default StageThree;
