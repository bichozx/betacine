import { useCallback, useState } from 'react';

import { requestsMovies } from '../../services/RequestsMovies&Series/requestsMovies';

export const useGetMovies = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);  

  const fetchData = useCallback(async (currentPage = 1) => {
    try {
      const response = await requestsMovies(currentPage);
      console.log('list',response)
      setData(prevData => {
       
        return prevData ? {
          ...response,
          results: [...prevData.results, ...response.results]
        } : response;
      });
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    }
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage);
  };

  return { data, error, fetchData, loadMore };
  
}
