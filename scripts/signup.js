const USER_DATA = [
    {email: 'codeit1@codeit.com', password: "codeit101!"},
    {email: 'codeit2@codeit.com', password: "codeit202!"},
    {email: 'codeit3@codeit.com', password: "codeit303!"},
    {email: 'codeit4@codeit.com', password: "codeit404!"},
    {email: 'codeit5@codeit.com', password: "codeit505!"},
    {email: 'codeit6@codeit.com', password: "codeit606!"},
]

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordC = document.querySelector('#passwordConfirmation');
const nickname = document.querySelector('#nickname');
const emailWrong = document.querySelector('.emailWrong');
const emailEmpty = document.querySelector('.emailEmpty');
const pwWrong = document.querySelector('.pwWrong');
const pwEmpty = document.querySelector('.pwEmpty');
const pwCWrong = document.querySelector('.pwCWrong');
const pwCEmpty = document.querySelector('.pwCEmpty');
const signupBtn = document.querySelector('.button');
const toggleBtn = document.querySelector('.password-toggle-button');
const toggleCBtn = document.querySelector('.toggleC');
const nickEmpty = document.querySelector('.nickEmpty');
const nickFour = document.querySelector('.nickFour');

// 이메일, 패스워드 정상 입력 받았는지 확인용 변수
let checkEmail = false;
let checkNick = false;
let checkPw = false;
let checkPwC = false;

// 로그인 버튼 비활성화
signupBtn.disabled = true;

// 이메일 비어있는지 확인 후 @ 포함됐는지 검증
email.addEventListener('focusout', e => {

    if (e.target.value === "") {
        emailWrong.style.display = "none"; //메시지 2개가 중첩될 수 있기에 하나는 none
        emailEmpty.style.display = "block";
        email.style.border = "2px solid #F74747";
        email.style.outlineColor = "#F74747";
    } else if (e.target.value.includes("@") === false) {
        emailEmpty.style.display = "none";
        emailWrong.style.display = "block";
        email.style.border = "2px solid #F74747";
        email.style.outlineColor = "#F74747";
    } else {
        emailEmpty.style.display = "none";
        emailWrong.style.display = "none";
        email.style.border = "";
        email.style.outlineColor = "";

        checkEmail = true;
        activateSignUpButton()
    }
})
// 닉네임칸 비었는지, 4글자 이상인지 확인
nickname.addEventListener('focusout', e => {

    if (e.target.value === "") {
        nickFour.style.display = "none"; //메시지 2개가 중첩될 수 있기에 하나는 none
        nickEmpty.style.display = "block";
        nickname.style.border = "2px solid #F74747";
        nickname.style.outlineColor = "#F74747";
    } else if (e.target.value.length < 4) {
        nickEmpty.style.display = "none";
        nickFour.style.display = "block";
        nickname.style.border = "2px solid #F74747";
        nickname.style.outlineColor = "#F74747";
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
    } else if (e.target.value.length < 8) {
        pwEmpty.style.display = "none";
        pwWrong.style.display = "block";
        password.style.border = "2px solid #F74747";
        password.style.outlineColor = "#F74747";
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

    if (e.target.value === "") {
        pwCWrong.style.display = "none"; //메시지 2개가 중첩될 수 있기에 하나는 none
        pwCEmpty.style.display = "block";
        passwordC.style.border = "2px solid #F74747";
        passwordC.style.outlineColor = "#F74747";
    } else if (e.target.value !== password.value) {
        pwCEmpty.style.display = "none";
        pwCWrong.style.display = "block";
        passwordC.style.border = "2px solid #F74747";
        passwordC.style.outlineColor = "#F74747";
    } else {
        pwCWrong.style.display = "none";
        pwCEmpty.style.display = "none";
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
    if ( (checkEmail === true) && (checkPw === true) && (checkNick === true) && (checkPwC === true) ) {
        signupBtn.disabled = false;
        return true;
    } else {
        return false;
    }
}

// USER_DATA에 중복된 이메일이 있는 경우 ALERT.
// 회원가입 성공적으로 끝났다면 login 페이지로 이동
signupBtn.addEventListener('click', e => {

    for (let i = 0; i < USER_DATA.length; i++) {
        let validate = false;
        if (!(email.value === USER_DATA[i].email)) {
            validate = true;
            window.location.href = "../login.html";
        }
    }

    if (validate === false) {
        alert("이메일이 이미 등록된거시와요.");
    }
})