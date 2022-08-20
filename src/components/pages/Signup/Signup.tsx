import React, { useState } from "react";
import axios from "axios";
import "./Signup.scss";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    const userData = {
      firstName: event.target.form[0].value,
      lastName: event.target.form[1].value || "",
      username: event.target.form[2].value,
      password: event.target.form[3].value,
    };

    axios
      .post("http://localhost:3020/user/signup", userData)
      .then((response) => {
        if (response.data.status === 201) {
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
      <div className="title">Welcome!</div>
      <form className="signup-card">
        <label className="detail-input">
          First Name:
          <input
            className="form-input"
            name="firstName"
            type="text"
            placeholder="John"
          />
        </label>
        <label className="detail-input">
          Last Name:
          <input
            className="form-input"
            type="text"
            name="lastName"
            placeholder="Doe"
          />
        </label>
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
            SIGNUP
          </button>
        </div>
        {error && <div className="error-message">{errorMessage}</div>}
      </form>
      <a href="signin" className="alternate-link">
        Already Have an account? Signin
      </a>
    </div>
  );
};

export default Signup;
