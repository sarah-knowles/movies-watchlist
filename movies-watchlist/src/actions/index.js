import { getAllMovies, deleteMovie } from '../api functions/index'
export const DELETE_MOVIE = 'DELETE_MOVIE'
export const GET_MOVIES = 'GET_MOVIES'
//export const ADD_MOVIE_TO_WATCHLIST = 'ADD_MOVIE_TO_WATCHLIST'


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

// export function addMovieToWatchlist (movie) {
//   dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
// }