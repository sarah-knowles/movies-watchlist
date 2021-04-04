const development = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[development]
const connection = require('knex')(config)

function seeMovies (db = connection) {
    return db('movies')
    .select()
}


module.exports = {
    seeMovies
}