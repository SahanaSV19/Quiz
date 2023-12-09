let nam = document.querySelector("#nam")
let email = document.querySelector("#email")
let num = document.querySelector("#num")
let pass = document.querySelector("#pass")
let cpass = document.querySelector("#cpass")
let sub = document.querySelector("#sub")
let h2s = document.querySelectorAll("span")
let baseUrl="http://localhost:3000/api/"
sub.addEventListener("click", (event) => {
    event.preventDefault()
    let namValue = nam.value
    let emailValue = email.value
    let numValue = num.value
    let passValue = pass.value
    let cpassValue = cpass.value
    console.log(namValue);
    console.log(emailValue);
    let flag2=evaluateName(namValue.trim())
    let flag3=evaluateMail(emailValue.trim())
    let flag4= evaluateNumber(numValue.trim())
    let flag5=evaluatePass(passValue.trim(),cpassValue.trim())
    if(flag2==true && flag3==true && flag4==true && flag5==true)
    {
        localStorage.setItem("name",namValue)
        localStorage.setItem("email",emailValue)
        localStorage.setItem("number",numValue)
        localStorage.setItem("password",passValue)
        sessionStorage.setItem("name",namValue)
        sessionStorage.setItem("email",emailValue)
        sessionStorage.setItem("number",numValue)
        sessionStorage.setItem("password",passValue)
        let obj=
            {
                username: namValue,
                email: emailValue,
                password: passValue
              }
        
        console.log(obj);
        var jsonObj=JSON.stringify(obj)
        console.log(jsonObj);
        fetch(`${baseUrl}auth/signup`,{
            method:"POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body:jsonObj
        }).then((e)=>{
            console.log(e);
            alert(namValue+" is successfully signedup")
            window.location.href=`http://127.0.0.1:5500/login.html`
        })

    }
    

})

function evaluateName(para) {
    if (para === '') {
        h2s[2].innerHTML = `<h3>Enter Name</h3>`
    }
    else {
        let str = para
        console.log(str);
        let flag = false;
        let flag1 = false;
        if (str[0].charCodeAt() > 64 && str[0].charCodeAt() < 91) {
            flag1 = true;

        }
        for (let char in str) {


            if ((str[char].charCodeAt() > 64 && str[char].charCodeAt() < 91) || (str[char].charCodeAt() > 96 && str[char].charCodeAt() < 123)) {
                flag = false
                // console.log("valid char"+str[char]);
            }
            else {
                flag = true;
                break
                // console.log("invalid char"+str[char]);
            }
        }
        if (flag == false && flag1 == true) {
            // console.log("valid name");
            // h2s[2].innerText = "valid name"
            return true;
        }
        else {
            console.log("invalid name");
            h2s[2].innerHTML = `<h3>invalid name</h3>`


        }

    }
}
function evaluatePass(password,cpassword) {
    let passc=cpassword;
    if (password === '') {
        h2s[5].innerHTML = `<h3>Enter password</h3>`
    }
    else {
        let str = password
        let str2 = password
        let uc = 0
        let lc = 0;
        let sc = 0;
        let nc = 0
        let space=0;
        for (let i = 0; i < str.length; i++) {
            let char = str[i].charCodeAt()
            if (char > 64 && char < 91) {
                uc++
            }
            else if (char > 96 && char < 123) {
                lc++
            }
            else if (char > 47 && char < 58) {
                nc++
            }
            else if(char==32)
        {      space++
            }
            else {
                sc++
            }
        }

        // console.log(nc + "nc");
        // console.log(sc + "sc");
        // console.log(lc + "lc");
        // console.log(uc + "uc");
        if (str.length < 8) {
            h2s[5].innerHTML = `<h3>pass is less than 8 char</h3>`
        }
        else if (uc < 1) {
            h2s[5].innerHTML = `<h3>pass should include min 1 uppercase</h3>`

        }
        else if (lc < 1) {
            h2s[5].innerHTML = `<h3>pass should include min 1 lowercase</h3>`

        } else if (sc < 1) {
            h2s[5].innerHTML = `<h3>Missing special character</h3>`

        }
        else if (nc < 1) {
            h2s[5].innerHTML = `<h3>pass should include min 1 number</h3>`

        }
            else if(space>0){
                            h2s[5].innerHTML = `<h3>pass should not include space</h3>`
                        }
        else {
            // h2s[5].innerHTML = "pass is a valid"
            let flag6= evaluateCpass(passc, str2)
            return flag6
        }
    }
}

function evaluateCpass(Confirmpass, mpassword) {
    if (Confirmpass === '') {
        h2s[6].innerHTML = `<h3>Enter Confirm password</h3>`
    }
    else {
        if (Confirmpass === '') {
            h2s[6].innerHTML = `<h3>confirmpassword</h3>`
        }
        else {
            let flag = samestrings(Confirmpass, mpassword)
            if (flag) {
                // h2s[6].innerText = "password matched"
                // console.log("hi");
                return true;
            }
            else {
                h2s[6].innerHTML = `<h3>password mismatched</h3>`
                // console.log("hello");
            }
        }
    }
}

function samestrings(strA, strB) {
    let str5 = strA;
    let str6 = strB;
    console.log(str5)
    if (str5.length == str6.length) {
        for (let i = 0; i < str5.length; i++) {
            let char1 = str5.charAt(i);
            let char2 = str6.charAt(i);
            if (char1 == char2) {
                return true;
            }
            else {
                return false;
                break;
            }

        }
    }
    else {
        return false;
    }

}
function evaluateMail(mail) {
    if (mail === '') {
        h2s[3].innerHTML=`<h3>Enter mail</h3>`
    }
    else {
        let mailA = mail;
        if (mailA.charCodeAt(0) > 64 && mailA.charCodeAt(0) < 91) {
            h2s[3].innerHTML = `<h3>Mail should begin with lower case</h3>`
        }
        else {
            if (mailA.includes("@gmail.com")) {
                // h2s[3].innerText = "Valid mail"
                return true;
            }
            else {
                h2s[3].innerHTML = `<h3>missing @gmail.com</h3>`
            }

        }
    }
}

function evaluateNumber(num1) {
    if(num1==='')
    {
        h2s[4].innerHTML=`<h3>Enter Number</h3>`
    }
    else{
    let num2 = num1
    if (num2.length == 10) {
        // h2s[4].innerText = "Valid number"
        return true;
    }
    else {
        h2s[4].innerHTML = `<h3>InValid number</h3>`
    }
}
}