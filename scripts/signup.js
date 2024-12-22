const USER_DATA = [
  {email: 'codeit1@codeit.com', password: "codeit101!"},
  {email: 'codeit2@codeit.com', password: "codeit202!"},
  {email: 'codeit3@codeit.com', password: "codeit303!"},
  {email: 'codeit4@codeit.com', password: "codeit404!"},
  {email: 'codeit5@codeit.com', password: "codeit505!"},
  {email: 'codeit6@codeit.com', password: "codeit606!"},
]
const email = {
    input: document.querySelector('#email'),
    error: document.querySelector('#emailError'),
    empty: "이메일을 입력해주세요.",
    wrong: "유효한 이메일 형식이 아닙니다.",
}
const password = {
    input: document.querySelector('#password'),
    error: document.querySelector('#passwordError'),
    empty: "비밀번호를 입력해주세요",
    wrong: "비밀번호를 8자 이상 입력해주세요",
}
const nickname = {
    input: document.querySelector('#nickname'),
    error: document.querySelector('#nicknameError'),
    empty: "닉네임을 입력해주세요.",
    wrong: "닉네임을 4자 이상 입력해주세요.",
}
const passwordConfirm = {
    input: document.querySelector('#passwordConfirmation'),
    error: document.querySelector('#pwConfirmError'),
    empty: "비밀번호를 입력해주세요",
    wrong: "비밀번호가 일치하지 않습니다.",
}

const signupBtn = document.querySelector('.signup-button');
const toggleBtn = document.querySelector('.password-toggle-button');
const toggleCBtn = document.querySelector('.toggleC');

const modalButton = document.querySelector('.modal-button');
const popUp = document.querySelector('.popUp-wrapper');

// 이메일, 패스워드 정상 입력 받았는지 확인용 변수
let emailValidation = false;
let nicknameValidation = false;
let passwordValidation = false;
let pwConfirmValidation = false;


email.input.addEventListener('focusout', e => {
  // if (!e.target.value) { //이렇게 바꿔봅시다.
  //   emailWrong.style.display = "none"; //메시지 2개가 중첩될 수 있기에 하나는 none
  //   emailEmpty.style.display = "block";
  //   email.style.border = "2px solid #F74747";
  //   email.style.outlineColor = "#F74747";
  //
  //   checkEmail = false;
  //   activateSignUpButton()
  // } else if (e.target.value.includes("@") === false) {
  //   emailEmpty.style.display = "none";
  //   emailWrong.style.display = "block";
  //   email.style.border = "2px solid #F74747";
  //   email.style.outlineColor = "#F74747";
  //
  //   checkEmail = false;
  //   activateSignUpButton()
  // } else {
  //   emailEmpty.style.display = "none";
  //   emailWrong.style.display = "none";
  //   email.style.border = "";
  //   email.style.outlineColor = "";
  //
  //   checkEmail = true;
  //   activateSignUpButton()
  // }
    const inputValue = e.target.value;

    if (!inputValue) showMessage(email, email.empty);
    else if (emailValidCheck(inputValue)) showMessage(email, email.wrong);
    else clearMessage(email);
})
// 닉네임칸 비었는지, 4글자 이상인지 확인
nickname.addEventListener('focusout', e => {

  if (e.target.value === "") {
    nickFour.style.display = "none"; //메시지 2개가 중첩될 수 있기에 하나는 none
    nickEmpty.style.display = "block";
    nickname.style.border = "2px solid #F74747";
    nickname.style.outlineColor = "#F74747";

    checkNick = false;
    activateSignUpButton()
  } else if (e.target.value.length < 4) {
    nickEmpty.style.display = "none";
    nickFour.style.display = "block";
    nickname.style.border = "2px solid #F74747";
    nickname.style.outlineColor = "#F74747";

    checkNick = false;
    activateSignUpButton()
  } else {
    nickEmpty.style.display = "none";
    nickFour.style.display = "none";
    nickname.style.border = "";
    nickname.style.outlineColor = "";

    checkNick = true;
    activateSignUpButton()
  }
})
// 패스워드 비어있는지 확인 후 8자 이상인지 검증
password.addEventListener('focusout', e => {

  if (e.target.value === "") {
    pwWrong.style.display = "none"; //메시지 2개가 중첩될 수 있기에 하나는 none
    pwEmpty.style.display = "block";
    password.style.border = "2px solid #F74747";
    password.style.outlineColor = "#F74747";

    checkPw = false;
    activateSignUpButton()
  } else if (e.target.value.length < 8) {
    pwEmpty.style.display = "none";
    pwWrong.style.display = "block";
    password.style.border = "2px solid #F74747";
    password.style.outlineColor = "#F74747";

    checkPw = false;
    activateSignUpButton()
  } else {
    pwEmpty.style.display = "none";
    pwWrong.style.display = "none";
    password.style.border = "";
    password.style.outlineColor = "";

    checkPw = true;
    activateSignUpButton()
  }
})
// 비밀번호 눈 아이콘 구현
toggleBtn.addEventListener('click', e => {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
})
// 패스워드확인 비어있는지 확인 후 패스워드와 일치하는지 확인
passwordC.addEventListener('focusout', e => {
  if (passwordC.value === "") {
    pwCWrong.style.display = "none"; //메시지가 중첩될 수 있기에 none
    pwCEight.style.display = "none";
    pwCEmpty.style.display = "block";
    passwordC.style.border = "2px solid #F74747";
    passwordC.style.outlineColor = "#F74747";

    checkPwC = false;
    activateSignUpButton();

  } else if (passwordC.value.length < 8) {
    pwCEight.style.display = "block";
    pwCEmpty.style.display = "none";
    pwCWrong.style.display = "none";
    passwordC.style.border = "2px solid #F74747";
    passwordC.style.outlineColor = "#F74747";
    console.log("비밀번호2")
    checkPwC = false;
    activateSignUpButton();

  } else if (passwordC.value !== password.value) {
    pwCWrong.style.display = "block";
    pwCEmpty.style.display = "none";
    pwCEight.style.display = "none";
    passwordC.style.border = "2px solid #F74747";
    passwordC.style.outlineColor = "#F74747";
    console.log("비밀번호3")
    checkPwC = false;
    activateSignUpButton();

  } else {
    pwCWrong.style.display = "none";
    pwCEmpty.style.display = "none";
    pwCEight.style.display = "none";
    passwordC.style.border = "";
    passwordC.style.outlineColor = "";

    checkPwC = true;
    activateSignUpButton()
  }
})
// 패스워드확인 눈 아이콘 구현
toggleCBtn.addEventListener('click', e => {
  if (passwordC.type === "password") {
    passwordC.type = "text";
  } else {
    passwordC.type = "password";
  }
})

// 이메일과 패스워드가 모두 정상적으로 입력되었다면 로그인 버튼 활성화
function activateSignUpButton() {
  signupBtn.disabled = !((checkEmail && checkPw) && (checkPwC && checkNick));
}

// USER_DATA에 중복된 이메일이 있는 경우 ALERT. & 정상 회원가입됐다면 login.html로 이동.

signupBtn.addEventListener('click',
  e => {
    let validate = 0;

    for (let i = 0; i < USER_DATA.length; i++) {
      const userData = USER_DATA[i];

      if (email.value === userData.email) {
        validate += 1;
      }
    }

    if (validate === 0) {
      window.localStorage.setItem(email.value, email.value);
      window.localStorage.setItem(password.value, password.value);
      console.log(window.localStorage.getItem(email.value));
      console.log(window.localStorage.getItem(password.value));
      window.location.href = "../login.html";
    } else {
      popUp.style.display = "block";
    }
  })


modalButton.addEventListener('click', e => {
  popUp.style.display = "none";
})

///////////////////// functions ///////////////////////
function showMessage(target, message) {
    target.error.style.display = "block";
    target.error.innerHTML = message;
    target.input.style.border = "2px solid #F74747";
    target.input.style.outlineColor = "#F74747";
}
function clearMessage(target) {
    target.error.style.display = "none";
    target.error.innerHTML = "";
    target.input.style.border = "";
    target.input.style.outlineColor = "";
}
function emailValidCheck(value) {
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    if(pattern.test(value) === false) { return false; }
    else { return true; }
}
function isOverEight(value) {
    return (value.length >= 8);
}
function toggleEyeButton() {
    if (password.input.type === "password") password.input.type = "text";
    else password.input.type = "password";
}
function canEnableButton() {
    loginBtn.disabled = !(emailValidation && passwordValidation);
}