import { UPDATE_MOVIES, GET_MOVIES, DELETE_MOVIE, ADD_MOVIE_TO_WATCHLIST } from '../actions/index'

function movies (state = [], action) {
  switch (action.type) {
    case UPDATE_MOVIES:
      return state.map(movie => {
        if (movie.id === action.id) {
          return { ...movie, ...action.updatedMovie }
        }
        return movie
      })

    case GET_MOVIES:
      return action.movies

    case DELETE_MOVIE :
      return state.filter(movie => movie.id !== action.id)

    case ADD_MOVIE_TO_WATCHLIST:
      return {...state, watchlist}  
      
    default :
      return state
  }
}

export default movies