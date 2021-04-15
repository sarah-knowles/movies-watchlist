import React from 'react';
import Resultcard from '../Components/Resultcard';
import { connect } from 'react-redux';
import { getMovies } from '../actions/index';


class Watchlist extends React.Component {
  componentDidMount () {
    this.props.dispatch(getMovies())
    console.log(this.props)
  }


render() {
  const movies = this.props;
  return (
    <div>
      <h3 className='title'>Watchlist Page</h3>
      {movies.length > 0 ? (
        <ul className='results'>
          {movies.map(movie => (
            <li key={movie.id}>
              <Resultcard movie={movie} type='watchlist' />
            </li>
          ))}
        </ul>
      ) : <h3 className='title'>Nothing to watch...</h3>}
    </div>
    )
  }
}


function mapStateToProps (movies) {
  return {
    movies
  }
}

export default connect(mapStateToProps)(Watchlist);