import request from 'superagent'

export function deleteMovie (id) {
  return request
    .delete('/api/v1/watchlist/' + id)
}

export function getAllMovies () {
  return request
    .get('/api/v1/watchlist')
    .then(res => res.body)
}

export function addMovieToWatchlist (movie) {
  return request
    .post('/api/v1/watchlist')
    .send({ movie })
    .then((res => res.body))
}

export function patchMovie (id, patchData) {
  return request.patch('/api/v1/movies' + id)
  .send(patchData)
  .then(res => res.body)
}

export function postMovie (movie) {
  return request
  .post('/api/v1/movies')
  .send({ movie })
  .then(response => response.body)
}