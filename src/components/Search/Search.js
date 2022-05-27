import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

import { getMovie } from 'components/FetchData/FetchData';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmList, setFilmList] = useState();
  useEffect(() => {
    searchParams.toString() &&
      getMovie(searchParams.toString()).then(setFilmList);
  }, [searchParams]);
  function onSubmit(e) {
    e.preventDefault();
    e.target.query.value.trim() &&
      setSearchParams({ query: e.target.query.value });
    e.target.query.value = '';
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="search" name={'query'} />
        <input type="submit" value={'Search'} />
      </form>
      {filmList &&
        (filmList.length > 0 ? (
          <ul>
            {filmList.map(({ id, original_title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`}>{original_title}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Такого фильма нет, попробуй еще раз</p>
        ))}
    </div>
  );
}

export default Search;
