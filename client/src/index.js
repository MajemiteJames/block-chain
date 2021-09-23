import React from 'react';
import ReactDOM from 'react-dom';
import history from '../src/history';
import { Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Blocks from '../src/components/Blocks';

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/blocks' component={Blocks} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
