require('dotenv').config()
const express = require('express')
const path = require('path')
const request = require('superagent')
const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.get('/api/search', (req, res) => {
  request
    .get(`https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&page=1&`)
    .then(response => res.json(response.body))
})

module.exports = server