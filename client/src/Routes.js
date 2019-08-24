import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { SigninContainer, SignupContainer } from './modules/Auth'

import App from './App'

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/signin" component={SigninContainer} />
      <Route path="/signup" component={SignupContainer} />
      <Redirect to="/" />
    </Switch>
  </Router>
)

export default Routes
