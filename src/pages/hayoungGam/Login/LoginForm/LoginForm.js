import { Component } from 'react';
import { withRouter } from 'react-router';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      pw: '',
      idStatus: false,
      pwStatus: false,
      error: '',
    };
  }

  goToList = () => {
    this.props.history.push('/list-hayoung');
  };

  validateId = () => {
    const { id } = this.state;
    let idStatus = false;
    let error;
    const emailRegex =
      /^[\w+-]+(.[\w+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/g;

    if (!emailRegex.test(id)) {
      error = '올바른 이메일을 입력해 주세요.';
    } else {
      error = '';
      idStatus = true;
    }

    this.setState({
      error,
      idStatus,
    });
  };

  validatePw = () => {
    const { pw } = this.state;
    let pwStatus = false;
    let error;
    const lowerCaseRegex = /[a-z]/g;
    const upperCaseRegex = /[A-Z]/g;
    const digitRegex = /\d/g;
    const specialCharcsRegex = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/g;
    const minLengthRegex = /^.{8,}$/g;

    switch (false) {
      case !(pw === ''):
        error = '';
        break;
      case lowerCaseRegex.test(pw):
        error = '비밀번호는 영어 소문자를 포함해야 합니다.';
        break;
      case upperCaseRegex.test(pw):
        error = '비밀번호는 영어 대문자를 포함해야 합니다.';
        break;
      case specialCharcsRegex.test(pw):
        error = '비밀번호는 특수 문자를 포함해야 합니다.';
        break;
      case digitRegex.test(pw):
        error = '비밀번호는 숫자를 포함해야 합니다.';
        break;
      case minLengthRegex.test(pw):
        error = '비밀번호는 8자리 이상입니다.';
        break;
      default:
        error = '';
        pwStatus = true;
        break;
    }

    this.setState({
      error,
      pwStatus,
    });

    if (pwStatus) {
      this.validateId();
    }
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value }, this.validatePw);
  };

  render() {
    const { error, idStatus, pwStatus } = this.state;
    return (
      <form className="login-form">
        <input
          className={
            idStatus ? 'login-form__input active' : 'login-form__input'
          }
          name="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.handleInput}
        />
        <input
          className={
            pwStatus ? 'login-form__input active' : 'login-form__input'
          }
          name="pw"
          type="password"
          placeholder="비밀번호"
          onChange={this.handleInput}
        />
        {error && <p className="login-form__error">{error}</p>}
        <button
          className="login-form__btn"
          onClick={this.goToList}
          disabled={!(idStatus && pwStatus)}
        >
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
