import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FluxComponent from "../../FluxComponent";
import ReduxComponent from "../../ReduxComponent";
import Hello from "../../Hello";
const BasicRoute = () => (
  <Router>
    {/* <Switch> */}
    <ul>
      <li>history模式</li>
      <li>
        <Link to="/flux">FluxComponent</Link>
      </li>
      <li>
        <Link to="/redux">ReduxComponent</Link>
      </li>
      <li>
        <Link to="/hello">Hello</Link>
      </li>
      <li>
        <Link to="/fall">fall</Link>
      </li>
    </ul>
    <Route path="/flux" component={FluxComponent} />
    <Route path="/redux" component={ReduxComponent} />
    <Route path="/hello" component={Hello} />
    <Route path="/fall" render={() => <h1>404 not found</h1>} />
    {/* </Switch> */}
  </Router>
);

export default BasicRoute;
