import React from "react";

const Box = (props) => {
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="box-img" src={props.item && props.item.img} alt="rock" />
      <p>Win</p>
    </div>
  );
};

export default Box;
