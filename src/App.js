import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        prevSearches:[]
    }
}
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  setPrevSearches = (searchTerm, results) =>{
    console.log("Prev searches reached")
    console.log("searchTerm", searchTerm)
    console.log("results", results)
    let search = { [searchTerm]: results}
    console.log("search", search)
    console.log("preSearches ", this.state.prevSearches)
    var joined = this.state.prevSearches.concat(search);
    this.setState({ prevSearches: joined })
  }

  render() {
    return (
      <PhotoContextProvider setPrevSearches={this.setPrevSearches}>
        <BrowserRouter>
          <div className="container">
            <Route
              render={props => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={props.history}
                />
              )}
            />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/mountain" />}
              />

              <Route
                path="/mountain"
                render={() => <Item searchTerm="mountain" />}
              />
              <Route path="/beach" render={() => <Item searchTerm="beach" />} />
              <Route path="/bird" render={() => <Item searchTerm="bird" />} />
              <Route path="/food" render={() => <Item searchTerm="food" />} />
              <Route
                path="/search/:searchInput"
                render={props => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
