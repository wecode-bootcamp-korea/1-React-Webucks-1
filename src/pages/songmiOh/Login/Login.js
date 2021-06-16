import React, { Component } from 'react';
import LoginBox from './LoginBox';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <body class="container">
        <header class="title">Wecafevin</header>
        <LoginBox />
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
