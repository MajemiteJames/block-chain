import React, { Component } from "react";
import Blocks from './components/Blocks';
import Logo from '../src/assets/logo.png'


class App extends Component {
  state = { walletInfo: {} };

    componentDidMount() {
    fetch('http://localhost:3100/api/wallet-info')
      .then(response => response.json())
      .then(json => this.setState({ walletInfo: json }));
  }
  
  render(){
    const { address, balance } = this.state.walletInfo;
    return (
      <div className="App">
        <img className="logo" alt="logo" src={Logo} />
        <br />
        <div>
          <h1>Welcome</h1>
        </div>
        <br />
       <div className="WalletInfo">
        <div>Address: {address}</div>
        <div>Balance: {balance}</div>
       </div>
       <br />
       <Blocks />
      </div>
    );
  }
}

export default App;
