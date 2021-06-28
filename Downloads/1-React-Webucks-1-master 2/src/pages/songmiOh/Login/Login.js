import React, { Component } from 'react';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginId: '',
      loginPw: '',
    };
  }

  handleIdInput = event => {
    this.setState({ loginId: event.target.value });
  };

  handlePwInput = event => {
    this.setState({ loginPw: event.target.value });
  };

  render() {
    return (
      <div className="login">
        <header className="container">
          <p>songstagram</p>
          <input
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleIdInput}
          ></input>
          <input
            className="pw"
            type="text"
            placeholder="비밀번호"
            onChange={this.handlePwInput}
          ></input>
          <button
            className={
              this.state.loginId.includes('@') && this.state.loginPw.length > 4
                ? 'btn loginBtnActive'
                : 'btn'
            }
            type="button"
          >
            로그인
          </button>
        </header>
        <footer>
          <a href="/">비밀번호를 잊으셨나요?</a>
        </footer>
      </div>
    );
  }
}

export default Login;
