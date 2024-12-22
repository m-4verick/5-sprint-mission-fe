const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
]

const loginBtn = document.querySelector('.login-button');
const toggleBtn = document.querySelector('.password-toggle-button');
const popUp = document.querySelector('.popup-wrapper');
const popupCloseBtn = document.querySelector('.modal-button');
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

// 이메일, 패스워드 정상 입력 받았는지 확인용 변수
let emailValidation = false;
let passwordValidation = false;

// 이메일 검증
email.input.addEventListener('focusout', e => {
    const inputValue = e.target.value;

    if(!inputValue) showMessage(email, email.empty);
    else if(!emailValidCheck(inputValue)) showMessage(email, email.wrong);
    else {
        clearMessage(email);
        emailValidation = true;
        canEnableButton()
    }
})
// 비밀번호 검증
password.input.addEventListener('focusout', e => {
    const inputValue = e.target.value;

    if (!inputValue) showMessage(password, password.empty);
    else if (!isOverEight(inputValue)) showMessage(password, password.wrong);
    else {
        clearMessage(password);
        passwordValidation = true;
        canEnableButton()
    }
})
// 비밀번호 눈 아이콘 구현
toggleBtn.addEventListener('click', e => {
    toggleEyeButton();
})
// 로그인 버튼을 눌렀을 때, 입력된 데이터가 USER_DATA의 정보와 일치하는 경우 items 페이지로 이동, 그렇지 않은 경우 팝업
loginBtn.addEventListener('click', e => {
    USER_DATA.some((user) => {
        const emailValid = (user.email === email.input.value);
        const passwordValid = (user.password === password.input.value);

        if(emailValid && passwordValid) window.location.href = "../items.html";
        else popUp.style.display = "block";
    })
})
// 팝업 확인 버튼
popupCloseBtn.addEventListener('click', e => {
    popUp.style.display = "none";
})


//////////////// functions /////////////////////
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