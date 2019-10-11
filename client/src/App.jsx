import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SinglePage from './pages/SinglePage'
import AdminPage from './pages/AdminPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={SinglePage} />
        <Route path="/Admin" component={AdminPage} />
        <Route path="/Register" component={RegisterPage} />
        <Route path="/Login" component={LoginPage} />
      </div>
    </Router>
  )
}

export default App
