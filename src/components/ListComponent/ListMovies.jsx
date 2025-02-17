import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import React, { useEffect, useState } from 'react';

import AnimatedProgressProvider from '../../helpers/AnimatedProgressProvider';
import { MoviesModalInfo } from './ModalMoviesInfo/MoviesModalInfo';
import { easeQuadInOut } from 'd3-ease';
import { useGetMovies } from '../../hooks/FetchMovies&Series/useGetMovies';

export const ListMovies = () => {
  const { data, error, fetchData, loadMore } = useGetMovies();
  console.log(data);
  const [arrayList, setArrayList] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (data && data.results) {
      setArrayList(data.results);
      localStorage.setItem('pelis', JSON.stringify(data.results));
    }
  }, [data]);

  const handleOpenModal = (movieId) => {
    setSelectedMovieId(movieId);
  };

  const handleCloseModal = () => {
    setSelectedMovieId(null);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div className="movie-list">
    {arrayList.map((movie) => {
      
      const votePercentage =
        movie.vote_average && !isNaN(movie.vote_average)
          ? (movie.vote_average / 10) * 100
          : 0;

      return (
        <article key={movie.id} className="peli-item">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className="movie-poster"
            onClick={() => handleOpenModal(movie.id)}
          />
          <div className="movie-info">
            <h3 className="title" onClick={() => handleOpenModal(movie.id)}>
              {movie.title}
            </h3>
            <div className="rating-container">
              <span className="rating-label">Puntuación de usuarios</span>
              <div className="rating-circle">
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={votePercentage}
                  duration={2.5}
                  easingFunction={easeQuadInOut}
                  repeat
                >
                  {(value) => {
                    return (
                      <CircularProgressbar
                        value={Math.round(value)}
                        text={`${Math.round(value)}%`}
                        styles={buildStyles({
                          textSize: '25px',
                          strokeLinecap: "butt",
                          pathColor: '#f39c12', 
                          textColor: '#fff', 
                          trailColor: '#fff', 
                        })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </div>
            </div>
          </div>
        </article>
      );
    })}
  </div>

  {selectedMovieId && (
    <MoviesModalInfo movieId={selectedMovieId} onClose={handleCloseModal} />
  )}

  {/* Botón para cargar más películas */}
  <button onClick={loadMore} className="load_more">
    Mostrar más
  </button>
</>
  );
};
