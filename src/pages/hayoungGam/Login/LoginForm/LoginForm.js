import { Component } from 'react';
import { withRouter } from 'react-router';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
    };
  }

  goToList = () => {
    this.props.history.push('/list-hayoung');
  };

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { id, password, error } = this.state;
    return (
      <form className="login-form">
        <input
          className={
            id.includes('@') ? 'login-form__input active' : 'login-form__input'
          }
          name="id"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.handleInput}
        />
        <input
          className={
            password.length >= 5
              ? 'login-form__input active'
              : 'login-form__input'
          }
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={this.handleInput}
        />
        <button
          className="login-form__btn"
          onClick={this.goToList}
          disabled={!(id.includes('@') && password.length >= 5)}
        >
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(LoginForm);
