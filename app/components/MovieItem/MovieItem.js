import React from "react";
import "./style.scss";

import MovieImage from "../../components/MovieImage";
import MovieDescription from "../../components/MovieDescription";

const MovieItem = ({ title, image, date, description, id , displayfull}) => (
  <article className={displayfull ? " movieElement full" : "movieElement"}>
    <MovieImage image={image} date={date} />
    <MovieDescription title={title} description={description} id={id} />
  </article>
);

export default MovieItem;
