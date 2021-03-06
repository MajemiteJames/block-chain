import React from 'react';
import ReactDOM from 'react-dom';
import history from '../src/history';
import { Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Blocks from '../src/components/Blocks';
import ConductTransaction from '../src/components/ConductTransaction';
import TransactionPool from '../src/components/TransactionPool';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/blocks' component={Blocks} />
        <Route path='/conduct-transaction' component={ConductTransaction} />
        <Route path='/transaction-pool' component={TransactionPool} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
