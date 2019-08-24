import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import App from './App'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      {/* <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} /> */}
      <Redirect to="/" />
    </Switch>
  </Router>
)

export default Routes
