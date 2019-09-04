import React from "react";
// import ReactDOM from "react-dom";
// import { withStyles } from "@6thquake/react-material/styles";
import Button from "@6thquake/react-material/Button";
import theme from "../../themes";
import { withStyles, MuiThemeProvider } from "@6thquake/react-material/styles";
import src from "../assets/xx.png";
import jquery from "../jquery.js";
import "./index.css";
import Store from "../Redux/store";
import * as Actions from "../Redux/action";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class ReduxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "this is Redux",
      count: this.getOwnerState()
    };
  }

  componentDidMount() {}
  handleIncrement() {
    Store.dispatch(Actions.increment(1));
    this.setState({
      count: this.getOwnerState()
    });
  }
  handleDecrement() {
    Store.dispatch(Actions.decrement(1));

    this.setState({
      count: this.getOwnerState()
    });
  }
  getOwnerState() {
    return Store.getState()["num"];
  }
  handleNum() {}
  componentDidMount() {
    var obj = {};
    var p = new Proxy(obj, {
      set(target, key, receiver) {
        console.log("asdadasdsa", target, key, receiver);
        return Reflect.set(target, key, receiver);
      }
    });
    obj.name = "jerry";
  }
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <h1>{this.state.text}</h1>
          <h1>{this.state.count}</h1>
          <Button
            size="medium"
            className={classes.button}
            onClick={this.handleIncrement.bind(this)}
            border
            color={"secondary"}
          >
            计数器加法
          </Button>
          <Button
            size="medium"
            className={classes.button}
            onClick={this.handleDecrement.bind(this)}
            border
            color={"secondary"}
          >
            计数器减法
          </Button>
          <a href="#/">去FluxComponent</a>
          <div>
            <img src={src} alt="" className="image" />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default withStyles(styles)(ReduxComponent);
