import React from 'react';
import { connect } from 'react-redux';
import { addMovieToWatchlist } from '../actions/index';


class Resultcard extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     edit: false,
  //     movie: this.props.movie
  //   }
  // }
  
  // ({ movie, type }) {
    // function addMovieToWatchlist(movie) {
      //   watchlist.push(movie)
      //   console.log(watchlist)
      //   return watchlist
      // }
      
      //check if a movie is already on the watchlist
      //let storedMovie = watchlist.find(o => o.id === movie.id);
      // const watchlistDisabled = storedMovie ? true : false;
      render () {

  return (
    <div className='result-card'>
      <div className='poster-wrapper'>

        {this.props.movie.poster_path ? (
          <img src={`https://image.tmdb.org/t/p/w200${this.props.movie.poster_path}`} alt={`${this.props.movie.title} Poster`} />
        ) : (
          <div className='filler-poster'></div>
        )}
      </div>
      <div className='info'>
        <div className='header'>
          <h3 className='title'>{this.props.movie.title}</h3>
          <h4 className='release-date'>
            {this.props.movie.release_date ? this.props.movie.release_date.substring(0, 4) : '-'}</h4>
        </div>
        <div className='controls'>
          <button className='btn'
            //disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(this.props.movie)}> ADD  </button>
        </div>
      </div>
    </div>
    )
  }
}

export default connect()(Resultcard);