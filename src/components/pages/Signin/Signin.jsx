import { Component } from "react";
import axios from "axios";
import "../Signup/Signup.scss";

class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      errorMessage: ''
    }
  }

  handleSignup = (event) => {
    event.preventDefault();
    const userData = {
      username: event.target.form[0].value,
      password: event.target.form[1].value,
    };

    axios.post('http://localhost:3020/user/signin',userData)
    .then((response) => {
      if(response.data.status === 200) {

      } else {
        this.setState({
          error: true,
          errorMessage : response.data.message
        })
      }
    })
    .catch((error) => {
      this.setState({
        error: true,
        errorMessage : 'Please fill out the form correctly!'
      })
    });
  };

  render() {
    return (
      <div className="signup-page">
        <div className="title">Welcome Back!</div>
        <form className="signup-card">
          <label className="detail-input">
            Username:
            <input className="form-input" type="text" name="username" placeholder="JohnDoe123" />
          </label>
          <label className="detail-input">
            Password:
            <input className="form-input" type="password" name="password" placeholder="John@123" />
          </label>
          <div>
            <button onClick={(e) => this.handleSignup(e)} className="submit-button">SIGNIN</button>
          </div>
          {this.state.error && <div className="error-message">{this.state.errorMessage}</div>}
        </form>
        <a href="signup" className="alternate-link">Don't have an account? Signup</a>
      </div>
    );
  }
}

export default Signin;
