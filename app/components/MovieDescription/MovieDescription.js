import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import Rating from "../../components/Rating";

const MovieDescription = ({ title, description, id, showbutton , rating}) => (
  <div className="detailsBlock">
    <h2>{title}</h2>
    <Rating rating={rating}/>
    <p>{description}</p>
    {showbutton ? (
      <Link className="router-link" to={`/videodetail/${id}`}>
        Video details
      </Link>
    ) : null}
  </div>
);

export default MovieDescription;
