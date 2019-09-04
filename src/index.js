import React from "react";
import ReactDOM from "react-dom";
// import FluxComponent from "./FluxComponent/index.js";
import Button from "@6thquake/react-material/Button";
import { withStyles, MuiThemeProvider } from "@6thquake/react-material/styles";
import theme from "../themes";
// import ReduxComponent from "./ReduxComponent/index.js";
import HashRoute from "./modules/router/hashRoute";
import BrowserRoute from "./modules/router/browserRoute";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <HashRoute></HashRoute>
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
