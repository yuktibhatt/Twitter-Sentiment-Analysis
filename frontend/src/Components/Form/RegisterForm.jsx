import React, { useState } from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";
import httpClient from "../../httpClient";
import "./Form.css";

const RegisterForm = (props) => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const fullnameHandler = (e) => {
    setFullName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  const confirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };
  const registerHandler = async (e) => {
    e.preventDefault();
    console.log(fullname, email, password, confirm_password);
    try {
      const resp = await httpClient.post("//localhost:5000/register", {
        fullname,
        email,
        password,
        confirm_password,
      });
      window.location.href = "/";
    } catch (e) {
      if (e.response.status === 401) {
        alert("Invalud");
      }
    }
    // if (resp.status == 200) {
    //   window.location.href = "/";
    // } else if (resp.status == 401) {
    //   console.log("invalid");
    // }
  };
  return (
    <div>
      <FormInput
        description="Full Name"
        placeholder="Enter fullname"
        type="text"
        value={fullname}
        onChange={fullnameHandler}
      />
      <FormInput
        description="Email"
        placeholder="Enter your email"
        type="password"
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
      <FormInput
        description="Confirm Password"
        placeholder="Enter your password again"
        type="password"
        value={confirm_password}
        onChange={confirmPasswordHandler}
      />
      <FormButton title="Register" onClick={registerHandler} />
    </div>
  );
};

export default RegisterForm;
