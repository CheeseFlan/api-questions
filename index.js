const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const morgan = require('morgan')
const server = express()
const cors = require('./utils/cors')
const config = require('./config')

const useMongoClient = { useMongoClient: true }

mongoose.connect(config.databaseUrl, useMongoClient, (err, res) => {
  return err ? console.log('Could not connect any database!')
             : console.log('The database has been successfully connected!')
})

mongoose.Promise = global.Promise

server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())

server.use(cors)

// server.use(morgan('dev'))

server.post('/api/login', require('./middlewares/auth'))

server.use('/api', require('./src/routes/user'))
server.use('/api', require(('./src/routes/questions')))

server.use((err, req, res, next) => {
  res.status(err.status || 500).send({ ERROR: err.message })
})

server.get('/', (req, res, next) => res.send('Hello there!!!'))

server.listen(config.port, () => console.log(`Server is running on port: ${config.port}`))
