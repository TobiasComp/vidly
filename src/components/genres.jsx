import React from "react";
import { getGenres } from "../services/fakeGenreService";

const Genres = (props) => {
  const { onGenreChange, currentGenre } = props;
  const genres = getGenres();
  console.log(genres);
  console.log("the current genre inside of Genres component", currentGenre);

  return (
    <ul className="list-group">
      <li
        className={
          currentGenre === "all" ? "list-group-item active" : "list-group-item"
        }
        onClick={() => onGenreChange("all")}
      >
        All Genres
      </li>
      {genres.map((genre) => {
        return (
          <li
            key={genre._id}
            className={
              currentGenre == genre.name
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onGenreChange(genre.name)}
          >
            {genre.name}
          </li>
        );
      })}
    </ul>
  );
};

export default Genres;
