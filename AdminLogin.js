let email1 = document.querySelector("#mailUser")
let pass1 = document.querySelector("#passUser")
let submitButton = document.querySelector("#sub1")
let h3s = document.querySelectorAll("span")

submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    let emailValue1 = email1.value
    let passValue1 = pass1.value
    let originalemail = localStorage.getItem("email")
    let originalpass = localStorage.getItem("password")
    console.log(emailValue1);
    console.log(passValue1);
    console.log(originalemail);
    console.log(originalpass);
    let flag1 = checkname(emailValue1, originalemail)
    let flag2 = checkpass(passValue1, originalpass)
    if (flag1 == true && flag2 == true) {
        h3s[0].innerText = "Welcome Home"
    }
    else if (flag1 == false && flag2 == true) {
        h3s[0].innerText = "Invalid Username"
    }
    else if (flag1 == true && flag2 == false) {
        h3s[1].innerText = "Invalid Password"
    }
    else if (flag1 == false && flag2 == false) {
        h3s[0].innerText = "Enter proper credentials"
    }
})

function checkname(str1, str2) {
    if (str1.length == str2.length) {
        if (str1.includes(str2)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}
function checkpass(pass2, pass3) {
    if (pass2.length == pass3.length) {
        if (pass2.includes(pass3)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return false
    }
}