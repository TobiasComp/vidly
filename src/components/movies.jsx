import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Paginator from "./paginator";
import { paginate } from "../utils/paginate";
import Genres from "./genres";
import MovieTable from "./movieTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: getMovies(),

    pageSize: 4,
    currentPage: 1,
    currentGenre: "all",
    sortColumn: { path: "title", order: "asc" },
  };

  handleDelete = (index) => {
    let movies = [...this.state.movies];
    movies.splice(index, 1);
    this.setState({
      movies,
    });
  };

  handlePageChange = (page) => {
    console.log("this is the current page", page);
    this.setState({ currentPage: page });
  };

  handleSort = (path) => {
    console.log("this is the path", path);
    const sortColumn = { ...this.state.sortColumn };
    if (this.state.sortColumn.path == path)
      sortColumn.order = sortColumn.order == "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    console.log("this is the value of sortColumn", sortColumn);

    this.setState({ sortColumn });
  };

  moviesCount = (count) => {
    if (count > 0) return "There are " + count + " movies in the array.";
    else return "There are no movies to display";
  };

  moviesByGenre() {
    if (this.state.currentGenre === "all") return this.state.movies;
    return this.state.movies.filter(
      (movie) => movie.genre.name == this.state.currentGenre
    );
  }
  handleGenreChange = (genre) => {
    console.log("the genre selected is ", genre);
    this.setState({ currentGenre: genre, currentPage: 1 });
  };
  render() {
    const {
      currentPage,
      movies,
      pageSize,
      currentGenre,
      sortColumn,
    } = this.state;
    const genreMovies = this.moviesByGenre();
    const sorted = _.orderBy(genreMovies, sortColumn.path, sortColumn.order);
    const pageMovies = paginate(sorted, currentPage, pageSize);
    const count = genreMovies.length;

    return (
      <div className="row">
        <div className="col-2">
          <Genres
            onGenreChange={this.handleGenreChange}
            currentGenre={currentGenre}
          />
        </div>
        <div className="col">
          <h3>{this.moviesCount(count)}</h3>
          <MovieTable
            movies={pageMovies}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Paginator
            itemsCount={count}
            pageSize={this.state.pageSize}
            currentPage={this.state.currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
