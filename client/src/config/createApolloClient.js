import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:4444/api'
})

export default client