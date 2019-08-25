import { gql } from 'apollo-boost'

const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`

export default SIGNIN_USER
