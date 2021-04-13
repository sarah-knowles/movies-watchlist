import request from 'superagent'

export function deleteMovie (id) {
  return request
    .delete('/api/v1/watchlist/' + id)
}

export function getAllMovies () {
  return request
    .get('/api/v1/watchlist')
    .then(movies => movies.body)
}

export function addMovieToWatchlist (movie) {
  return request
    .post('/api/v1/watchlist')
    .send(movie)
    .then((res => res.body))
}
