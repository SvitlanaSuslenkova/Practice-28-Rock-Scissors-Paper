import { useEffect } from "react";
import { Result } from "../components/Types";
import "./Header.css";

function Header({
  gameResult,
  gameScore,
  setGameScore,
}: {
  gameResult: Result | undefined;
  gameScore: number;
  setGameScore: (gameScore: number) => void;
}) {
  useEffect(() => {
    if (gameResult !== undefined) {
      setGameScore((prevScore) => {
        if (gameResult === Result.win) {
          return prevScore + 1;
        } else if (gameResult === Result.loose) {
          return prevScore - 1;
        }
        return prevScore;
      });
    }
  }, [gameResult, setGameScore]);

  return (
    <div className="headerDiv">
      <div className="headerDiv-outline">
        <div className="nameGameDiv">
          <h1>rock</h1>
          <h1>paper</h1>
          <h1>scissors</h1>
        </div>
        <div className="scoreDiv">
          <p className="scoreWord">score</p>
          <p className="scoreNumber">{gameScore}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
