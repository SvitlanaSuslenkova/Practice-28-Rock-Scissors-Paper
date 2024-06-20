import Home from "./Pages/Home";
import ChallengeBy from "./components/ChallengeBy";
import Cursor from "./components/Cursor";

import "./reset.css";
import "./App.css";

function App() {
  return (
    <>
      <Cursor />
      <main>
        <Home />
        <ChallengeBy />
      </main>
    </>
  );
}

export default App;

//npm install react-dom
//npm install react-router-dom@6.4

//npm install --save @types/react-router
//npm install --save @types/react-router-dom

//npm cache clean --force
//npm install --legacy-peer-deps
