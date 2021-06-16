import React, { Component } from 'react';
import LoginBox from './LoginForm';
import './Login.scss';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <body class="container">
        <header class="title">Wecafevin</header>
        <LoginForm />
        <button className="loginBt" type="button">
          로그인
        </button>
        <footer className="forgotPw">
          <a
            className="pwLink"
            href="https://www.starbucks.co.kr/mem/find_pwd1.do"
          >
            비밀번호를 잊으셨나요?
          </a>
        </footer>
      </body>
    );
  }
}

export default Login;
