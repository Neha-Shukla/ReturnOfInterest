import React from "react";
import Btn from "./Buttons/Btn";
import "./Calc.css";
const Calc = () => {
  return (
    <div className="calc-container">
      <div className="calc-text">0.0 ETH</div>
      <div className="value-Buttons">
        <Btn></Btn>
        <button className="reset-btn">RESET</button>
        <button className="join-btn">JOIN</button>
      </div>
    </div>
  );
};

export default Calc;
