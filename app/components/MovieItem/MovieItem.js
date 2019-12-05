import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import Rating from "../../components/Rating";
import Star from "../../components/Icons/star";

const MovieItem = ({ title, image, date, description }) => (
  <article className="movieElement">
    <img src={image} />
    <div className="dateTime">
      <p>Published</p>
      <time dateTime={date}>{date}</time>
    </div>
    <div className="detailsBlock">
      <h2>{title}</h2>
      <Rating rating={true} />
      <Star full={true} />
      <Star full={false} />
      <p>{description}</p>
      <Link className="router-link" to="/videodetail">
        Video details
      </Link>
    </div>
  </article>
);

export default MovieItem;
