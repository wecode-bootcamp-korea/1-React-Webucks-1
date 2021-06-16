import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

class LoginForm extends Component {
  render() {
    return (
      <form className="loginBox">
        <input
          className="loginId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input className="loginPw" type="password" placeholder="비밀번호" />
      </form>
    );
  }
}

export default LoginForm;
