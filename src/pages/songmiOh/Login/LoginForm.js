import React, { Component } from 'react';
import './LoginForm.scss';

class LoginForm extends Component {
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

  signUp = () => {
    fetch('/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.loginIdValue,
        password: this.state.loginPwValue,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과:', result));
  };

  login = () => {
    fetch('/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.loginIdValue,
        password: this.state.loginPwValue,
      }),
    })
      .then(response => response.json())
      .then(result => console.log('결과:', result));
  };

  render() {
    return (
      <form className="loginBox">
        <input
          className="loginId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.handleIdInput}
        />
        <input
          className="loginPw"
          type="password"
          placeholder="비밀번호"
          onChange={this.handlePwInput}
        />
        <button
          className={
            this.state.loginIdValue.includes('@') &&
            this.state.loginPwValue.length > 4
              ? 'loginBtn loginBtnActive'
              : 'loginBtn'
          }
          type="button"
          onClick={this.signUp}
        >
          회원가입
        </button>
        <button
          className={
            this.state.loginIdValue.includes('@') &&
            this.state.loginPwValue.length > 4
              ? 'loginBtn loginBtnActive'
              : 'loginBtn'
          }
          type="button"
          onClick={this.login}
        >
          로그인
        </button>
      </form>
    );
  }
}

export default LoginForm;
