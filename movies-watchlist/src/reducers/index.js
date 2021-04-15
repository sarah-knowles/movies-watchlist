  
import { ADD_MOVIE_TO_WATCHLIST, SET_MOVIES, DELETE_MOVIE, SET_MOVIE } from '../actions/index';

export default function movies (state = [], action) {
  switch (action.type) {
    case ADD_MOVIE_TO_WATCHLIST :
      return [...state, action.movie]

    case SET_MOVIES :
      return action.movies

    case DELETE_MOVIE :
      return state.filter(movie => movie.id !== action.id)

    case SET_MOVIE :
      return state.map(movie => movie.id === action.movie.id ? action.movie : movie)

    default :
      return state
  }
}