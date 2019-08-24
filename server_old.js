const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config({ path: 'dev.env' })

const Recipe = require('./models/Recipe')
const User = require('./models/User')

const { ApolloServer } = require('apollo-server-express')

const { typeDefs } = require('./schema')
const { resolvers } = require('./resolvers')

// Connect to database
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('DB connected!'))
  .catch(err => console.error(err))

// To avoid warning
// DeprecationWarning: collection.ensureIndex is deprecated.
// Use createIndexes instead.
mongoose.set('useCreateIndex', true)

// Initialize Express application
const app = express()

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers
})

apolloServer.applyMiddleware({ app, path: '/api' })

const PORT = process.env.PORT || 4444

app.listen(PORT, () => {
  console.log(
    `Server listening on PORT ${PORT} with endpoint ${apolloServer.graphqlPath}`
  )
})
