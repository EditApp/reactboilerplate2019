import React from "react";
import "./style.scss";

const MovieItem = ({ title, image, date, description }) => (
  <article className="movieElement">
    <img src={image} />
    <div className="dateTime">
      <p>Published</p>
      <time datetime={date}>{date}</time>
    </div>

    <h2>{title}</h2>
    <p>{description}</p>
  </article>
);

export default MovieItem;
