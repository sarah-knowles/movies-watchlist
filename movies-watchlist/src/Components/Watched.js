import React from 'react'
import Resultcard from '../Components/Resultcard'

export const Watched = () => {
  let results = ['a', 'b', 'c']
  return (
    <div>
      <h1>Watched page</h1>
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
