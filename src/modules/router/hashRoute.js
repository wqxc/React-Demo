import React from "react";
import { HashRouter, Route, Switch, hashHistory } from "react-router-dom";
import FluxComponent from "../../FluxComponent";
import ReduxComponent from "../../ReduxComponent";
import Hello from "../../Hello";
import World from "../../Hello/World";
const BasicRoute = () => (
  <HashRouter history={hashHistory}>
    <ul>
      <li>
        <h1>hash模式</h1>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={FluxComponent} />
      <Route exact path="/redux/:id" component={ReduxComponent} />
      <Route path="/hello" component={Hello}></Route>
    </Switch>
  </HashRouter>
);

export default BasicRoute;
