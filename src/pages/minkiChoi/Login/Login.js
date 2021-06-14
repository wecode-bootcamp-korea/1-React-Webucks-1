import { Component } from 'react';
import './Login.scss';
import LoginForm from './LoginForm/LoginForm';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="container">
          <p>Webucks</p>
          <LoginForm />
          <a href="/">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    );
  }
}

export default Login;
