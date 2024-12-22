const USER_DATA = [
  {email: 'codeit1@codeit.com', password: "codeit101!"},
  {email: 'codeit2@codeit.com', password: "codeit202!"},
  {email: 'codeit3@codeit.com', password: "codeit303!"},
  {email: 'codeit4@codeit.com', password: "codeit404!"},
  {email: 'codeit5@codeit.com', password: "codeit505!"},
  {email: 'codeit6@codeit.com', password: "codeit606!"},
]
const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const emailMessage = document.querySelector('.emailMessage');
const passwordMessage = document.querySelector('.passwordMessage');
const loginButton = document.querySelector('.login-button');

const errorMessage = {
  "email": {
    "inputTarget": emailInput,
    "messageTarget": emailMessage,
  },
  "emailEmpty": {
    "inputTarget": emailInput,
    "messageTarget": emailMessage,
    "textContent": "이메일을 입력해주세요.",
  },
  "emailWrong": {
    "inputTarget": emailInput,
    "messageTarget": emailMessage,
    "textContent": "올바른 이메일 형식이 아닙니다.",
  },
  "password": {
    "inputTarget": passwordInput,
    "messageTarget": passwordMessage,
  },
  "passwordEmpty": {
    "inputTarget": passwordInput,
    "messageTarget": passwordMessage,
    "textContent": "비밀번호를 입력해주세요.",
  },
  "passwordWrong": {
    "inputTarget": passwordInput,
    "messageTarget": passwordMessage,
    "textContent": "비밀번호를 8자 이상 입력해주세요.",
  },
}
let emailInputValid = false;
let passwordInputValid = false;

let inputEmailValue = "";
let inputPasswordValue = "";

/////////////////////////////////////// addEventListener /////////////////////////////////////////////////////
// 이메일 검증
emailInput.addEventListener('focusout', e => {
  inputEmailValue = e.target.value;

  if (!inputEmailValue) showMessage(errorMessage.emailEmpty);
  else if ( !emailValidCheck(inputEmailValue) ) showMessage(errorMessage.emailWrong);
  else {
    clearMessage(errorMessage.email);
    emailInputValid = true;
    enableButtonWhenAllCorrect();
  }
})
// 비밀번호 검증
passwordInput.addEventListener('focusout', e => {
  inputPasswordValue = e.target.value;
  if (!inputPasswordValue) showMessage(errorMessage.passwordEmpty);
  else if (!passwordOverEight(inputPasswordValue)) showMessage(errorMessage.passwordWrong);
  else {
    clearMessage(errorMessage.password);
    passwordInputValid = true;
    enableButtonWhenAllCorrect();
  }
})
// 로그인 버튼 누르면 USER_DATA의 정보와 일치여부 확인
loginButton.addEventListener('click', e => {
  if (loginInfoCorrect()) window.location.href = "../items.html";
  else alert("틀렸다.");
})

///////////////////////////////// Functions ////////////////////////////////////////////////////////////////
// 이메일 유효성 검증 함수
function emailValidCheck(email) {
  if (pattern.test(email) === false) {
    return false;
  } else {
    return true;
  }
}
// 비밀번호 8자 이상 검증 함수
function passwordOverEight(password) {
  return password.length > 8;
}
// input 데이터 문제 확인되면 메시지를 보여주는 함수
function showMessage(target) {
  target.inputTarget.style.border = "2px solid #F74747";
  target.inputTarget.style.outlineColor = "#F74747";
  target.messageTarget.style.display = "block";

  target.messageTarget.innerHTML = target.textContent;
  loginButton.disabled = true;

}
// input 데이터에 문제 없다면 모든 메시지 설정값을 초기화 하는 함수
function clearMessage(target) {
  target.inputTarget.style.border = "";
  target.inputTarget.style.outlineColor = "";
  target.messageTarget.innerHTML = "";
  target.messageTarget.style.display = "none";
}
// 로그인 버튼 활성화 판단 함수
function enableButtonWhenAllCorrect() {
  if (emailInputValid && passwordInputValid) loginButton.disabled = false;
  else loginButton.disabled = true;
}
// USER_DATA와 input 값을 비교하여 true / false를 리턴하는 함수
function loginInfoCorrect() {
  return USER_DATA.some(existUser => {
    const emailMatch = (existUser.email === inputEmailValue);
    const passwordMatch = (existUser.password === inputPasswordValue);

    return (emailMatch && passwordMatch);
  })
}