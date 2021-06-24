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
              ? 'loginBtnActive'
              : 'loginBtn'
          }
          type="button"
        >
          로그인
        </button>
      </form>
    );
  }
}

export default LoginForm;
