//import { receiveJokes, updateCohort } from '../actions/index'

export function deleteMovie (id) {
  return request
    .delete('/api/v1/watchlist/' + id)
}

export function getAllMovies () {
  return request
    .get('/api/v1/watchlist')
    .then(movies => movies.body)
}
