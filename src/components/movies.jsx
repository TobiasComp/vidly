import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./like";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (index) => {
    let movies = [...this.state.movies];
    movies.splice(index, 1);
    this.setState({
      movies,
    });
  };

  moviesCount = () => {
    if (this.state.movies.length > 0)
      return "There are " + this.state.movies.length + " movies in the array.";
    else return "There are no movies to display";
  };
  render() {
    return (
      <div>
        <h3>{this.moviesCount()}</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index}</th>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Movies;
