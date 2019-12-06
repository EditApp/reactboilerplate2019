import React from "react";
import "./style.scss";

const FormSubmit = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input placeholder="search" type="text" onChange={handleChange}/>
        </div>
        <input type="submit" value="Last Videos" />
      </form>
    </div>
  );
};

export default FormSubmit;
