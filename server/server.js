const path = require('path')
const jwt = require('jsonwebtoken')

const dbModels = require('./models')

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
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req, res }) => {
    // console.log('aa', req.currentUser)

    return {
      ...dbModels,
      currentUser: req.currentUser
    }
  },
  playground: {
    settings: {
      'editor.theme': 'light'
    }
  }
})

// #6 Initialize an Express application
const app = express()

app.disable('x-powered-by')
app.set('etag', false)

// set up JWT authentication middleware
app.use(async (req, res, next) => {
  const token = req.headers['authorization']

  if (token !== 'null' && token !== null && token !== undefined) {
    try {
      const currentUser = await jwt.verify(token, process.env.SECRET)

      req.currentUser = currentUser
    } catch (err) {
      console.error(err)
    }
  }

  next()
})

/* const whitelist = ['http://localhost:3000']

const corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
} */

// #7 Use the Express application as middleware in Apollo server
apolloServer.applyMiddleware({
  app,
  path: '/api'
  // cors: corsOptions
})

// #8 Set the port that the Express application will listen to
const PORT = process.env.PORT || 4444

app.listen(PORT, () => {
  console.log(
    `Server listening on PORT ${PORT} with endpoint ${apolloServer.graphqlPath}`
  )
})
