import React from "react";
import MovieItem from "../../components/MovieItem/MovieItem";

const MoviesList = ({ moviesdata }) => {
  return (
    <article className={"flexboxContainer4cols"}>
      {moviesdata && moviesdata.length !== -1
        ? moviesdata.map(movie => (
            <MovieItem
              displayfull={false}
              id={movie.id}
              key={movie.id}
              title={movie.original_title}
              image={movie.poster_path}
              date={movie.release_date}
              description={movie.overview}
            />
          ))
        : null}
    </article>
  );
};
export default MoviesList;
