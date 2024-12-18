const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
]

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailWrong = document.querySelector('.emailWrong');
const emailEmpty = document.querySelector('.emailEmpty');
const pwWrong = document.querySelector('.pwWrong');
const pwEmpty = document.querySelector('.pwEmpty');
const loginBtn = document.querySelector('.button');
const toggleBtn = document.querySelector('.password-toggle-button');

// 이메일, 패스워드 정상 입력 받았는지 확인용 변수
let checkEmail = false;
let checkPw = false;

// 로그인 버튼 비활성화
loginBtn.disabled = true;
// 이메일 비어있는지 확인 후 @ 포함됐는지 검증
email.addEventListener('input', e => {

    if(e.target.value === ""){
        emailWrong.style.display = "none"; //메시지 2개가 중첩될 수 있기에 하나는 none
        emailEmpty.style.display = "block";
        email.style.border = "2px solid #F74747";
        email.style.outlineColor = "#F74747";
    } else if(e.target.value.includes("@") === false){
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
        activateLoginBtn()
    }
})
// 패스워드 비어있는지 확인 후 8자 이상인지 검증
password.addEventListener('input', e => {

    if(e.target.value === ""){
        console.log("검증함");
        pwWrong.style.display = "none"; //메시지 2개가 중첩될 수 있기에 하나는 none
        pwEmpty.style.display = "block";
        password.style.border = "2px solid #F74747";
        password.style.outlineColor = "#F74747";
    } else if(e.target.value.length < 8){
        pwEmpty.style.display = "none";
        pwWrong.style.display = "block";
        password.style.border = "2px solid #F74747";
        password.style.outlineColor = "#F74747";
    } else{
        pwEmpty.style.display = "none";
        pwWrong.style.display = "none";
        password.style.border = "";
        password.style.outlineColor = "";

        checkPw = true;
        activateLoginBtn()
    }
})
// 비밀번호 눈 아이콘 구현
toggleBtn.addEventListener('click', e => {
    if(password.type === "password"){
        password.type = "text";
    } else {
        password.type = "password";
    }
})
// 이메일과 패스워드가 모두 정상적으로 입력되었다면 로그인 버튼 활성화
function activateLoginBtn() {
    if( (checkEmail === true) && (checkPw === true) ){
        loginBtn.disabled = false;
        return true;
    } else {
        return false;
    }
}
// 로그인 버튼을 눌렀을 때, 입력된 데이터가 USER_DATA의 정보와 일치하는 경우 items 페이지로 이동, 그렇지 않은 경우 ALERT
loginBtn.addEventListener('click', e => {

    for(let i = 0; i < USER_DATA.length; i++){
        let validate = false;
        if( (email.value === USER_DATA[i].email) && (password.value === USER_DATA[i].password) ){
            validate = true;
            window.location.href = "../items.html";
        }
    }

    if(validate === false){
        alert("APTAPT");
    }
})
