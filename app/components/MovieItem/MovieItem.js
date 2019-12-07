import React from "react";
import "./style.scss";

import MovieImage from "../../components/MovieImage";
import MovieDescription from "../../components/MovieDescription";

const MovieItem = ({ title, image, date, description, id , rating, showbutton}) => (
  <article className={"movieElement"}>
    <MovieImage image={image} date={date} />
    <MovieDescription title={title} description={description} id={id} rating={rating} showbutton={showbutton} />
  </article>
);

export default MovieItem;
