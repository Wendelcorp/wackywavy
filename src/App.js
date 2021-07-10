import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Wacky from './Wacky'
import Wackybuilder from './Wackybuilder'

export default class App extends React.Component {


  render() {

  return (
    <div className={"container"}>
    <Router>
    <div>
      <Switch>
        <Route path="/wacky">
          <Wacky />
        </Route>
        <Route path="/">
          <Wackybuilder />
        </Route>
      </Switch>
    </div>
  </Router>
    </div>
  )}
}
