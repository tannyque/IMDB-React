import React, {Component} from 'react';
import MovieList from "./MovieList"

class MovieContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: 1, title: "Sausage Party"
        },
        {
          id: 2, title: "Cafe Society"
        },
        {
          id: 3, title: "Morgan"
        },
        {
          id: 4, title: "The 9th Life of Louis Drax"
        },
        {
          id: 5, title: "Naam Hai Akira"
        },
        {
          id: 6, title: "Equity"
        },
        {
          id: 7, title: "Things To Come"
        }
      ]
    };
  };
  render() {
    return (
      <div className="movie-container">
        <center><h1>UK Opening This Week</h1>
        <br />
        <MovieList data={this.state.data}/>
        <br />
        <button className="button">Get Showtimes >></button>
        </center>
      </div>
    )
  }
}

export default MovieContainer;
