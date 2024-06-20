import { useState, useEffect } from "react";
import { Choices, Result } from "../components/Types";
import StageOne from "../components/gameStagesComponents/StageOne";
import StageTwo from "../components/gameStagesComponents/StageTwo";
import StageThree from "../components/gameStagesComponents/StageThree";
import Header from "../components/Header";
import Rules from "../components/Rules";
import "./Home.css";

function Home() {
  const [rules, setRules] = useState<boolean>(false);
  const [choice, setChoice] = useState<Choices | undefined>();
  const [computerChoice, setComputerChoice] = useState<number | undefined>();

  const [thirdStage, setThirdStage] = useState<boolean>(false);
  const [gameResult, setGameResult] = useState<Result | undefined>();
  // const [gameScore, setGameScore] = useState<number>(0);
  const [gameScore, setGameScore] = useState<number>(() => {
    const savedScore = sessionStorage.getItem("gameScore");
    return savedScore ? Number(savedScore) : 0;
  });

  useEffect(() => {
    if (choice !== undefined) {
      setTimeout(() => {
        setComputerChoice(Math.floor(Math.random() * 3));
      }, 500);
    }
  }, [choice]);

  const resultOfGame = (choice: Choices, computerChoice: Choices): Result => {
    if (choice === computerChoice) {
      return Result.draw;
    }
    if (
      (choice == Choices.rock && computerChoice == Choices.scissors) ||
      (choice == Choices.paper && computerChoice == Choices.rock) ||
      (choice == Choices.scissors && computerChoice == Choices.paper)
    ) {
      return Result.win;
    }
    return Result.loose;
  };
  useEffect(() => {
    if (computerChoice !== undefined) {
      setTimeout(() => {
        setThirdStage(true);
      }, 650);
      if (choice !== undefined && computerChoice !== undefined) {
        setTimeout(() => {
          const result = resultOfGame(choice, computerChoice);
          setGameResult(result);
        }, 650);
      }
    }
  }, [computerChoice, resultOfGame, choice]);

  useEffect(() => {
    sessionStorage.setItem("gameScore", gameScore.toString());
  }, [gameScore]);

  return (
    <>
      <Header
        gameResult={gameResult}
        setGameScore={setGameScore}
        gameScore={gameScore}
      />

      <div className="stage-container">
        {choice == undefined && <StageOne setChoice={setChoice} />}
        {choice !== undefined && !thirdStage && (
          <StageTwo choice={choice} computerChoice={computerChoice} />
        )}
        {choice !== undefined && thirdStage && (
          <StageThree
            choice={choice}
            setChoice={setChoice}
            computerChoice={computerChoice}
            setComputerChoice={setComputerChoice}
            setThirdStage={setThirdStage}
            gameResult={gameResult}
            setGameResult={setGameResult}
          />
        )}
        <button className="rulesButton" onClick={() => setRules(true)}>
          Rules
        </button>
      </div>
      {rules && <Rules setRules={setRules} />}
    </>
  );
}

export default Home;
