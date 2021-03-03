$(document).ready(function () {

})

//회원가입 클라이언트
function joinblankcheck() {
    let name = $('#register-name').val()
    let id = $('#register-id').val()
    let pw = $('#register-pw').val()
    console.log(name, id, pw)

    if ($("#help-id").hasClass("is-danger")) {
        alert("아이디를 다시 확인해주세요.")
        return;
    } else if (!$("#help-id").hasClass("is-success")) {
        alert("아이디 중복확인을 해주세요.")
        return;
    }

    //비번은 빈칸안돼 정규식에맞고 중복확인해야지
    if (password == "") {
        $("#help-password").text("비밀번호를 입력해주세요.").removeClass("is-safe").addClass("is-danger")
        $("#input-password").focus()
        return;
    } else if (!is_password(password)) {
        $("#help-password").text("비밀번호의 형식을 확인해주세요. 영문과 숫자 필수 포함, 특수문자(!@#$%^&*) 사용가능 8-20자").removeClass("is-safe").addClass("is-danger")
        $("#input-password").focus()
        return
    } else {
        $("#help-password").text("사용할 수 있는 비밀번호입니다.").removeClass("is-danger").addClass("is-success")
    }
    if (password2 == "") {
        $("#help-password2").text("비밀번호를 입력해주세요.").removeClass("is-safe").addClass("is-danger")
        $("#input-password2").focus()
        return;
    } else if (password2 != password) {
        $("#help-password2").text("비밀번호가 일치하지 않습니다.").removeClass("is-safe").addClass("is-danger")
        $("#input-password2").focus()
        return;
    } else {
        $("#help-password2").text("비밀번호가 일치합니다.").removeClass("is-danger").addClass("is-success")
    }


    if (name == '') {
         alert('이름을 입력하세요')
        return;
     } else if (id == '') {
         alert('아이디를 입력하세요')
         return;
     } else if (pw == '') {
        alert('비밀번호를 입력하세요')
         return;
     }
     alert('가입을 환영합니다. '+name+'님')
     window.location.href = "/login"
}