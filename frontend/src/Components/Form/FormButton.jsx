import React from "react";
import "./Form.css";
const FormButton = (props) => {
  return (
    <div id="button" className="row">
      <button onClick={props.onClick}>{props.title}</button>
    </div>
  );
};

export default FormButton;
