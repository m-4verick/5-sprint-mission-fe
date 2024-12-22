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
    error: document.querySelector('.emailErrorMessage'),
    empty: "이메일을 입력해주세요.",
    wrong: "올바른 이메일 형식이 아닙니다.",
    valid: false,
}
const nickname = {
    input: document.querySelector('#nickname'),
    error: document.querySelector('.nicknameErrorMessage'),
    empty: "닉네임을 입력해주세요.",
    wrong: "닉네임을 4자 이상 입력해주세요.",
    valid: false,
}
const password = {
    input: document.querySelector('#password'),
    error: document.querySelector('.passwordErrorMessage'),
    empty: "비밀번호를 입력해주세요.",
    wrong: "비밀번호를 8자 이상 입력해주세요.",
    valid: false,
}
const pwConfirm = {
    input: document.querySelector('#passwordConfirmation'),
    error: document.querySelector('.confirmPasswordErrorMessage'),
    empty: "비밀번호를 입력해주세요.",
    wrong: "비밀번호가 일치하지 않습니다.",
    valid: false,
}
const signUpButton = document.querySelector('.signup-button');
let loadPwForCompare = "";

////////////////// eventListener /////////////////////
email.input.addEventListener('focusout', e => {
    const inputValue = e.target.value;

    if (!inputValue) showMessage(email, email.empty);
    else if (!validEmailForm(inputValue)) showMessage(email, email.wrong);
    else {
        clearMessage(email);
        validChecked(email);
        checkButtonStatus();
    }
})
nickname.input.addEventListener('focusout', e => {
    const inputValue = e.target.value;

    if (!inputValue) showMessage(nickname, nickname.empty);
    else if (!isOverFour(inputValue)) showMessage(nickname, nickname.wrong);
    else {
        clearMessage(nickname);
        validChecked(nickname);
        checkButtonStatus();
    }
})
password.input.addEventListener('focusout', e => {
    const inputValue = e.target.value;

    if (!inputValue) showMessage(password, password.empty);
    else if (!isOverEight(inputValue)) showMessage(password, password.empty);
    else {
        clearMessage(password);
        validChecked(password);
        checkButtonStatus();
    }
})
pwConfirm.input.addEventListener('focusout', e => {
    const inputValue = e.target.value;

    if (!inputValue) showMessage(pwConfirm, pwConfirm.empty);
    else if (!comparePassword(inputValue)) showMessage(pwConfirm, pwConfirm.wrong);
    else {
        clearMessage(pwConfirm);
        validChecked(pwConfirm);
        checkButtonStatus();
    }
})

////////////////// functions //////////////////////
function showMessage(target, message) {
    target.input.style.border = "2px solid #F74747";
    target.input.style.outlineColor = "#F74747";
    target.error.style.display = "block";
    target.error.innerHTML = message;
}
function clearMessage(target) {
    target.input.style.border = "";
    target.input.style.outlineColor = "";
    target.error.style.display = "none";
    target.error.innerHTML = "";
}
function validEmailForm(value) {
    const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

    if (pattern.test(value) === false) {
        return false;
    } else {
        return true;
    }
}
function isOverFour(value) {
    return (value.length >= 4);
}
function isOverEight(value) {
    return (value.length >= 8);
}
function comparePassword(value) {
    console.log(loadPwForCompare);
    return (value === loadPwForCompare);
}
function validChecked(target) {
    value.valid = true;
}
function checkButtonStatus() {
    signUpButton.disabled = (email.valid && nickname.valid && password.valid && pwConfirm.valid);
}

// // 클래스가 흥미로워서... 써봤읍니다...
// class validator {
//     constructor(dataSet) {
//         this.input = dataSet.input;
//         this.error = dataSet.error;
//         this.empty = dataSet.empty;
//         this.wrong = dataSet.wrong;
//     }
//
//     isEmpty(input) {
//         return !(input.target.value)
//     }
//     showMessage(errorMessage) {
//         this.input.style.border = "2px solid #F74747";
//         this.input.style.outlineColor = "#F74747";
//         this.error.style.display = "block";
//         this.error.innerHTML = errorMessage;
//     }
// }
// class emailValidator extends validator {
//     constructor(dataSet) {
//         super(dataSet);
//     }
//
//     validCheck(input) {
//         const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
//
//         if (pattern.test(input.target.value) === false) {
//             return false;
//         } else {
//             return true;
//         }
//     }
// }
// class passwordValidator extends validator {
//     constructor(dataSet) {
//         super(dataSet);
//     }
//
//     overEight(input) {
//         return (input.target.value.length >= 8);
//     }
//     notMatch(input) {
//         return (password.target.value === input.target.value);
//     }
// }
// class nicknameValidator extends validator {
//     constructor(dataSet) {
//         super(dataSet);
//     }
//
//     overFour(input) {
//         return input.target.value.length >= 4;
//     }
// }
//
// function clearMessage(target) {
//     target.input.style.border = "";
//     target.input.style.outlineColor = "";
//     target.error.style.display = "none";
//     target.error.innerHTML = "";
// }
//
// email = new emailValidator(emailDataSet);
// nickname = new nicknameValidator(nicknameDataSet);
// password = new passwordValidator(passwordDataSet);
// pwConfirm = new passwordValidator(pwConfirmDataSet);
//
// email.input.addEventListener('focusout', event => {
//     if (email.isEmpty(event)) email.showMessage(email.empty);
//     else if (!email.validCheck(event)) email.showMessage(email.wrong);
//     else clearMessage(email);
// })
//
// nickname.input.addEventListener('focusout', event => {
//     if (nickname.isEmpty(event)) nickname.showMessage(nickname.empty);
//     else if (!nickname.overFour(event)) nickname.showMessage(nickname.wrong);
//     else clearMessage(nickname);
// })
//
// password.input.addEventListener('focusout', event => {
//     if (password.isEmpty(event)) password.showMessage(password.empty);
//     else if (!password.overEight(event)) password.showMessage(password.wrong);
//     else clearMessage(password);
// })
//
// pwConfirm.input.addEventListener('focusout', event => {
//     if (pwConfirm.isEmpty(event)) pwConfirm.showMessage(pwConfirm.empty);
//     else if (!pwConfirm.notMatch(event)) pwConfirm.showMessage(pwConfirm.wrong);
//     else clearMessage(pwConfirm);
// })
