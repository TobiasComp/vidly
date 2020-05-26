import Like from "./like";
import React, { Component } from "react";

class MovieTable extends Component {
  renderSortIcon(path) {}

  render() {
    const { movies, onDelete, onSort } = this.props;
    return (
      <table className="table">
        <thead>
          <tr>
            <th
              className="clickable"
              scope="col"
              onClick={() => onSort("title")}
            >
              Title{this.renderSortIcon("title")}
            </th>
            <th
              className="clickable"
              scope="col"
              onClick={() => onSort("genre.name")}
            >
              Genre{this.renderSortIcon("genre")}
            </th>
            <th
              className="clickable"
              scope="col"
              onClick={() => onSort("numberInStock")}
            >
              Stock{this.renderSortIcon("stock")}
            </th>
            <th
              className="clickable"
              scope="col"
              onClick={() => onSort("dailyRentalRate")}
            >
              Rate{this.renderSortIcon("rate")}
            </th>
            <th className="clickable" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => {
            return (
              <tr key={index}>
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
                    onClick={() => onDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MovieTable;
