const path = require('path')

// #1 Import Express and Apollo Server
const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const dirPath = path.join(__dirname, '../dev.env')
require('dotenv').config({ path: dirPath })

// #2 Import mongoose
const mongoose = require('./config/database')

// #3 Import GraphQL type definitions
const { typeDefs } = require('./schema')

// #4 Import GraphQL resolvers
const { resolvers } = require('./resolvers')

// #5 Initialize an Apollo server
const apolloServer = new ApolloServer({ typeDefs, resolvers })

// #6 Initialize an Express application
const app = express()

// #7 Use the Express application as middleware in Apollo server
apolloServer.applyMiddleware({ app, path: '/api' })

// #8 Set the port that the Express application will listen to
const PORT = process.env.PORT || 4444

app.listen(PORT, () => {
  console.log(
    `Server listening on PORT ${PORT} with endpoint ${apolloServer.graphqlPath}`
  )
})
