import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import apolloClient from './config/createApolloClient'

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div>
        <h1>React Apollo Client</h1>
      </div>
    </ApolloProvider>
  )
}

export default App
