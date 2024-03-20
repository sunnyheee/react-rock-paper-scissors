import React from "react";

const Box = (props) => {
  const boxClass =
    props.result === "win" ? "win" : props.result === "lose" ? "lose" : "";

  return (
    <div className={`box ${boxClass}`}>
      <h1>{props.title}</h1>
      {props.item && props.item.img ? (
        <img
          className="box-img"
          src={props.item && props.item.img}
          alt="rock"
        />
      ) : (
        <p className="noitemtxt">가위바위보를 선택해 주세요</p>
      )}
      <p className="result">{props.result}</p>
    </div>
  );
};

export default Box;
