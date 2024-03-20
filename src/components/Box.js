import React, { Component } from "react";

class Box extends Component {
  render() {
    const { title, item, result } = this.props;
    const boxClass = result === "win" ? "win" : result === "lose" ? "lose" : "";

    return (
      <div className={`box ${boxClass}`}>
        <h1>{title}</h1>
        {item && item.img ? (
          <img className="box-img" src={item.img} alt="rock" />
        ) : (
          <p className="noitemtxt">가위바위보를 선택해 주세요</p>
        )}
        <p className="result">{result}</p>
      </div>
    );
  }
}

export default Box;
