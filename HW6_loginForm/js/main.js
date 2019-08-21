const login = (function () {
    const loginInput = document.getElementById("inputEmail"),
        passwordInput = document.getElementById("inputPassword"),
        checkbox = document.getElementById("checkbox"),
        alert = document.getElementById("alert"),
        submitBtn = document.getElementById("submit"),
        formSignin = document.getElementsByClassName("form-signin");

    function initComponent() {
        localStorage['login'] = "my@mail.com";
        localStorage['pwd'] = "password";
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function inputFormValidation (login, pwd) {
        //console.log(login, pwd);
        if (login !== "" && pwd !== "") {
            alert.classList.remove("show");
            alert.classList.add("hide");
            if (validateEmail(login)) {
                if (localStorage['login'] === login && localStorage['pwd'] === pwd) {
                    formSignin.classList.remove("show");
                    formSignin.classList.add("hide");
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

    function setLogAndPass(login, pwd) {
        console.log(login.value, pwd.value);

    }




    let loginHandler = function (e) {

        console.log(e.target.value);
    }

    let passwordHandler = function (e) {
        console.log(e.target.value);
    }

    let submitHandler = function (e) {
        inputFormValidation(loginInput.value, passwordInput.value);
    }


//    loginInput.addEventListener("change", loginHandler);
//    passwordInput.addEventListener("change", passwordHandler);
    submitBtn.addEventListener("click", submitHandler);


/*     return {
        initComponent: initComponent,
        setLogAndPass: setLogAndPass
    } */
})();