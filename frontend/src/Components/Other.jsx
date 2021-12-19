import React from "react";
import "./Other.css";
const Other = (props) => {
  return (
    <div id="button" className="row">
      <button>{props.title}</button>
    </div>
  );
};

export default Other;
