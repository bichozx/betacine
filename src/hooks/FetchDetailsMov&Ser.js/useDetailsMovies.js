import { detailsMovies } from '../../services/DetailsMovies&Series/detailsMovies';
import { useCallback } from 'react';

export const useDetailsMovies = () => {
  const fetchMovieDetails = useCallback(async (movieId, onDataLoaded, onError) => {
    try {
      const response = await detailsMovies(movieId);
      console.log('details',response)
      onDataLoaded(response);  
    } catch (err) {
      onError(err.message);  
    }
  }, []);

  return fetchMovieDetails;  
};


