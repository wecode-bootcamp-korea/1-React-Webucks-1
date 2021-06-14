import { Component } from 'react';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="container">
          <p>Webucks</p>
          <input
            type="text"
            className="inputId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input type="password" className="inputPw" placeholder="비밀번호" />
          <button
            type="button"
            className="loginBtn active"
            onclick="location='./list.html'"
            disabled
          >
            로그인
          </button>
          <a href="">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    );
  }
}

export default Login;
