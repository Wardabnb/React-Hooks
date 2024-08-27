// MovieList.js
import React from "react";
import MovieCard from "./MovieCard.js";
import "bootstrap/dist/css/bootstrap.min.css";
const MovieList = ({ movies }) => {
  return (
    <div className="d-flex">
      {movies.map((movie, index) => (
        <MovieCard
          key={index} // Assignation d'une clé unique
          title={movie.title}
          description={movie.description}
          posterURL={movie.posterURL}
          rating={movie.rating}
        />
      ))}
    </div>
  );
};

export default MovieList;
