import { getAllMovies, deleteMovie } from '../api functions/index'
export const DELETE_MOVIE = 'DELETE_MOVIE'
export const GET_MOVIES = 'GET_MOVIES'


export function getAllMovies (movies) {
  return {
    type: GET_MOVIES,
    movies
  }
}

export function deleteMovie (id) {
        return request
    .delete('/api/v1/watchlist/' + id)
}