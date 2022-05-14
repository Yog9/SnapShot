import React, {Component} from 'react'
import PhotoContextProvider from './context/PhotoContext'
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  Navigate,
  useNavigate,
  useParams,
} from 'react-router-dom'

import Header from './components/Header'
import Item from './components/Item'
import Search from './components/Search'
import NotFound from './components/NotFound'

function withRouter(Component) {
  return (props) => {
    const navigate = useNavigate()
    const params = useParams()
    return (
      <Component
        {...props}
        navigate={navigate}
        params={params}
        searchTerm={params.searchInput}
      />
    )
  }
}

const Searching = withRouter(Search)
const Headering = withRouter(Header)

class App extends Component {
  // Prevent page reload, clear input, set URL and push history on submit
  handleSubmit = (e, navigate, searchInput) => {
    e.preventDefault()
    e.currentTarget.reset()
    const url = `/search/${searchInput}`
    navigate(url)
  }

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/SnapScout">
          <div className="container">
            <Headering handleSubmit={this.handleSubmit} />
            <Routes>
              <Route path="/" element={<Navigate replace to="/mountain" />} />
              <Route
                path="/mountain"
                element={<Item searchTerm="mountain" />}
              />
              <Route path="/beach" element={<Item searchTerm="beach" />} />
              <Route path="/bird" element={<Item searchTerm="bird" />} />
              <Route path="/food" element={<Item searchTerm="food" />} />
              <Route path="/search/:searchInput" element={<Searching />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </HashRouter>
      </PhotoContextProvider>
    )
  }
}

export default App
