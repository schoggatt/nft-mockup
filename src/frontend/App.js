import React, { Component } from "react";
import Web3 from "web3";
import "./App.css";
import Coinja from "../abis/Coinja.json";
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom"
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'

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

  async loadBlockchainData() {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });

    const networkId = await web3.eth.net.getId();
    const networkData = Coinja.networks[networkId];
    if (networkData) {
      const abi = Coinja.abi;
      const address = networkData.address;
      const contract = new web3.eth.Contract(abi, address);
      this.setState({ contract });
      const totalSupply = await contract.methods.totalSupply().call();
      this.setState({ totalSupply });
    } else {
      window.alert("Smart contract not deployed to detected network.");
    }
  }

  mint = () => {
    this.state.contract.methods.mint().send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.setState({
        newCoin: [...this.s]
      })
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      account: "",
      contract: null,
      totalSupply: 0,
      newCoinId: 0 
    };
  }

  

  render() {
    return (
      <Router>
          <Switch>
            <Route path="/" component={MainPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
      </Router>
    );
  }
}

export default App;
