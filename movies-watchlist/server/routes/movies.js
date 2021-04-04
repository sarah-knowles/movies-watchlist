const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/watchlist', (req, res) => {
    db.listMovies()
        .then(movies => {
            res.json(movies)
            return null
        })
        .catch(err => {
            res.status(500).send(err.message)
        })
})
router.delete('watchlist/delete/:id', (req, res) => {
    const id = Number(req.params.id)
    if (id < 1 || isNaN(id)) return res.sendStatus(400)
    db.deleteMovie(id)
        .then(() => res.sendStatus(200))
        .catch(() => res.sendStatus(500))
})


module.exports = router