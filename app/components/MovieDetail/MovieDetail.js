import React from "react";
import "./style.scss";

import MovieImage from "../MovieImage";
import MovieDescription from "../MovieDescription";

const MovieDetail = ({ title, image, date, description, id , showbutton, rating}) => (
  <article className={"movieDetail"}>
    <MovieImage image={image} date={date} />
    <MovieDescription title={title} description={description} id={id} showbutton={showbutton} rating={rating}/>
  </article>
);

export default MovieDetail;
