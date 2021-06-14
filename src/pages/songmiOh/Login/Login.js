import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <body class="container">
        <div>
          <header class="title"> Wecafevin</header>
          <div>
            <button className="loginBt" type="button" 로그인></button>
          </div>
          <footer className="forgotPw">
            <a
              className="pwLink"
              href="https://www.starbucks.co.kr/mem/find_pwd1.do"
            >
              비밀번호를 잊으셨나요?
            </a>
          </footer>
        </div>
      </body>
    );
  }
}

export default Login;
