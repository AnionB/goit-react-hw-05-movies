import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom';
import { getMovieInfo } from 'components/FetchData/FetchData';
import styles from './MovieInfo.module.css';

function MovieInfo(props) {
  const { movieId } = useParams();
  const [filmInfo, setFilmInfo] = useState();
  let navigate = useNavigate();
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
        <button onClick={() => navigate(-1)}>go back</button>
        <div className={styles.filmThumb}>
          <img
            src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
            alt={`poster of ${original_title}`}
          />
          <div className="filmInfoThumb">
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
        <div className="additionalInfo">
          <h3>Additional information</h3>
          <Link to={'cast'}>Cast</Link>
          <Link to={'reviews'}>Reviews</Link>
          <Outlet></Outlet>
        </div>
      </>
    );
  }
}

export default MovieInfo;
