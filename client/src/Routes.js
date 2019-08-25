import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { SigninContainer, SignupContainer } from './modules/Auth'
import { Search } from './modules/Recipe'

import App from './App'
import Navbar from './core/Navbar'
import withSession from './modules/Auth/providers/withSession'

const Routes = ({ refetch }) => (
  <Router>
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/search" exact component={Search} />
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
    </Fragment>
  </Router>
)

const RoutesWithSession = withSession(Routes)

export default RoutesWithSession
