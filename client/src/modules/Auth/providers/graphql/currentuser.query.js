import { gql } from 'apollo-boost'

const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username
      joinDate
      email
    }
  }
`

export default GET_CURRENT_USER
