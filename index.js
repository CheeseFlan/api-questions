const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const server = express()
const PORT = process.env.port || 3000
const cors = require('./utils/cors')

mongoose.connect('mongodb://joao:123@ds121665.mlab.com:21665/api-questions', { useMongoClient: true }, (err, res) => {
  return err ? console.log('Could not connect any database!') : console.log('The database has been successfully connected!')
})

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use(cors)

server.get('/', (req, res, next) => res.send('Hello there!!!'))

server.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
