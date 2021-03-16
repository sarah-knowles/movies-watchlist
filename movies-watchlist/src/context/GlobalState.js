import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from './AppReducer';


//initial state
const intitialState = {
  watchlist: [],
  watched:[],
};

//context
export const GlobalContext = createContext(intitialState);

//provider
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, intitialState);


//action
const addMovieToWatchlist = movie => {
  dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
}

  return (
    <GlobalContext.Provider value={{ watchlist: state.watchlist, watched: state.watched, addMovieToWatchlist, }}>
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;