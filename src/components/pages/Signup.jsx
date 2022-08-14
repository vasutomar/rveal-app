import { Component } from "react";
import axios from "axios";
import "./Signup.scss";

class Signup extends Component {

  handleSignup = (event) => {
    event.preventDefault();
    const userData = {
      firstName: event.target.form[0].value,
      lastName: event.target.form[1].value,
      username: event.target.form[2].value,
      password: event.target.form[3].value
    };

    axios.post('http://localhost:3020/user/signup',userData)
    .then((response) => {
      console.log(response);
    });
  };

  render() {
    return (
      <div className="signup-page">
        <div className="title">Welcome!</div>
        <form className="signup-card">
          <label className="detail-input">
            First Name:
            <input className="form-input" name="firstName" type="text" placeholder="John" />
          </label>
          <label className="detail-input">
            Last Name:
            <input className="form-input" type="text" name="lastName" placeholder="Doe" />
          </label>
          <label className="detail-input">
            Username:
            <input className="form-input" type="email" name="username" placeholder="JohnDoe123" />
          </label>
          <label className="detail-input">
            Password:
            <input className="form-input" type="password" name="password" placeholder="John@123" />
          </label>
          <div>
            <button onClick={(e) => this.handleSignup(e)} className="submit-button">SIGNUP</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
