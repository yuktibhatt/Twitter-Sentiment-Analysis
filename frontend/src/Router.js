import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import { LoginForm } from "./Components/accountBox/loginForm";
import { SignupForm } from "./Components/accountBox/signupForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginForm />} />
        <Route path="login" exact element={<LoginForm />} />
        <Route path="register" exact element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
