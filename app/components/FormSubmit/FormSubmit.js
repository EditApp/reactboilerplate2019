import React from "react";
import "./style.scss";

const FormSubmit = ({ getLatest }) => {
  return (
    <div>
      <form action="" onSubmit={getLatest}>
        <input type="submit" value="Last Videos" />
      </form>
    </div>
  );
};

export default FormSubmit;
