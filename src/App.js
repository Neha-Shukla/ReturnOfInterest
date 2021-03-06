import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Logo from "./components/main/logo/Logo";
import Content from "./components/main/content/Content";
import NavBar from "./components/navigation/NavBar";
import Calc from "./components/calculation/Calc";
import Collection from "./components/stats/collection/Collection";
import Footer from "./components/footer/Footer";
import Web3 from "web3";
import ReturnOnInterest from "./abis/ReturnOnInterest.json";



class App extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }

  state = {
    account: "0x",
    contract: "0x",
    balance: 0,
    totalUsers: 0,
    dailyIncome:0,
    totalAmountWitdrawn:0,
    personalInvited:0,
    amountInDailyPool:0,
    referalIncome:0,
    incomeWithdrawnToWallet:0,
    totalInvestment:0,
    balanceReceived:0
  };
  async loadBlockchainData() {
    try{
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const networkId = await web3.eth.net.getId();
    const networkData = ReturnOnInterest.networks[networkId];
    if (networkData) {
      const roi = web3.eth.Contract(ReturnOnInterest.abi, networkData.address);
      this.setState({ roi });

      this.setState({
        amountInDailyPool:web3.utils.fromWei(web3.utils.toBN(await roi.methods.getDailyAmount.call()).toString(),"ether"),
        personalInvited: web3.utils.toBN(await roi.methods.getReferals(this.state.account).call()).toString(),
        totalUsers: web3.utils.toBN(await roi.methods.currUserId.call()).toString(),
        contract: networkData.address,
        balance: web3.utils.fromWei(
          await web3.eth.getBalance(networkData.address),
          "ether"
        ),
        balanceReceived : web3.utils.fromWei(web3.utils.toBN(await roi.methods.getBalanceReceived().call({from:this.state.account})),"ether"),
        amountWithdrawn: web3.utils.fromWei(web3.utils.toBN(await roi.methods.totalWithdrawn.call()).toString(),"ether"),
        referalIncome:web3.utils.fromWei(web3.utils.toBN(await roi.methods.getReferalsIncome(this.state.account).call()),"ether"),
        incomeWithdrawnToWallet:web3.utils.fromWei(web3.utils.toBN(await roi.methods.getIncomeWithdrawnToWallet(this.state.account).call()),"ether"),
        totalInvestment: web3.utils.fromWei(web3.utils.toBN(await roi.methods.totalInvestment.call())),
        dailyIncome:web3.utils.fromWei(web3.utils.toBN(await roi.methods.getUserDailyIncome(this.state.account).call()))
      });
      
    } else {
      window.alert(
        "ReturnOnInterest contract not deployed to detected network."
      );
    }
  }
    catch(e){
      console.log(e);
      console.log("you have an error");
    }
  }
  async enter(entryTime,price){
    this.setState({ loading: true });
    this.state.roi.methods.Enter(entryTime).send({from:this.state.account,value:price})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }
  async withdraws(){
    this.setState({ loading: true });
    try{
    this.state.roi.methods.withdraw().send({from:this.state.account})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }catch(e){
    console.log(e);
  }
  }

  async sendDaily(){
      this.setState({ loading: true });
      this.state.roi.methods.sendROI().send({from:this.state.account})
      .once('receipt', (receipt) => {
        this.setState({ loading: false })
      })
  }


  async enterThroughReferal(referalId,entryTime,price){
    this.setState({ loading: true });
    this.state.roi.methods.enterThroughReferals(referalId,entryTime).send({from:this.state.account,value:price})
    .once('receipt', (receipt) => {
      this.setState({ loading: false })
    })
  }
  constructor(props){
    super(props);
    this.enter = this.enter.bind(this);
    this.withdraws = this.withdraws.bind(this);
    this.enterThroughReferal = this.enterThroughReferal.bind(this);
    this.sendDaily = this.sendDaily.bind(this);
  }

  render() {
   
    return (
      <div className="main">
        <center>
          <div className="header-container">
            <Header address={this.state.account}></Header>
          </div>

          <div className="main-container">
            <Logo></Logo>
            <Content 
            sendDaily = {this.sendDaily}
            balanceReceived = {this.balanceReceived}
            >
            </Content>
          </div>
          <div className="App-header">
            <NavBar></NavBar>
            <Calc 
            enter = {this.enter}
            enterThroughReferal = {this.enterThroughReferal}
            >
            </Calc>
            <Collection
              amountWithdrawn={this.state.amountWithdrawn}
              address={this.state.account}
              contractBalance={this.state.balance}
              totalUsers={this.state.totalUsers}
              personalInvited={this.state.personalInvited}
              amountInDailyPool={this.state.amountInDailyPool}
              referalIncome = {this.state.referalIncome}
              dailyIncome = {this.state.dailyIncome}
              totalInvestment = {this.state.totalInvestment}
              incomeWithdrawnToWallet = {this.state.incomeWithdrawnToWallet}
              contract = {this.state.contract}
              withdraws = {this.withdraws}
              sendDaily = {this.sendDaily}
              balanceReceived = {this.state.balanceReceived}
            ></Collection>
          </div>
          <Footer></Footer>
          
        </center>
      </div>
    );
  }
}

export default App;
