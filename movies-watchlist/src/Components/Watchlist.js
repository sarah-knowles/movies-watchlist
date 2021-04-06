import React from 'react'
import Resultcard from '../Components/Resultcard'

let watchlist = []

const Watchlist = () => {

  console.log('watchlist', watchlist)
  return (
    <div>
      <h3 className='title'>Watchlist Page</h3>
      {watchlist.length > 0 ? (
        <ul className='results'>
          {watchlist.map(movie => (
            <li key={movie.id}>
              <Resultcard movie={movie} type='watchlist' />
            </li>
          ))}
        </ul>
      ) : <h3 className='title'>Nothing to watch...</h3>}
    </div>
  )
}

export default Watchlist;