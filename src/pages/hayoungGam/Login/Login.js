import { Component } from 'react';
import LoginForm from './LoginForm/LoginForm';
import './Login.scss';

class Login extends Component {
  render() {
    const {
      location: { pathname },
    } = this.props;
    return (
      <div
        className={
          pathname === '/login-hayoung' ? 'container--login' : 'container'
        }
      >
        <div className="login-box">
          <h1 className="logo">Starbugs</h1>
          <LoginForm />
          <a
            className="forgot-password-link"
            href="https://wecode.co.kr"
            target="_blank"
            rel="noreferrer noopener"
          >
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
