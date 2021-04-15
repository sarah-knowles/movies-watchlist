import { RECEIVE_MOVIES, ADD_MOVIE_TO_WATCHLIST, ADD_MOVIE_TO_WATCHED, DELETE_A_MOVIE, MOVE_TO_WATCHLIST } from '../actions/index';


function movies (state = [], action) {
  switch(action.type) {
    case RECEIVE_MOVIES:
      return action.movies

    case ADD_MOVIE_TO_WATCHLIST:
      return {
        ...state, 
        movies: [action.payload, ...state.movies]
      };

      // case REMOVE_MOVIE_FROM_WATCHLIST:
      // return {
      //   ...state,
      //   watchlist: state.watchlist.filter(
      //     (movie) => movie.id !== action.payload
      //   ),
      // };
      case DELETE_A_MOVIE:
          return state.filter(movie => movie.id !== action.id)

      case ADD_MOVIE_TO_WATCHED:
        return {
          ...state,
          watchlist: state.watchlist.filter(
            (movie) => movie.id !== action.payload.id
          ),
          watched: [action.payload, ...state.watched],
        };
      case ADD_MOVIE_TO_WATCHLIST:
        return {
          ...state,
          watched: state.watched.filter(
            (movie) => movie.id !== action.payload.id
          ),
          watchlist: [action.payload, ...state.watchlist],
        };
      case REMOVE_FROM_WATCHED:
        return {
          ...state,
          watched: state.watched.filter((movie) => movie.id !== action.payload),
        };
    default:
      return state;
  }
}

export default movies;