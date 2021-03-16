import React, { useState } from 'react';
import Resultcard from './Resultcard';


export const Add = () => {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    if (e.target.value) {
      fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&page=1&query=${e.target.value}`)
  // https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&page=1&query=${e.target.value}`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.errors) {
            setResults(data.results);
          } else {
            setResults([]);
          }
        })
    }
  }


  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <input type='text'
            placeholder='search'
            value={query}
            onChange={onChange}
          />
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
      </div>
    </div>
  )
}
