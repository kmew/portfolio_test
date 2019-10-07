import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SinglePage from './pages/SinglePage'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={SinglePage} />
        <Route path="/Admin" component={AdminPage} />
      </div>
    </Router>
  )
}

export default App
