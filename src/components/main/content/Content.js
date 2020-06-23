import React from "react";
import './Content.css'
const Content = () => {
  return (
    <div className="content-container">
      <h1>ETHER CHAIN</h1>
      <div className="calc">
        <span className="hightlight-value">00:00:00</span>
        <span className="unit">/---ETH</span>
      </div>
      <p>A FULLY DECENTRALISED COMMUNITY FUND,</p>
      <p>A FINANCIAL SYSTEM BASED ON BLOCKCHAIN</p>
      <p>AND SMARTCONTRACT TECHNOLOGY TRANSPARENT TO ALL</p>
    </div>
  );
};

export default Content;
