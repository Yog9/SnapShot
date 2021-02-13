import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {


  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Route>
              <Header />
            </Route>
            <Switch>
              <Route
                exact
                path="/">
                <Redirect to="/mountain" />
              </Route>
              <Route
                path="/mountain">
                <Item searchTerm="mountain" />
              </Route>
              <Route path="/beach">
                <Item searchTerm="beach" />
              </Route>
              <Route path="/bird">
                <Item searchTerm="bird" />
              </Route>
              <Route path="/food"  >
                <Item searchTerm="food" />
              </Route>
              <Route
                path="/search/:searchInput">
                <Search />
              </Route>
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
