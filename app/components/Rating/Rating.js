import React, { useState } from "react";
import "./style.scss";
import Star from "../../components/Icons/star";


const Rating = ({rating}) => {

  const [fillUp, setFillUp] = useState(null);

  return (
    <article className="rating">
      {[1, 2, 3, 4, 5].map(item => {
        <Star
          key={item}
          index={item}
          full={item <= (fillUp || rating || 0)}
          setFillUp={setFillUp}
        />;
      })}
    </article>
  );
}

export default Rating;
