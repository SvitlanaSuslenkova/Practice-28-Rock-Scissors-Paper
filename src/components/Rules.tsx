import "./Rules.css";
import CloseImg from "../assets/icon-close.svg";

const Rules = ({ setRules }: { setRules: (rules: boolean) => void }) => {
  return (
    <div className="rulesDiv">
      <p className="rulesWord">Rules</p>
      <img
        src={CloseImg}
        alt="X"
        className="closeImg"
        onClick={() => setRules(false)}
      />
    </div>
  );
};

export default Rules;
