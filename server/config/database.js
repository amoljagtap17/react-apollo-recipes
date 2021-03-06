// #1 Import mongoose
const mongoose = require('mongoose')

// #2 Create a query string to connect to MongoDB server
const DB_URI = process.env.MONGO_URI

// #3 Connect to MongoDB
mongoose.connect(DB_URI, { useNewUrlParser: true })

// To avoid warning
// DeprecationWarning: collection.ensureIndex is deprecated.
// Use createIndexes instead.
mongoose.set('useCreateIndex', true)

// #4 Add basic event listeners on the mongoose.connection object
mongoose.connection.once('open', () =>
  console.log('Connected to a MongoDB instance')
)
mongoose.connection.on('error', error => console.error(error))

// #5 Export mongoose. You’ll use it in server/server.js file
module.exports = mongoose
