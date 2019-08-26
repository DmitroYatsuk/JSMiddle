'use strict'
const login = (function () {
    const loginInput = document.getElementById("inputEmail"),
        passwordInput = document.getElementById("inputPassword"),
 //       checkbox = document.getElementById("checkbox"),
        alert = document.getElementById("alert"),
        submitBtn = document.getElementById("submit"),
        formSignin = document.getElementById("form"),
        userData = document.getElementById("userData"),
        userLogin = document.getElementById("userLogin"),
        userPassword = document.getElementById("userPassword"),
        showPwdBtn = document.getElementById("showPwd"),
        homeBtn = document.getElementById("home");

    function setLogAndPass(login, pwd) {
        localStorage['login'] = login;
        localStorage['pwd'] = pwd;
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function showAlert(msg) {
        alert.innerText = msg;
        alert.classList.remove("hide");
        alert.classList.add("show");
    }

    function hideAlert() {
        alert.classList.remove("show");
        alert.classList.add("hide");
    }

    function hideClass(name) {
        name.classList.remove("show");
        name.classList.add("hide");
    }

    function showClass(name) {
        name.classList.remove("hide");
        name.classList.add("show");
    }

    function inputFormValidation(login, pwd) {
        if (login !== "" && pwd !== "") {
            hideAlert();
            if (validateEmail(login)) {
                if (localStorage['login'] === login && localStorage['pwd'] === pwd) {
                    hideClass(formSignin);
                    userLogin.value = login;
                    userPassword.value = pwd;
                    showClass(userData);
                }
                else {
                    showAlert("Wrong credentials!");
                }
            }
            else {
                showAlert("Wrong login format!");
            }
        }
        else {
            showAlert("Login and password shouldn't be empty!");
        }
    }

    let submitHandler = function (e) {
        e.preventDefault();
        inputFormValidation(loginInput.value, passwordInput.value);
    };

    let showPwdHandler = function (e) {
        userPassword.type === 'password' ? userPassword.type = 'text' : userPassword.type = 'password';
        e.target.innerText === "Show password" ? e.target.innerText = 'Hide password' : e.target.innerText = 'Show password';
    };

    let homeBtnHandler = function () {
        loginInput.value = "";
        passwordInput.value = "";
        showClass(formSignin);
        hideClass(userData);
    };

    function initComponent() {
        submitBtn.addEventListener("click", submitHandler);
        showPwdBtn.addEventListener("click", showPwdHandler);
        homeBtn.addEventListener("click", homeBtnHandler);
    }

    return {
        initComponent: initComponent,
        setLogAndPass: setLogAndPass
    }
})();

login.setLogAndPass("my@mail.com", "password");
login.initComponent();

/* if (checkbox.value === "remember-me") {
    localStorage['checkbox'] = 
} */