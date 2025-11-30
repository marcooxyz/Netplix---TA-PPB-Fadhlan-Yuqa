import axios from 'axios';

const MOVIE_BASE_URL = "https://api.themoviedb.org/3";
const API_TOKEN = "425f27f959682e98e52348ef5569509f"; // Ganti dengan API Anda

// Fungsi untuk mendapatkan trending movies
export const getTrendingVideos = async () => {
  const response = await axios.get(`${MOVIE_BASE_URL}/trending/all/day`, {
    params: { api_key: API_TOKEN },
  });
  return response.data.results;
};

// Fungsi lain yang ada di tmdb.js
export const getMoviesByCategory = async (category) => {
  const response = await axios.get(`${MOVIE_BASE_URL}/movie/${category}`, {
    params: { api_key: API_TOKEN },
  });
  return response.data.results;
};

export const getMovieDetails = async (movieId) => {
  const response = await axios.get(`${MOVIE_BASE_URL}/movie/${movieId}`, {
    params: { api_key: API_TOKEN },
  });
  return response.data;
};
export const getMarvelMovies = async () => {
    try {
      const response = await axios.get(`${MOVIE_BASE_URL}/discover/movie`, {
        params: {
          api_key: API_TOKEN,
          with_genres: '28,12,878', // Genre IDs for Action, Adventure, and Science Fiction
          sort_by: 'popularity.desc',
        },
      });
      return response.data.results;
    } catch (error) {
      console.error("Error fetching Marvel movies:", error);
      throw error;
    }
  };