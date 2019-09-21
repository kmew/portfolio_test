import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import MembersBody from '../src/Components/Memberspage/layout/MembersBody';
import Memberspage from "./Pages/Memberspage"

import SinglePage from './Pages/SinglePage'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route path="/MembersBody" component={MembersBody} /> */}
          <Route path="/Memberspage" component={Memberspage} />
          <Route path="/SinglePage" component={SinglePage} />
          {/* <SinglePage /> */}
        </div>
      </Router>
    )
  }
}

export default App
