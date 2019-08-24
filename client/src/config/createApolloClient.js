import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'http://localhost:4444/api',
  fetchOptions: {
    credentials: 'include'
  },
  request: operation => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        authorization: token
      }
    })
  },
  onError: ({ networkError }) => {
    if (networkError) {
      console.log('Network Error >>> ', networkError)

      if (networkError.statusCode === 401) {
        // localStorage.setItem('token', '')
        localStorage.removeItem('token')
      }
    }
  }
})

export default client
