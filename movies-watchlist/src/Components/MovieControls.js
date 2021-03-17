import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const MovieControls = ({ movie, type }) => {
  const { removeMovieFromWatchlist, addMovieToWatched, removeFromWatched, moveToWatchlist } = useContext(GlobalContext);
console.log('moviecontrols', movie)
  return (
    <div className='inner-card-controls'>
      {type === 'watchlist' && (
        <>
          <button className='ctrl-btn' onClick={() => addMovieToWatched(movie)}>
            {/* <i className='fa-fw.far.fa-eye'></i> */}
            <i className="far fa-eye"></i>
          </button>

          <button className='ctrl-btn' onClick={() => removeMovieFromWatchlist(movie.id)}>
            {/* <i className='fa-fw.fa.fa-times'></i> */}
            <i className="fas fa-times"></i>
          </button>
        </>
      )}
      {type === 'watched' &&
        (
          <>
            <button className='ctrl-btn'>
            <i className="far fa-eye" onClick={() => moveToWatchlist(movie)}></i>
            </button>
            <button className='ctrl-btn' onClick={() => removeFromWatched(movie.id)}>
            <i className="fas fa-times"></i>
          </button>
          </>
        )}
    </div>
  )
}

export default MovieControls;

// import React, { useContext } from "react";
// import { GlobalContext } from "../context/GlobalState";

// export const MovieControls = ({ type, movie }) => {
//   const {
//     removeMovieFromWatchlist,
//     addMovieToWatched,
//     moveToWatchlist,
//     removeFromWatched,
//   } = useContext(GlobalContext);

//   return (
//     <div className="inner-card-controls">
//       {type === "watchlist" && (
//         <>
//           <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
//             <i className="fa-fw far fa-eye"></i>
//           </button>

//           <button
//             className="ctrl-btn"
//             onClick={() => removeMovieFromWatchlist(movie.id)}
//           >
//             <i className="fa-fw fa fa-times"></i>
//           </button>
//         </>
//       )}

//       {type === "watched" && (
//         <>
//           <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
//             <i className="fa-fw far fa-eye-slash"></i>
//           </button>

//           <button
//             className="ctrl-btn"
//             onClick={() => removeFromWatched(movie.id)}
//           >
//             <i className="fa-fw fa fa-times"></i>
//           </button>
//         </>
//       )}
//     </div>
//   );
// };

