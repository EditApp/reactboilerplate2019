import React, { useState } from "react";
import "./style.scss";
import Star from "../../components/Icons/star";

const Rating = ({ rating }) => {
  return (
    <article className="star-rating">
      {[1, 2, 3, 4, 5].map(item => {
        return (
          <Star
            key={item}
            index={item}
            full={item <= ((rating /2) || 0)}
          />
        );
      })}
    </article>
  );
};

export default Rating;
