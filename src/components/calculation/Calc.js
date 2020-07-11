import React,{Component} from "react";
import Btn from "./Buttons/Btn";
import "./Calc.css";

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
    const web3 = window.web3;
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
          this.setState({value:0.0})
        }}>RESET</button>
        <button onClick={(event) => {
          event.preventDefault()
          const price = this.state.value.toString();
          let created_at = Math.floor(Date.now() / 1000);
          this.props.enter(created_at,web3.utils.toWei(price,"ether"));
        }}
          className="join-btn">JOIN</button>

          <button className="join-btn" onClick={()=>{
            const referalId=prompt("enter ReferalId");
            const price = this.state.value.toString();
            let created_at = Math.floor(Date.now() / 1000);
            this.props.enterThroughReferal(referalId,created_at,web3.utils.toWei(price,"ether"));
          }}>Join with rerer</button>
      </div>
    </div>
    )
   
    };
};

// export default Calc;
