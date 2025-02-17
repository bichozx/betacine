import axios from 'axios';

const API_KEY = '35700dacc9850e3acda5a9ea994d4d5e';

export const requestsMovies = async(page = 1)=> {
  const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: page, 
    },
  });
  return response.data;
}



