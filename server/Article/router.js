const express = require('express')
const router = express.Router()

router.post('/', (request, response) => {
    //Create an article with form data
})

const Article = require('./article.model')

router.post('/', (request, response) => {
  console.log('POSTING TO THIS ROUTE')
  Article.create( request.body, (error, article) => {
    console.log('CREATED THE ARTICLE', { error, article })
    if (error) {
      console.log(`Error creating Article, ${new Date()}: ${error}`)
      response.status(400).json(error)
    }
    else {
      response.status(201).json(article)
    }
  })
})

module.exports = router 