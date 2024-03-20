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
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(null);
  const [computerResult, setComputerResult] = useState(null);

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    const gameResult = judgement(choice[userChoice], computerChoice);
    setResult(gameResult);
    setComputerResult(
      gameResult === "win" ? "lose" : gameResult === "lose" ? "win" : "tie"
    );
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "tie";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 Array로 만들어줌
    let randomItem = Math.floor(Math.random() * itemArray.length);

    let final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={computerResult} />
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
