import React, { Component } from "react";
import "./App.css";
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: null,
      computerResult: null,
    };
  }

  play = (userChoice) => {
    const userSelect = choice[userChoice];
    const computerChoice = this.randomChoice();
    const gameResult = this.judgement(userSelect, computerChoice);

    this.setState({
      userSelect,
      computerSelect: computerChoice,
      result: gameResult,
      computerResult:
        gameResult === "win" ? "lose" : gameResult === "lose" ? "win" : "tie",
    });
  };

  judgement = (user, computer) => {
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

  randomChoice = () => {
    const itemArray = Object.keys(choice);
    const randomItem = Math.floor(Math.random() * itemArray.length);
    return choice[itemArray[randomItem]];
  };

  render() {
    const { userSelect, computerSelect, result, computerResult } = this.state;
    return (
      <>
        <div className="main">
          <Box title="You" item={userSelect} result={result} />
          <Box title="Computer" item={computerSelect} result={computerResult} />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </>
    );
  }
}

export default App;
