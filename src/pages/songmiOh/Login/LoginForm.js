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
    console.log(event.target.value);
    this.setState({
      loginIdValue: event.target.value,
    });
  };

  handlePwInput = event => {
    console.log(event.target.value);
    this.setState({
      loginPwValue: event.target.value,
    });
  };

  render() {
    console.log('현재값 출력:', this.state);
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
      </form>
    );
  }
}

export default LoginForm;
