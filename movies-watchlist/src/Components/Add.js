import React, { useState } from "react";
import Resultcard from "./Resultcard";



export const Add = () => {
  
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY_TMDB}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };


  return (
    <>
      <div className="searchbox-wrap">
        <input className='searchbox'
          type="text"
          placeholder="search..."
          value={query}
          onChange={onChange}
        />
      </div>
      <div className="add-content">
        {results.length > 0 && (
          <ul className="results">
            {results.map((movie) => (
              <li key={movie.id}>
                <Resultcard movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};