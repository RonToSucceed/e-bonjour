var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var email = document.getElementById("email");
var password = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");
var loginFail = document.getElementById("loginFail")
loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(() => {
        var user = firebase.auth().currentUser;
        if(user){
            console.log("登入成功");
            console.log(user);
            //window.location.href='register.html'
            modal.style.display = "none";
        }
    })
    .catch((error) => {
        console.log(error.message);
        loginFail.innerHTML = "登入失敗";
    });
});
registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
        console.log("註冊成功");
        modal.style.display = "none";
    })
    .catch((error) => {
        console.log(error.message);
        loginFail.innerHTML = "註冊失敗";
    });
});