import React, { lazy, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Home from "./Components";
import NoMatchRoute from "./Components/NoMatchRoute";
import Loading from "./helper/Loading";
import "./App.css";

const SignIn = lazy(() => import("./Components/Auth/SignIn.jsx"));
const SignUp = lazy(() => import("./Components/Auth/SignUp.jsx"));

class App extends Component {
  render() {
    const { loading } = this.props;

    return loading.isLoading ? (
      <Loading />
    ) : (
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/signin">
              <SignIn />
            </Route>
            <Route exact path="/signup">
              <SignUp />
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
    );
  }
}

App.protoTypes = {
  loading: PropTypes.object,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
