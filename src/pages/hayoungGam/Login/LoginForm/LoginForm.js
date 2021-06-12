import { Component } from 'react';
import { withRouter } from 'react-router';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      idInputClassName: 'login-form__input',
      pwInputClassName: 'login-form__input',
    };
  }

  goToList = () => {
    this.props.history.push('/list-hayoung');
  };

  handleIdInput = event => {
    this.setState({ idValue: event.target.value }, () => {
      this.state.idValue.includes('@')
        ? this.setState({
            idInputClassName: 'login-form__input active',
          })
        : this.setState({
            idInputClassName: 'login-form__input',
          });
    });
  };

  handlePwInput = event => {
    const PASSWORD_MIN_LENGTH = 5;
    this.setState({ pwValue: event.target.value }, () => {
      this.state.pwValue.length >= PASSWORD_MIN_LENGTH
        ? this.setState({
            pwInputClassName: 'login-form__input active',
          })
        : this.setState({
            pwInputClassName: 'login-form__input',
          });
    });
  };

  render() {
    const { idInputClassName } = this.state;
    const { pwInputClassName } = this.state;
    return (
      <form className="login-form">
        <input
          className={idInputClassName}
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.handleIdInput}
        />
        <input
          className={pwInputClassName}
          type="password"
          placeholder="비밀번호"
          onChange={this.handlePwInput}
        />
        <button
          className="login-form__btn"
          onClick={this.goToList}
          disabled={
            !(
              idInputClassName === 'login-form__input active' &&
              pwInputClassName === 'login-form__input active'
            )
          }
        >
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
