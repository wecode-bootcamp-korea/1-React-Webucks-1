import { Component } from 'react';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      idInputValue: '',
      pwInputValue: '',
    };
  }

  handleIdInput = event => {
    this.setState({ idInputValue: event.target.value });
  };

  handlePwInput = event => {
    this.setState({ pwInputValue: event.target.value });
  };

  render() {
    return (
      <div className="LoginForm">
        <div className="formContainer">
          <input
            type="text"
            className="inputId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={this.handleIdInput}
          />
          <input
            type="password"
            className="inputPw"
            placeholder="비밀번호"
            onChange={this.handlePwInput}
          />
          <button
            type="button"
            className="loginBtn active"
            // onClick="location='./list.html'"
            disabled
          >
            로그인
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
