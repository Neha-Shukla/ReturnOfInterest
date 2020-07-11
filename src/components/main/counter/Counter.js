import React, { Component } from 'react';


export default class Counter extends Component{
    // const date=new Date();
    state={
        hour:23-new Date().getHours(),
        min:60-new Date().getMinutes(),
        sec:60-new Date().getSeconds(),
        balance : 0
    }

     send(){
        // event.preventDefault()
        console.log("send");
       this.props.sendDaily()
       this.setState({balance : this.state.balance+this.props.balanceReceived});
       console.log(this.state.balance);
     }
      
      componentDidMount(){
          this.myInterval=setInterval(()=>{
            const{hour,min,sec}=this.state
            if(sec>0){
                this.setState(({sec})=>({
                 sec:sec-1,
                }))
                // console.log('sec calling');
            }
           
           
            else if(sec===0){
                if(min===0){
                    if(hour===0){
                        this.setState(({hour})=>({
                            hour:24,
                            min:0,
                            sec:0,
                        }))
                        this.send();
                    }
                    else{
                        this.setState(({hour})=>({
                            hour:hour-1,
                            min:59,
                            sec:59
                        }))
                        // console.log("hour calling");

                    }
                  
                }
                else{
                    this.setState(({min})=>({
                        min:min-1,
                        sec:59,
                    }))
                    // console.log("min calling");
                }
               

            }
            
        
          },1000)
          
      }
      componentWillUnmount(){
          clearInterval(this.myInterval)
      }
     
      constructor(){
        super();
        }
        
      
      
     render(){
       const {hour,min,sec}=this.state;

         return(
             <>
         <h1>{hour}:{min}:{sec}</h1>
         {/* <button onClick={this.send()}>SEND DAILY</button> */}
            
         </>
         )
     }
}