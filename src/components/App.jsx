import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Cast = React.lazy(() => import('./Cast/Cast'));
const Movie = React.lazy(() => import('./Movie/Movie'));
const MovieInfo = React.lazy(() => import('./MovieInfo/MovieInfo'));
const Navigation = React.lazy(() => import('./Navigation/Navigation'));
const PopularFilms = React.lazy(() => import('./PopularFilms/PopularFilms'));
const Reviews = React.lazy(() => import('./Reviews/Reviews'));
const Search = React.lazy(() => import('./Search/Search'));

export const App = () => {
  return (
    <Suspense fallback="Loading...">
      <Navigation />
      <Routes>
        <Route path="/" element={<PopularFilms />} />
        <Route path="movies" element={<Movie />}>
          <Route path="" element={<Search />} />
          <Route path=":movieId" element={<MovieInfo />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
