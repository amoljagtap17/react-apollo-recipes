const { gql } = require('apollo-server-express')

exports.typeDefs = gql`
  type Query {
    getAllRecipes: [Recipe]
  }

  type Mutation {
    addRecipe(
      name: String!
      description: String!
      category: String!
      instructions: String!
      username: String
    ): Recipe
  }

  type Recipe {
    name: String!
    category: String!
    description: String!
    instructions: String!
    createdDate: String
    likes: Int
    username: String
  }

  type User {
    username: String!
    password: String!
    email: String!
    joinDate: String
    favorites: [Recipe]
  }
`
// TODO: username: String! @unique not working
