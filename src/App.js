 import React from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Item from "./components/Item";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./global";
import { ToggleIcon } from "./global";
import usePersistedState from "./hooks/usePersistedState";
import dark from "./Styles/dark";
import light from "./Styles/light";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
function App() {

  const [theme, setTheme] = usePersistedState("theme-app", dark);

  // Prevent page reload, clear input, set URL and push history on submit
  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };



  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };
  const toggleIcon =  theme.title === "light" ? <BsFillMoonFill /> : <BsFillSunFill />;
  
    return (
      <PhotoContextProvider>
         <ToggleIcon onClick={toggleTheme}> {toggleIcon} </ToggleIcon>
        <ThemeProvider theme={theme}>
          <HashRouter basename="/SnapScout">
            <div className="container">
              <Route
                render={(props) => (
                  <Header
                    handleSubmit={handleSubmit}
                    history={props.history}
                  />
                )}
              />
              <GlobalStyles />
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
                <Route
                  path="/beach"
                  render={() => <Item searchTerm="beach" />}
                />
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
          </HashRouter>
        </ThemeProvider>
      </PhotoContextProvider>
    );
  }


export default App;
