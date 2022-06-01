import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from '../../services/FetchData';

function Reviews() {
  const { movieId } = useParams();
  const [review, setReview] = useState();
  useEffect(() => {
    getReview(movieId).then(setReview);
  }, [movieId]);
  if (review) {
    return review.length > 0 ? (
      <ul>
        {review.map(({ author, content, id }) => (
          <li key={id}>
            <h3> Author: {author}</h3>
            <p> {content}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>We don't have any reviews for this movie</p>
    );
  }
}

export default Reviews;
