import React, { useCallback } from "react";

const Star = ({ index, full, setFillUp }) => {
  const mouseEnter = useCallback(
    e => {
      setFillUp(index);
    },
    [index, setFillUp]
  );

  const mouseLeave = useCallback(
    e => {
      setFillUp(null);
    },
    [index, setFillUp]
  );
  return (
    <svg
      version="1.1"
      height="3rem"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill-rule="evenodd"
      className="star"
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <g transform="scale(.95) translate(15,15)">
        <path
          fill={full ? "#ffbc02" : "white"}
          d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
        />{" "}
      </g>
    </svg>
  );
};

export default Star;
