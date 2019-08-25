import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { SigninContainer, SignupContainer } from './modules/Auth'

import App from './App'
import withSession from './modules/Auth/providers/withSession'

const Routes = ({ refetch }) => (
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      {/* <Route path="/signin" component={SigninContainer} />
      <Route path="/signup" component={SignupContainer} /> */}
      <Route
        path="/signin"
        render={() => <SigninContainer refetch={refetch} />}
      />
      <Route
        path="/signup"
        render={() => <SignupContainer refetch={refetch} />}
      />
      <Redirect to="/" />
    </Switch>
  </Router>
)

const RoutesWithSession = withSession(Routes)

export default RoutesWithSession
