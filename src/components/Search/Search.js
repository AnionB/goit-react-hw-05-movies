import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

import { getMovie } from '../../services/FetchData';
import styles from './Search.module.css';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmList, setFilmList] = useState();
  const location = useLocation();
  const [qur, setQur] = useState('');

  useEffect(() => {
    searchParams.toString() &&
      getMovie(searchParams.toString()).then(setFilmList);
  }, [searchParams]);
  // тут коряво мне кажется, но по другому не придумал
  useEffect(() => {
    searchParams.get('query') && setQur(searchParams.get('query'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onSubmit(e) {
    e.preventDefault();
    e.target.query.value.trim() &&
      setSearchParams({ query: e.target.query.value });
    setQur('');
    // e.target.reset();
  }

  return (
    <div className={styles.searchThumb}>
      <form onSubmit={onSubmit}>
        <input
          type="search"
          name={'query'}
          value={qur}
          onChange={e => setQur(e.target.value)}
        />
        <input type="submit" value={'Search'} />
      </form>
      {filmList &&
        (filmList.length > 0 ? (
          <ul>
            {filmList.map(({ id, original_title }) => (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {original_title}
                </Link>
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
