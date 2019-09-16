import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import MembersBody from './Components/elements/MembersBody';
import Memberspage from "./Pages/Memberspage"

import SinglePage from './Pages/SinglePage'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/MembersBody" component={MembersBody} />
          <Route path="/Memberspage/:lang" component={Memberspage} />
          {/* <SinglePage /> */}
        </div>
      </Router>
    )
  }
}

export default App
