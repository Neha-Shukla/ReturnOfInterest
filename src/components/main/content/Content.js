import React from "react";
import './Content.css';
import Counter from '../counter/Counter'
const Content = (props) => {
  return (
    <div className="content-container">
      <h1>ETHER CHAIN</h1>
      <div className="calc">
        <Counter 
        sendDaily={props.sendDaily}
        balanceReceived = {props.balanceReceived}
        >
          </Counter>
        <div className="calc">
        </div>
        <span className="unit">/---ETH</span>
      </div>
      <p>A FULLY DECENTRALISED COMMUNITY FUND,</p>
      <p>A FINANCIAL SYSTEM BASED ON BLOCKCHAIN</p>
      <p>AND SMARTCONTRACT TECHNOLOGY TRANSPARENT TO ALL</p>
    </div>
  );
};

export default Content;
