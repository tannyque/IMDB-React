import React from 'react';
import Movie from '../components/Movie'

const MovieList = (props) => {
  const movies = props.data.map((movie) => {
    return (
      <Movie title={movie.title} key={movie.id} />
    );
  })

  return (
    <div className="movie-list">
      {movies}
    <br />
      <p><a href="">See more openings this week</a></p>
    </div>
  );
}

export default MovieList;
