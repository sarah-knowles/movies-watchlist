require('dotenv').config()
const express = require('express')
const path = require('path')
const request = require('superagent')
const server = express()
const moviesDatabase = `https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY_TMDB}&page=1&`
server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.get('/api/search', (req, res) => {
  request
    .get(moviesDatabase)
    .then(response => res.json(response.body))
})

module.exports = server