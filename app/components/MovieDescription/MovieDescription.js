import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

import Rating from "../../components/Rating";

const MovieDescription = ({ title, description, id}) => (
  <div className="detailsBlock">
      <h2>{title}</h2>
      <Rating />
      <p>{description}</p>
      <Link className="router-link" to={`/videodetail/${id}`}>
        Video details
      </Link>
    </div>
);

export default MovieDescription;