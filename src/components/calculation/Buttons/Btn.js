import React from 'react';
import './Btn.css'
const Btn = () => {
    return (

        <div className="Btn-container">
        <button className="add-ether-btn"> + [0.1ETH]</button>
        <button className="add-ether-btn"> + [0.5ETH]</button>
        <button className="add-ether-btn"> + [1ETH]</button>
        <button className="add-ether-btn"> + [3ETH]</button>
        <button className="add-ether-btn"> + [5ETH]</button>
        <button className="add-ether-btn"> + [10ETH]</button>
        </div>

    )
}


export default Btn;