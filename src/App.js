import "./App.css";
import { useState } from "react";
import Box from "./components/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "/img/rock.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "/img/scissors.jpg",
  },
  paper: {
    name: "Paper",
    img: "/img/paper.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
  };
  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} />
        {/* <Box title="Computer" /> */}
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
