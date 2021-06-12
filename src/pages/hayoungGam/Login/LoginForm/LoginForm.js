import { Component } from 'react';
import { withRouter } from 'react-router';
import './LoginForm.scss';

class LoginForm extends Component {
  goToList = () => {
    this.props.history.push('/list-hayoung');
  };

  render() {
    return (
      <form className="login-form">
        <input
          className="login-form__input"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          className="login-form__input"
          type="password"
          placeholder="비밀번호"
        />
        <button className="login-form__btn" onClick={this.goToList}>
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
