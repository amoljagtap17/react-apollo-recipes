import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloProvider } from '@apollo/react-hooks'
import apolloClient from './config/createApolloClient'

import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

import Routes from './Routes'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <Routes />
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
