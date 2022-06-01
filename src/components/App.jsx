import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Movie = lazy(() => import('./Movie/Movie'));
const MovieInfo = lazy(() => import('./MovieInfo/MovieInfo'));
const Navigation = lazy(() => import('./Navigation/Navigation'));
const PopularFilms = lazy(() => import('./PopularFilms/PopularFilms'));
const Search = lazy(() => import('./Search/Search'));
const Page404 = lazy(() => import('./Page404/Page404'));

export const App = () => {
  return (
    <Suspense>
      <Navigation />
      <Routes>
        <Route path="/" element={<PopularFilms />} />
        <Route path="movies" element={<Movie />}>
          <Route path="" element={<Search />} />
          <Route path=":movieId/*" element={<MovieInfo />}></Route>
        </Route>
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};
