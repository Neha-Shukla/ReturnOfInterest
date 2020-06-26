import React,{Component} from "react";
import Btn from "./Buttons/Btn";
import "./Calc.css";
import { useState } from "react";
import { render } from "react-dom";

export default class Calc extends Component {


   constructor(){
     super();
     this.state={
       value:0
      
     }
   }
    
   changeData(item){
     let a=parseFloat(this.state.value+item);
     
     this.setState({value:a})
   }
 

  render() {
  
    return(
      <div className="calc-container">
      <div className="calc-text">{this.state.value}</div>
      <div className="value-Buttons">
        <Btn data={
         { value:this.state.value,
          changeData:this.changeData.bind(this)
        }

        }></Btn>
        <button className="reset-btn" onClick={()=>{
          this.setState({value:0})
        }}>RESET</button>
        <button className="join-btn">JOIN</button>
      </div>
    </div>
    )
   
    };
};

// export default Calc;
