import React, { Component } from "react";
import { AppContext } from "contexts/app";
import { Route, Redirect, Switch } from "react-router-dom";
import AppPage from './AppPage'
import Identity from "util/identity";
import "@hbsis.uikit/react/dist/uikit.css";

class Application extends Component {
  constructor(p) {
    super(p);
    this.state = {
      session: Identity.loadFromLocal()
    };
  }

  setUserSession = user => {
    const session = this.state.session.setSession(user);
    this.setState({ session });
  };

  logout = () => {
    const { session } = this.state;
    session.deleteSession();
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          setUserSession: this.setUserSession,
          logout: this.logout
        }}
      >
        <Switch>
          <Route path="/app" component={AppPage} />
          <Redirect to="/app" />
        </Switch>
      </AppContext.Provider>
    );
  }
}

export default Application;
