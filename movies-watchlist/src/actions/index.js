import { postMovie, deleteMovie, patchMovie, getAllMovies } from '../apiFunctions/index';
export const ADD_MOVIE_TO_WATCHLIST = 'ADD_MOVIE_TO_WATCHLIST'
export const SET_ERROR = 'SET_ERROR'
export const SET_MOVIES = 'SET_MOVIES'
export const SET_MOVIE = 'SET_MOVIE'
export const DELETE_MOVIE = 'DELETE_MOVIE'
export const GET_MOVIES = 'GET_MOVIES'


export function addMovieToWatchlist (movie) {
  return { type: ADD_MOVIE_TO_WATCHLIST, movie: movie }
}

function setError (message) {
  return { type: SET_ERROR, message }
}

export function setMovies (movies) {
  return { type: SET_MOVIES, movies }
}

export function setMovie (movie) {
  return { type: SET_MOVIE, movie }
}

export function createDeleteMovie (id) {
  return { type: DELETE_MOVIE, id }
}

export function getMovies () {
    return dispatch => {
      getAllMovies()
        .then(movies => dispatch(setMovies(movies)))
        .catch(err => dispatch(setError(err)))
    }
  }

export function saveMovie (movie) {
  return dispatch => {
    postMovie(movie)
      .then((newMovie) => dispatch(addMovieToWatchlist(newMovie)))
      .catch(err => dispatch(setError(err)))
  }
}

export function fetchMovies () {
  return dispatch => {
    getMovies()
      .then(movies => dispatch(setMovies(movies)))
      .catch(err => dispatch(setError(err)))
  }
}

export function removeMovie (id) {
  return dispatch => {
    deleteMovie(id)
      .then(() => dispatch(createDeleteMovie(id)))
      .catch(err => dispatch(setError(err)))
  }
}

export function updateMovie (id, patchData) {
  return dispatch => {
    patchMovie(id, patchData)
      .then((movie) => dispatch(setMovie(movie)))
      .catch(err => dispatch(setError(err)))
  }
}


// import { getAllMovies, deleteMovie, addMovieToWatchlist } from '../apiFunctions/index';

// export const DELETE_A_MOVIE = 'DELETE_A_MOVIE'
// export const GET_MOVIES = 'GET_MOVIES'
// export const REQUEST_MOVIES = 'REQUEST_MOVIES'
// export const RECEIVE_MOVIES = 'RECEIVE_MOVIES'
// export const ADD_MOVIE = 'ADD_MOVIE'
// export const SET_MOVIES = 'SET_MOVIES'
// export const ADD_MOVIE_TO_WATCHLIST = 'ADD_MOVIE_TO_WATCHLIST'
// export const ADD_MOVIE_TO_WATCHED = 'ADD_MOVIE_TO_WATCHED'
// export const SET_ERROR = 'SET_ERROR'


// export function getMovies () {
//   return dispatch => {
//     getAllMovies()
//       .then(movies => dispatch(setMovies(movies)))
//       .catch(err => dispatch(setError(err)))
//   }
// }

// export function requestMovies () {
//   return {
//     type: REQUEST_MOVIES,
//     movies: movies
//   }
// }

// export function addMovie(movie) {
//   return { 
//     type: ADD_MOVIE_TO_WATCHLIST,
//     movie: movie
//   }
// }

// export function deleteAMovie(id) {
//   return dispatch => {
//     deleteMovie(id)
//       .then(() => dispatch (makeDeleteMovie(id)))
//         .catch(err => dispatch(setError(err)))
//   }
// } 

// export function makeDeleteMovie(id) {
//   return {
//     type: DELETE_A_MOVIE,
//     id
//   }
// }

// export function setMovies(movies) {
//   return {
//     type: SET_MOVIES,
//     movies
//   }
// }

// export function addToWatched(movie) {
//   return {
//     type: ADD_MOVIE_TO_WATCHED,
//     movie
//   }
// }

// export function setError(mes) {
//   return {
//     type: SET_ERROR,
//     mes
//   }
// }