import React from "react";
import ReactDOM from "react-dom";
// import { withStyles } from "@6thquake/react-material/styles";
import Button from "@6thquake/react-material/Button";
import theme from "../../themes";
import { withStyles, MuiThemeProvider } from "@6thquake/react-material/styles";
import src from "../assets/xx.png";
// import jquery from "../jquery.js";
import "./index.css";
import AppDispatcher from "../Flux/dispatcher";
import * as AppAction from "../Flux/action";
import AppStore from "../Flux/store";
import Hello from "../Hello";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class FluxComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "this is Flux",
      count: AppStore.getNum()
    };
    this.handleNum = this.handleNum.bind(this);
    var esca = (
      <a href="https://baidu.com">
        <span>5&gt;3{true && "--this is true"}</span>
      </a>
    );
  }

  componentDidMount() {
    AppStore.addChangeListener("numChange", this.handleNum);
  }
  handleIncrement() {
    AppAction.increment(1);
  }
  handleDecrement() {
    AppAction.decrement(1);
  }

  handleNum() {
    this.setState({
      count: AppStore.getNum()
    });
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
          <a href="#/hello">hash模式下下去Hello</a>
          <div>
            <img src={src} alt="" className="image" />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
export default withStyles(styles)(FluxComponent);
