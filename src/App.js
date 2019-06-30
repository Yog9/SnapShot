import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

// import app components
import Header from './components/Header';
import Initial from './components/Initial';
import Mountain from './components/Mountain';
import Beach from './components/Beach';
import Bird from './components/Bird';
import Food from './components/Food';
import Search from './components/Search';
import NotFound from './components/NotFound';

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  }

  render() {
    return (
      <HashRouter basename="/SnapScout">
        <div className="container">
          <Route render={props => <Header handleSubmit={this.handleSubmit} history={props.history} />} />
          <Switch>
            <Route exact path="/" component={Initial} />
            <Route path="/mountain" render={() => <Mountain searchTerm="mountain" />} />
            <Route path="/beach" render={() => <Beach searchTerm="beach" />} />
            <Route path="/bird" render={() => <Bird searchTerm="bird" />} />
            <Route path="/food" render={() => <Food searchTerm="food" />} />
            <Route path="/search/:searchInput" render={(props) => <Search searchTerm={props.match.params.searchInput} />} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
