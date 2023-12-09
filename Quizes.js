let logout = document.querySelector("#logoutbtn");
let quizzes = document.querySelectorAll(".carousel-item");

let baseUrl = "http://localhost:3000/api/"
logout.addEventListener("click", () => {

    fetch(`${baseUrl}auth/signout`, {
        method: "GET",
        credentials: "include",
    }).then((e3) => {
        console.log(e3);
        alert("is succesfully signed out")
        return e3.json()
    }).then(() => {
        window.location.href = "http://127.0.0.1:5500/Home.html"
    })
})
quizzes[0].addEventListener(("click"),()=>{
    window.location.href="http://127.0.0.1:5500/Quizz1.html"
})

