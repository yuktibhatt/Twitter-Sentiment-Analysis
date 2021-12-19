import React from "react";
import "./Form.css";
const FormInput = (props) => {
  return (
    <div className="row">
      <label>{props.description}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default FormInput;
