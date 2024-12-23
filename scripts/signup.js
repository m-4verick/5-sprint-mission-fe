const USER_DATA = [
  {email: 'codeit1@codeit.com', password: "codeit101!"},
  {email: 'codeit2@codeit.com', password: "codeit202!"},
  {email: 'codeit3@codeit.com', password: "codeit303!"},
  {email: 'codeit4@codeit.com', password: "codeit404!"},
  {email: 'codeit5@codeit.com', password: "codeit505!"},
  {email: 'codeit6@codeit.com', password: "codeit606!"},
]
let email = {
  input: document.querySelector('#email'),
  error: document.querySelector('#emailError'),
  empty: "이메일을 입력해주세요.",
  wrong: "유효한 이메일 형식이 아닙니다.",
  valid: false,
}
let password = {
  input: document.querySelector('#password'),
  error: document.querySelector('#passwordError'),
  empty: "비밀번호를 입력해주세요",
  wrong: "비밀번호를 8자 이상 입력해주세요",
  valid: false,
}
let nickname = {
  input: document.querySelector('#nickname'),
  error: document.querySelector('#nicknameError'),
  empty: "닉네임을 입력해주세요.",
  wrong: "닉네임을 4자 이상 입력해주세요.",
  valid: false,
}
let passwordConfirm = {
  input: document.querySelector('#passwordConfirmation'),
  error: document.querySelector('#pwConfirmError'),
  empty: "비밀번호를 입력해주세요",
  wrong: "비밀번호가 일치하지 않습니다.",
  valid: false,
}

const signupBtn = document.querySelector('.signup-button');
const toggleButtonPassword = document.querySelector('.password-toggle-button');
const toggleButtonPasswordConfirm = document.querySelector('.toggleC');

const modalButton = document.querySelector('.modal-button');
const popUp = document.querySelector('.errorModal');

let emailInputValue = "";
let passwordInputValue = "";

email.input.addEventListener('focusout', e => {
  emailInputValue = e.target.value;

  if (!emailInputValue) {
    showMessage(email, email.empty);
    canEnableButton();
  } else if (!emailValidCheck(emailInputValue)) {
    showMessage(email, email.wrong);
    canEnableButton();
  } else {
    clearMessage(email);
    canEnableButton();
  }
})
// 닉네임칸 비었는지, 4글자 이상인지 확인
nickname.input.addEventListener('focusout', e => {
  const inputValue = e.target.value;

  if (!inputValue) {
    showMessage(nickname, nickname.empty);
    canEnableButton();
  } else if (!isOverFour(inputValue)) {
    showMessage(nickname, nickname.wrong);
    canEnableButton();
  } else {
    clearMessage(nickname);
    canEnableButton();
  }
})
// 패스워드 비어있는지 확인 후 8자 이상인지 검증
password.input.addEventListener('focusout', e => {
  passwordInputValue = e.target.value;

  if (!passwordInputValue) {
    showMessage(password, password.empty);
    canEnableButton();
  } else if (!isOverEight(passwordInputValue)) {
    showMessage(password, password.wrong);
    canEnableButton();
  } else {
    clearMessage(password);
    canEnableButton();
  }
})
// 패스워드확인 비어있는지 확인 후 패스워드와 일치하는지 확인
passwordConfirm.input.addEventListener('focusout', e => {
  const inputValue = e.target.value;

  if (!inputValue) {
    showMessage(passwordConfirm, passwordConfirm.empty);
    canEnableButton();
  } else if (!passwordMatch(inputValue, passwordInputValue)) {
    showMessage(passwordConfirm, passwordConfirm.wrong);
    canEnableButton();
  } else {
    clearMessage(passwordConfirm);
    canEnableButton();
  }
})

// 비밀번호 토글 아이콘 구현
toggleButtonPassword.addEventListener('click', e => {
  toggleEyeButton(password);
})
// 비밀번호 확인 토글 아이콘 구현
toggleButtonPasswordConfirm.addEventListener('click', e => {
  toggleEyeButton(passwordConfirm);
})

// USER_DATA 비교하여 login.html 이동 OR 모달 메시지 출력
signupBtn.addEventListener('click', e => {
  const isEmailExist = USER_DATA.some(function (user) {
    return (emailInputValue === user.email);
  })

  if (!isEmailExist) goLoginPage();
  else showErrorModal();
})

modalButton.addEventListener('click', e => {
  popUp.style.display = 'none';
})

///////////////////// functions ///////////////////////
function showMessage(target, message) {
  target.error.style.display = "block";
  target.error.innerHTML = message;
  target.input.style.border = "2px solid #F74747";
  target.input.style.outlineColor = "#F74747";

  return target.valid = false;
}

function clearMessage(target) {
  target.error.style.display = "none";
  target.error.innerHTML = "";
  target.input.style.border = "";
  target.input.style.outlineColor = "";

  return target.valid = true;
}

function emailValidCheck(value) {
  const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

  if (pattern.test(value) === false) {
    return false;
  } else {
    return true;
  }
}

function isOverEight(value) {
  return (value.length >= 8);
}

function toggleEyeButton(target) {
  if (target.input.type === "password") target.input.type = "text";
  else target.input.type = "password";
}

function canEnableButton() {
  signupBtn.disabled = !(email.valid && nickname.valid && password.valid && passwordConfirm.valid);
}

function isOverFour(value) {
  return (value.length >= 4);
}

function passwordMatch(password, passwordConfirm) {
  return (password === passwordConfirm);
}

function goLoginPage() {
  // window.location.href = "../login.html";
  console.log("GO LOGIN PAGE");
}

function showErrorModal() {
  popUp.style.display = "block";
}