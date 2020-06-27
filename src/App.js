import React, { Component, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components";
import NoMatchRoute from "./Components/NoMatchRoute";
import "./App.css";
import { GstateContext } from "./helper/global-state";

const SignIn = lazy(() => import("./Components/Auth/SignIn.jsx"));
const SignUp = lazy(() => import("./Components/Auth/SignUp.jsx"));

class App extends Component {
  constructor(props) {
    super(props);

    this.handleGlobalLoading = (bool) => {
      this.setState({
        isGlobalLoading: bool,
      });
    };

    this.state = {
      isGlobalLoading: false,
      handleGlobalLoading: this.handleGlobalLoading,
    };
  }

  render() {
    return (
      <GstateContext.Provider value={this.state}>
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/signin">
                <SignIn
                  handleGlobalLoading={this.handleGlobalLoading}
                  isGlobalLoading={this.state.isGlobalLoading}
                />
              </Route>
              <Route exact path="/signup">
                <SignUp
                  handleGlobalLoading={this.handleGlobalLoading}
                  isGlobalLoading={this.state.isGlobalLoading}
                />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="*">
                <NoMatchRoute />
              </Route>
            </Switch>
          </div>
        </Router>
      </GstateContext.Provider>
    );
  }
}

export default App;
