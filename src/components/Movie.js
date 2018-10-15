import React from 'react';

const Movie = (props) => {
  return (
    <div className="movie">
       <p>{props.title + " "}<a href="."> Showtimes</a></p>
    </div>
  )
}

export default Movie;
