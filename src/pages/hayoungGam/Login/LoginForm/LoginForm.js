import { Component } from 'react';
import { withRouter } from 'react-router';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
    };
  }
  goToList = () => {
    this.props.history.push('/list-hayoung');
  };

  handleIdInput = event => {
    this.setState({ idValue: event.target.value });
  };

  handlePwInput = event => {
    this.setState({ pwValue: event.target.value });
  };

  render() {
    return (
      <form className="login-form">
        <input
          className="login-form__input"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.handleIdInput}
        />
        <input
          className="login-form__input"
          type="password"
          placeholder="비밀번호"
          onChange={this.handlePwInput}
        />
        <button className="login-form__btn" onClick={this.goToList}>
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
