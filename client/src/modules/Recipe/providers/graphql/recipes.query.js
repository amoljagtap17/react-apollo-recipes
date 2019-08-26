import { gql } from 'apollo-boost'

const GET_ALL_RECIPES = gql`
  query {
    getAllRecipes {
      _id
      name
      category
    }
  }
`

export default GET_ALL_RECIPES
