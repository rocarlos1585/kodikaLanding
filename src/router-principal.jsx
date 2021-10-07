import React, { Component } from 'react';
import {Route, HashRouter, BrowserRouter, Switch,Router} from 'react-router-dom'

import App2 from './App.js';
import { Landing } from './pages/Landing.jsx';
import { Proceso } from './pages/Proceso.jsx';



class RouterPrincipal extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path='/proceso' component={Proceso}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default RouterPrincipal;