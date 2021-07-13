import React from "react";
import "./index.css";

const Spinner = () => {
  return (
    <div className="Spinner__container">
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
