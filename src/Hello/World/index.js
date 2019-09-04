import React from "react";
// import ReactDOM from "react-dom";
// import { withStyles } from "@6thquake/react-material/styles";
import Button from "@6thquake/react-material/Button";
import theme from "../../../themes";
import { withStyles, MuiThemeProvider } from "@6thquake/react-material/styles";
import { withRouter, Link } from "react-router-dom";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class World extends React.Component {
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
        <h1>World World this is Child World</h1>
        <h1>World World this is Child World</h1>
        <h1>World World this is Child World</h1>

        <h1>World World this is Child World</h1>
      </div>
    );
  }
}
export default withStyles(styles)(World);
