const express = require('express')
const path = require('path')
const app = express()

// Use the built-in express middleware for serving static files from './public'
app.use(express.static(path.join(__dirname + '/client/')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'))
})

// Start the server
const PORT = process.env.WEBPACK_PORT || 8080
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
  console.log('Press Ctrl+C to quit.')
})
