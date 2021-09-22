import React, { Component } from "react";
import Blocks from './components/Blocks';


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
       <h1>Welcome</h1>
       <div>Address: {address}</div>
       <div>Balance:{balance}</div>
       <br />
       <Blocks />
      </div>
    );
  }
}

export default App;
