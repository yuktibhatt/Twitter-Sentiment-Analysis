import React from "react";
import FormHeader from "./Form/FormHeader";
import Form from "./Form/Form";
import Other from "./Other";
import "./Login.css";

const Login = () => {
  return (
    <div id="loginform">
      <FormHeader title="Login" />
      <Form />
      <p>Don't have an account?</p>
      <a href="/register">
        <Other title="Sign up"></Other>
      </a>
    </div>
  );
};

export default Login;
