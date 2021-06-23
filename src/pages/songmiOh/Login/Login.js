import React, { Component } from 'react';
import './Login.scss';
import LoginForm from './LoginForm';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginIdValue: '',
      loginPwValue: '',
    };
  }

  handleIdInput = event => {
    this.setState({
      loginIdValue: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      loginPwValue: event.target.value,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="title">Wecafevin</div>
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
      </div>
    );
  }
}

export default Login;
