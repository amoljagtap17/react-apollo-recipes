import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import { SigninContainer, SignupContainer } from './modules/Auth'
import { Search, AddRecipe } from './modules/Recipe'
import { Profile } from './modules/Profile'

import App from './App'
import Navbar from './core/Navbar'
import withSession from './modules/Auth/providers/withSession'

const Routes = ({ refetch, session }) => (
  <Router>
    <Fragment>
      <Navbar session={session} />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/search" component={Search} />
        <Route path="/profile" component={Profile} />
        <Route path="/recipe/add" component={AddRecipe} />
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
