import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPopularMovie } from 'components/FetchData/FetchData';

function PopularFilm() {
  const [trendMovies, setTrendMovies] = useState();
  useEffect(() => {
    getPopularMovie().then(setTrendMovies);
  }, []);
  if (trendMovies) {
    return (
      <div>
        <h1>Trending today</h1>
        <ul>
          {trendMovies.map(({ id, original_title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{original_title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PopularFilm;
