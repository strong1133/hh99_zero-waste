$(document).ready(function () {

})

function joinblankcheck() {
    let name = $('#register-name').val()
    let id = $('#register-id').val()
    let pw = $('#register-pw').val()
    let email = $('#register-email').val()

    if (name == '') {
        alert('이름을 입력하세요')
        return;
    } else if (id == '') {
        alert('아이디를 입력하세요')
        return;
    } else if (pw == '') {
        alert('비밀번호를 입력하세요')
        return;
    } else if (email == '') {
        alert('이메일을 입력하세요')
        return;
    }
    alert('가입을 환영합니다. '+name+'님')
    window.location.href = "/login"
}