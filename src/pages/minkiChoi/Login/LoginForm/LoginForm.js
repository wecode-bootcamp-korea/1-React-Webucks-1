import { Component } from 'react';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      idInputValue: '',
      pwInputValue: '',
      isBtnChange: false,
    };
  }

  handleIdInput = event => {
    this.setState({ idInputValue: event.target.value });
  };

  handlePwInput = event => {
    this.setState({ pwInputValue: event.target.value });
  };

  loginKeyup = event => {
    if (
      this.state.idInputValue.includes('@') &&
      this.state.pwInputValue.length > 4
    ) {
      this.setState({ isBtnChange: true });
    } else {
      this.setState({ isBtnChange: false });
    }
  };

  render() {
    return (
      <div className="LoginForm">
        <div className="formContainer" onKeyUp={this.loginKeyup}>
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
            className={this.state.isBtnChange ? 'loginBtn active' : 'loginBtn'}
            type="button"
          >
            로그인
          </button>
        </div>
      </div>
    );
  }
}

export default LoginForm;
