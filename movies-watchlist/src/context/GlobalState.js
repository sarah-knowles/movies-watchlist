import React, {createContext, useReducer, useEffect} from 'react';
import AppReducer from '../reducers/AppReducer';


const initialState = {
  watchlist: [],
  watched: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);


  const addMovieToWatchlist = (movie) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie });
  };
  
  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: id });
  };

  return (
      <GlobalContext.Provider 
      value={{ watchlist: state.watchlist, watched: state.watched, addMovieToWatchlist, removeMovieFromWatchlist }}>
        {props.children}
      </GlobalContext.Provider>

  )
}

export default GlobalContext;


// Your action invocation is always done by invoking dispatch. 
//The flow should be something like this:
// React component --> dispatch ---> API call (thunk middleware) 
//  --> dispatch ---> reducer