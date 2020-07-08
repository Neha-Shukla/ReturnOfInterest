import React from "react";
import './Content.css';
import Counter from '../counter/Counter'
const Content = () => {
  return (
    <div className="content-container">
      <h1>ETHER CHAIN</h1>
      <div className="calc">
        <Counter></Counter>
        <span className="unit">/---ETH</span>
      </div>
      <p>A FULLY DECENTRALISED COMMUNITY FUND,</p>
      <p>A FINANCIAL SYSTEM BASED ON BLOCKCHAIN</p>
      <p>AND SMARTCONTRACT TECHNOLOGY TRANSPARENT TO ALL</p>
    </div>
  );
};

export default Content;
