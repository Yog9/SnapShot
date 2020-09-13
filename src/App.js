import React, { Component } from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Route 
              render={props => ( <Header 
              handleSubmit={this.handleSubmit}
              history={props.history}
            /> )} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <Redirect to="/all" />}
              />
							{/* Add your new topic here */}

              <Route 
                path="/all" 
                render={() => <Item 
                  searchTerm="all" 
                />} />
              <Route
                path="/car"
                render={() => <Item 
                  searchTerm="car" 
                />} />
              <Route 
                path="/animals" 
                render={() => <Item 
                  searchTerm="animals" />} />
              <Route 
                path="/bird" 
                render={() => <Item 
                  searchTerm="bird" />} />
              <Route 
                path="/food" 
                render={() => <Item 
                  searchTerm="food" />} />
              <Route
                path="/search/:searchInput"
                render={props => ( <Search 
                  searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    );
  }
}

export default App;
