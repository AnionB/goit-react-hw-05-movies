import React from 'react';
import { Outlet } from 'react-router-dom';

function Movie() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Movie;
