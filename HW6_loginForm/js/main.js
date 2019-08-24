'use strict'
const login = (function () {
    const loginInput = document.getElementById("inputEmail"),
        passwordInput = document.getElementById("inputPassword"),
        checkbox = document.getElementById("checkbox"),
        alert = document.getElementById("alert"),
        submitBtn = document.getElementById("submit"),
        formSignin = document.getElementById("form"),
        userData = document.getElementById("userData"),
        userLogin = document.getElementById("userLogin"),
        userPassword = document.getElementById("userPassword"),
        showPwdBtn = document.getElementById("showPwd"),
        homeBtn = document.getElementById("home");

    function setLogAndPass() {
        localStorage['login'] = "my@mail.com";
        localStorage['pwd'] = "password";
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function inputFormValidation(login, pwd) {
        if (login !== "" && pwd !== "") {
            alert.classList.remove("show");
            alert.classList.add("hide");
            if (validateEmail(login)) {
                if (localStorage['login'] === login && localStorage['pwd'] === pwd) {
                    formSignin.classList.remove("show");
                    formSignin.classList.add("hide");
                    userLogin.value = login;
                    userPassword.value = pwd;
                    userData.classList.remove("hide");
                    userData.classList.add("show");
                }
                else {
                    alert.innerText = "Wrong credentials!"
                    alert.classList.remove("hide");
                    alert.classList.add("show");
                }
            }
            else {
                alert.innerText = "Wrong login format!"
                alert.classList.remove("hide");
                alert.classList.add("show");
            }

        }
        else {
            alert.innerText = "Wrong credentials!"
            alert.classList.remove("hide");
            alert.classList.add("show");
        }
    }

    function initComponent() {
        inputFormValidation(loginInput.value, passwordInput.value);
    }

    let submitHandler = function (e) {
        e.preventDefault();
        initComponent();
    }

    let showPwdHandler = function (e) {
        userPassword.type === 'password' ? userPassword.type = 'text' : userPassword.type = 'password';
        e.target.innerText === "Show password" ? e.target.innerText = 'Hide password' : e.target.innerText = 'Show password';
    }

    let homeBtnHandler = function () {
        loginInput.value = "";
        passwordInput.value = "";
        formSignin.classList.remove("hide");
        formSignin.classList.add("show");
        userData.classList.remove("show");
        userData.classList.add("hide");
    }

    //    loginInput.addEventListener("change", loginHandler);
    //    passwordInput.addEventListener("change", passwordHandler);
    submitBtn.addEventListener("click", submitHandler);
    showPwdBtn.addEventListener("click", showPwdHandler);
    homeBtn.addEventListener("click", homeBtnHandler);


    /*     return {
            initComponent: initComponent,
            setLogAndPass: setLogAndPass
        } */
})();


//login.setLogAndPass();
//login.initComponent();




/* let loginHandler = function (e) {

    console.log(e.target.value);
}

let passwordHandler = function (e) {
    console.log(e.target.value);
} */