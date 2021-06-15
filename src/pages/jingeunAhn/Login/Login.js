import { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <>
        <div className="login_input_form">
          <h2 className="login_title"> WeCoffeeTalgia </h2>
          <input
            type="text"
            className="input_ID"
            placeholder="phone number, username or email"
          />
          <input type="password" className="input_PW" placeholder="password" />
          <button className="login_btn" LogIn />
          <div className="login_forgot">
            <a href="a">Forgot password? </a>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
