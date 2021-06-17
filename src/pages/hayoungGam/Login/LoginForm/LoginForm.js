import { Component } from 'react';
import { withRouter } from 'react-router';
import { validatePw, validateId } from 'utils/validator';
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

  validateInput = () => {
    const newPwState = validatePw(this.state);
    if (newPwState.pwStatus) {
      const newIdState = validateId(this.state);
      this.setState({
        ...this.state,
        ...newIdState,
        pwStatus: newPwState.pwStatus, // pwStatus에 true를 저장
      });
    } else {
      this.setState({ ...this.state, ...newPwState });
    }
  };

  handleInput = event => {
    this.setState(
      { [event.target.name]: event.target.value },
      this.validateInput
    );
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
