import React, { Component } from 'react';
import PhotoContextProvider from './context/PhotoContext';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from './components/Header';
import Item from './components/Item';
import Search from './components/Search';
import NotFound from './components/NotFound';

const customHistory = createBrowserHistory();

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <Router history={customHistory} basename="/">
          <div className="container">
            <Route
              render={(props) => (
                <Header
                  handleSubmit={this.handleSubmit}
                  history={customHistory}
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
                path="/:searchInput"
                render={(props) => (
                  <Search searchTerm={props.match.params.searchInput} />
                )}
              />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </PhotoContextProvider>
    );
  }
}

export default App;
