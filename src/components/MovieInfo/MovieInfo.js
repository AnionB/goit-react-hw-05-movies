import React, { useState, useEffect } from 'react';
import { Link, useParams, Routes, Route, useLocation } from 'react-router-dom';

import { getMovieInfo } from '../../services/FetchData';

import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import BackBtn from '../BackBtn/BackBtn';

import styles from './MovieInfo.module.css';

function MovieInfo() {
  const { movieId } = useParams();

  const [filmInfo, setFilmInfo] = useState();
  const location = useLocation();

  useEffect(() => {
    getMovieInfo(movieId).then(setFilmInfo);
  }, [movieId]);
  if (filmInfo) {
    const {
      original_title,
      vote_average,
      overview,
      genres,
      poster_path,
      release_date,
    } = filmInfo;

    return (
      <>
        <BackBtn loc={location} />

        <div className={styles.filmThumb}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={`poster of ${original_title}`}
          />
          <div className={styles.filmInfoThumb}>
            <h1>
              {original_title}({new Date(release_date).getFullYear()})
            </h1>
            <p>User score: {vote_average}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </div>
        <div className={styles.additionalInfo}>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to={'cast'} state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to={'reviews'} state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </>
    );
  }
}

export default MovieInfo;
