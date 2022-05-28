import axios from 'axios';

const key = '666fc90c25c7aa270f86bc901474e203';
const mainURL = 'https://api.themoviedb.org/3/';

export async function getPopularMovie() {
  const url = `${mainURL}trending/movie/day?api_key=${key}`;

  return axios.get(url).then(response => {
    return response.data.results.map(({ id, original_title }) => ({
      id,
      original_title,
    }));
  });
}

export async function getMovie(query) {
  const url = `${mainURL}search/movie?api_key=${key}&language=en-US&${query}&page=1&include_adult=false`;

  return axios.get(url).then(response => {
    return response.data.results.map(({ id, original_title }) => ({
      id,
      original_title,
    }));
  });
}

export async function getMovieInfo(movieId) {
  const url = ` ${mainURL}movie/${movieId}?api_key=${key}&language=en-US`;

  return axios.get(url).then(response => {
    const {
      original_title,
      vote_average,
      overview,
      genres,
      poster_path,
      release_date,
    } = response.data;

    return {
      original_title,
      vote_average,
      overview,
      genres,
      poster_path,
      release_date,
    };
  });
}
export async function getCasts(movieId) {
  const url = ` ${mainURL}movie/${movieId}/credits?api_key=${key}&language=en-US `;

  return axios.get(url).then(response => {
    return response.data.cast.map(({ id, name, character, profile_path }) => ({
      id,
      name,
      character,
      profile_path,
    }));
  });
}

export async function getReview(movieId) {
  const url = ` ${mainURL}movie/${movieId}/reviews?api_key=${key}&language=en-US `;

  return axios.get(url).then(response => {
    return response.data.results.map(({ author, content, id }) => ({
      author,
      content,
      id,
    }));
  });
}
