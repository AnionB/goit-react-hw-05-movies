import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCasts } from 'components/FetchData/FetchData';

function Cast(props) {
  const { movieId } = useParams();
  const [castInfo, setCast] = useState();
  useEffect(() => {
    getCasts(movieId).then(setCast);
  }, [movieId]);
  if (castInfo) {
    return (
      <ul>
        {castInfo.map(({ id, name, character, profile_path }) => (
          <li key={id}>
            {profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={name}
              />
            )}
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    );
  }
}

export default Cast;
