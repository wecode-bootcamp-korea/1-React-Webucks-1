export const validatePw = state => {
  const { pw } = state;
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

  const newPwState = { error, pwStatus };
  return newPwState;
};

export const validateId = state => {
  const { id } = state;
  let idStatus = false;
  let error;
  const emailRegex =
    /^[\w+-]+(.[\w+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/g;

  switch (false) {
    case !(id === ''):
      error = '';
      break;
    case emailRegex.test(id):
      error = '올바른 이메일을 입력해 주세요.';
      break;
    default:
      error = '';
      idStatus = true;
      break;
  }

  const newIdState = { error, idStatus };
  return newIdState;
};
