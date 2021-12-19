import React from "react";
import { useState, useEffect } from "react";
import httpClient from "../httpClient";

const LandingPage = () => {
  const [user, setUser] = useState({
    id: "",
    email: "",
  });

  useEffect(() => {
    (async () => {
      try {
        const resp = await httpClient.get("//localhost:5000/me");
        setUser((prevState) => ({
          ...prevState,
          id: resp.data.id,
          email: resp.data.email,
        }));
        // setUser(resp.data);
        console.log(user);
        // setUser({ id: resp.data.id, email: resp.data.email });
      } catch (error) {
        setUser("");
        console.log(user);
        console.log("Not authenticated");
      }
    })();
  }, []);

  const logoutUser = async () => {
    console.log("logout user");
    const resp = await httpClient.post("//localhost:5000/logout");
    window.location.href = "/";
  };

  return (
    <div>
      <h1>Twitter Sentiment Analysis</h1>
      {!user ? (
        <div>
          <a href="/login">
            <button>Login</button>
          </a>
          <a href="/register">
            <button>Register</button>
          </a>
        </div>
      ) : (
        <div>
          <h2>Logged in</h2>
          <h3>ID: {user.id}</h3>
          <h3>Email: {user.email}</h3>
          <button onClick={logoutUser}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
