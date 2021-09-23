import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
        <div><Link to='/blocks'>Blocks</Link></div>
        <div><Link to='/conduct-transaction'>Conduct a Transaction</Link></div>
        <br />
       <div className="WalletInfo">
        <div>Address: {address}</div>
        <div>Balance: {balance}</div>
       </div>
      </div>
    );
  }
}

export default App;
