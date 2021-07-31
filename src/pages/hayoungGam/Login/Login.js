import { Component } from 'react';
import Container from 'components/hayoungGam/Container/Container';
import LoginForm from './LoginForm/LoginForm';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <Container>
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
      </Container>
    );
  }
}

export default Login;
