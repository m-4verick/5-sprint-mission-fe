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
let verifyIDPW = [false, false];

// 이메일 검증
emailInput.addEventListener('focusout', (e) => {
  const targetLocation = e.target;
  const targetValue = e.target.value;

  if (!targetValue) showMessage(targetLocation, emailMessage, "이메일을 입력해주세요.");
  else if (!emailValidCheck(targetValue)) showMessage(targetLocation, emailMessage, "잘못된 이메일 형식입니다.");
  else {
    clearMessage(targetLocation, emailMessage);
    verifyIDPW[0] = true;
    verifyLoginButtonEnable()
  }
})
// 비밀번호 검증
passwordInput.addEventListener('focusout', (e) => {
  const targetLocation = e.target;
  const targetValue = e.target.value;

  if (!targetValue) showMessage(targetLocation, passwordMessage, "비밀번호를 입력해주세요.");
  else if (!isOverEight(targetValue)) showMessage(targetLocation, passwordMessage, "비밀번호를 8자 이상 입력해주세요.");
  else {
    clearMessage(targetLocation, passwordMessage);
    verifyIDPW[1] = true;
    verifyLoginButtonEnable()
  }
})

// 이메일 유효성 검증
function emailValidCheck(email) {
  if (pattern.test(email) === false) {
    return false;
  } else {
    return true;
  }
}
// 비밀번호 8자 이상 검증
function isOverEight(password) {
  if (password.length >= 8) return true;
  else return false;
}
// 입력 데이터 문제 발생 시 가이드 메시지 출력
function showMessage(targetLocation, message, value) {
  message.innerHTML = value;
  message.style.display = 'block';
  targetLocation.style.border = '2px solid #F74747';
  targetLocation.style.outlineColor = '#F74747';
}
// 입력 데이터에 문제가 없을 시 가이드 메시지 숨기기
function clearMessage(targetLocation, message) {
  message.style.display = 'none';
  targetLocation.style.border = '';
  targetLocation.style.outlineColor = '';
}
// 입력 데이터의 문제가 없을 시 로그인 버튼 활성화
function verifyLoginButtonEnable() {
  if (verifyIDPW[0] && verifyIDPW[1]) loginButton.disabled = false;
  else loginButton.disabled = true;
}