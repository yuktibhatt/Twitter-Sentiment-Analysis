import React from "react";
import FormHeader from "./Form/FormHeader";
import RegisterForm from "./Form/RegisterForm";
import Other from "./Other";
import "./Register.css";

const Register = () => {
  return (
    <div id="registerform">
      <FormHeader title="Register" />
      <RegisterForm />
      <p>Already have an account?</p>
      <a href="/login">
        <Other title="Sign in"></Other>
      </a>
    </div>
  );
};

export default Register;
