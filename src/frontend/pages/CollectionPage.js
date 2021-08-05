import React, {Component} from 'react'
import {withRouter} from 'react-router';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Container, Nav } from 'react-bootstrap';
import Coinja from "../../abis/Coinja.json";
import "./CollectionPage.css";
import Web3 from "web3";

class CollectionPage extends React.Component{

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
        const accounts = await web3.eth.getAccounts();
        this.setState({ account: accounts[0] });
    
        const networkId = await web3.eth.net.getId();
        const networkData = Coinja.networks[networkId];
        console.log(networkData)
        if (networkData) {
          const abi = Coinja.abi;
          const address = networkData.address;
          console.log(address)
          const contract = new web3.eth.Contract(abi, address);
          this.setState({ contract });
          const totalSupply = await contract.methods.totalSupply().call();
          this.setState({ totalSupply });
          const balance = await web3.eth.getBalance(this.state.account) / 1e18
          this.setState({balance})
          console.log(balance)
          const tokenURI = await contract.methods.tokenURI(5).call();
          this.setState({tokenURI})
          console.log(tokenURI)
        } else {
          window.alert("Smart contract not deployed to detected network.");
        }
      }

      mint = () => {
        this.state.contract.methods.mint("abc").send({ from: this.state.account })
        .once('receipt', (receipt) => {
          this.setState({
            newCoinId: [...this.state.newCoinId]
          })
        })
      }

      async getNFTMetadata() {
        
      }

      constructor(props) {
        super(props);
        this.state = {
          account: "",
          contract: null,
          totalSupply: 0,
          newCoinId: 0 ,
          balance: 0,
          address: "",
          tokenURI: "",
        };
      }
      
    render()
    {
        return(
            
            <div id="woo">
                <ul>
                    <li>Account: {this.state.account}</li>
                    <li>Balance: {this.state.balance} ETH</li>
                    <li>Total Supply: {this.state.totalSupply}</li>
                    <li>Will to Live: {this.state.tokenURI}</li>
                </ul>
                <button onClick={this.mint}>Mint</button>
                <button onClick={this.getNFTMetadata}>Get</button>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(CollectionPage);