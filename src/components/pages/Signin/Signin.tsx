import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Signup/Signup.scss";

const Signin = () => {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    const userData = {
      username: event.target.form[0].value,
      password: event.target.form[1].value,
    };

    axios
      .post("http://localhost:3020/user/signin", userData)
      .then((response) => {
        if (response.data.status === 200) {
          navigate('/home');
        } else {
          setError(true);
          setErrorMessage(response.data.message);
        }
      })
      .catch((error) => {
        setError(true);
        setErrorMessage("Please fill out the form correctly!");
      });
  };

  return (
    <div className="signup-page">
      <div className="title">Welcome Back!</div>
      <form className="signup-card">
        <label className="detail-input">
          Username:
          <input
            className="form-input"
            type="text"
            name="username"
            placeholder="JohnDoe123"
          />
        </label>
        <label className="detail-input">
          Password:
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="John@123"
          />
        </label>
        <div>
          <button onClick={(e) => handleSignup(e)} className="submit-button">
            SIGNIN
          </button>
        </div>
        {error && <div className="error-message">{errorMessage}</div>}
      </form>
      <a href="signup" className="alternate-link">
        Don't have an account? Signup
      </a>
    </div>
  );
};

export default Signin;
