const development = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[development]
const connection = require('knex')(config)

function getMovies (db = connection) {
    return db('movies')
    .select()
}

function saveMovie (movie, db = database) {
    return db('movies').insert({ movie })
      .then((ids) => {
        return findMovies(ids[0], db)
      })
  }

module.exports = {
    getMovies,
    saveMovie
}