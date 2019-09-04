import React from "react";
// import ReactDOM from "react-dom";
// import { withStyles } from "@6thquake/react-material/styles";
import Button from "@6thquake/react-material/Button";
import theme from "../../themes";
import { withStyles, MuiThemeProvider } from "@6thquake/react-material/styles";
import World from "./World";
import China from "./China";
import { Router, Route, Link, Switch } from "react-router-dom";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleHistoryClick = this.handleHistoryClick.bind(this);
  }
  componentDidMount() {}
  handleClick() {
    this.props.history.push("redux");
  }
  handleHistoryClick() {
    this.props.history.push("/redux");
  }

  render() {
    return (
      <div>
        <h1>Hello Hello Hello Hello Hello </h1>
        <ul>
          <li>
            <a href="#/redux/8">hash模式下去ReduxComponent</a>
          </li>
          <li>
            <Link to="/redux">history模式下去ReduxComponent</Link>
          </li>
          <li>
            <Button onClick={this.handleClick}>hash函数跳转</Button>
          </li>
          <li>
            <Button onClick={this.handleHistoryClick}>history函数跳转</Button>
          </li>
          <li>
            <Link to="/hello/world">前往子组件world子组件</Link>
          </li>
          <li>
            <Link to="/hello/china">前往子组件china子组件</Link>
          </li>
          <li>
            <Link to="/hello">前往Hello组件</Link>
          </li>
        </ul>
        <Route path="/hello" />
        <Route path="/hello/world" component={World} />
        <Route path="/hello/china" component={China} />
      </div>
    );
  }
}
export default withStyles(styles)(Hello);
