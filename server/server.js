const express = require('express')
const server = express()
const PORT = process.env.port || 4000

//to format requests into JSON
server.use(express.json())

//to correctly get the information from submissions
server.use(express.urlencoded({ extended: false }))

const articleRouter = require('./article/router')

server.use('/articles', articleRouter)


const mongoose = require('mongoose')
// connect to the database
mongoose.connect(`mongodb+srv://tommy:Apples123!@cluster0-gpuq1.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
// open the connection
const connection = mongoose.connection
connection.once('open', () => console.log("MongoDB connection established."))

server.listen(PORT, () => console.log(`Express server listening on port ${PORT}`))