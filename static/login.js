$(document).ready(function () {

})

function blankcheck() {
    let id = $('#login-id').val()
    let pw = $('#login-pw').val()

    if (id == '') {
        alert('아이디를 입력하세요')
        return;
    } else if (pw == '') {
        alert('비밀번호를 입력하세요')
        return;
    }
    window.location.href = "/"
}