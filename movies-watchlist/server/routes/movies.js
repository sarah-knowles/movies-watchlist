const express = require('express')
const router = express.Router()
const { getMovies, saveMovie } = require('../db/db')

router.get('/', (req, res) => {
    getMovies()
        .then(movies => {res.json(movies)
        .catch(err => {res.status(500).send(err.message)
      })
    })
  })

router.post('/', (req, res) => {
    saveMovie(req.body)
    .then(movie => res.status(201).json(movie))
    .catch(() => res.sendStatus(500))
})

router.delete('watchlist/delete/:id', (req, res) => {
    const id = Number(req.params.id)
    if (id < 1 || isNaN(id)) return res.sendStatus(400)
    db.deleteMovie(id)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500))
})


module.exports = router