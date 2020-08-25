import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

const App = () => {
  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    const url = `/search/${searchInput}`;
    history.push(url);
  };

  return (
    <PhotoContextProvider>
      <BrowserRouter>
        <div className="container">
          <Route
            render={(props) => (
              <Header handleSubmit={handleSubmit} history={props.history} />
            )}
          />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/mountain" />} />

            <Route
              path="/mountain"
              render={() => <Item searchTerm="mountain" />}
            />
            <Route path="/beach" render={() => <Item searchTerm="beach" />} />
            <Route path="/bird" render={() => <Item searchTerm="bird" />} />
            <Route path="/food" render={() => <Item searchTerm="food" />} />
            <Route
              path="/search/:searchInput"
              render={(props) => (
                <Search searchTerm={props.match.params.searchInput} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </PhotoContextProvider>
  );
};

export default App;
