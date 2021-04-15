import React from 'react'
import Resultcard from '../Components/Resultcard'

export function Watched (props) {
  let results = []
  return (
    <div>
      <h1>Watched page</h1>
      {results.length > 0 && (
            <ul className='results'>
              {results.map(movie => (
                <li key={movie.id}>
                  <Resultcard movie={movie} type='watched' />
                </li>
              ))}
            </ul>
          )}
    </div>
  )
}

