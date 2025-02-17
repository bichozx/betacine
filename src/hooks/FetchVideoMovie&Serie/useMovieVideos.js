import { listMoviesVideo } from '../../services/ListVideoMovies&Series/listMoviesVideo';
import { useCallback } from 'react';

export const useMovieVideos = () => {
  const fetchMovieVideos = useCallback(async (movieId, onVideosLoaded, onError) => {
    try {
      const response = await listMoviesVideo(movieId);
      onVideosLoaded(response);  
    } catch (err) {
      onError(err.message);  
    }
  }, []);

  return fetchMovieVideos;  
}
