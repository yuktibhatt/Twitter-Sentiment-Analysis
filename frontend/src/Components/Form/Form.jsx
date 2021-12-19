import React, { useState } from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import httpClient from "../../httpClient";
import "./Form.css";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const loginHanlder = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const resp = await httpClient.post("//localhost:5000/login", {
        email,
        password,
      });
      window.location.href = "/";
    } catch (e) {
      alert("Invalid email and password");
    }
  };

  return (
    <div>
      <FormInput
        description="Email"
        placeholder="Enter your email"
        type="text"
        value={email}
        onChange={emailHandler}
      />
      <FormInput
        description="Password"
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={passwordHandler}
      />
      <FormButton title="Log in" onClick={loginHanlder} />
    </div>
  );
};

export default Form;
