import React from 'react'
import Resultcard from '../Components/Resultcard'

export const Watchlist = () => {
  let results = [0, 1, 2];
  return (
    <div>
      <h1>Watchlist Page</h1>
      {results.length > 0 && (
            <ul className='results'>
              {results.map(movie => (
                <li key={movie.id}>
                  <Resultcard movie={movie}/>
                </li>
              ))}
            </ul>
          )}
    </div>
  )
}
