import { Component } from "react";
import Card from "../elementary/Card/Card";
import "./Signup.scss";

class Signup extends Component {
  render() {
    return (
      <div className="signup-page">
        <div className="title">Signup</div>
        <form className="signup-card">
          <label className="detail-input">
            First Name:
            <input type="text" name="firstName" />
          </label>
          <label className="detail-input">
            Last Name:
            <input type="text" name="lastName" />
          </label>
          <label className="detail-input">
            Username:
            <input type="email" name="username" />
          </label>
          <label className="detail-input">
            Password:
            <input type="password" name="password" />
          </label>
          <button className="submit-button">
            Signup
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
