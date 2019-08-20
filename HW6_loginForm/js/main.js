const login = (function () {
    const loginInput = document.getElementById("inputEmail"),
        passwordInput = document.getElementById("inputPassword"),
        submitBtn = document.querySelector(".btn btn-lg btn-primary btn-block");

    localStorage['login'] = "my@mail.com";
    localStorage['pwd'] = "password";

    function initComponent() {

    }

    function setLogAndPass() {

    }


    return {
        initComponent: initComponent,
        setLogAndPass: setLogAndPass
    }


    loginInput.addEventListener("click", loginHandler);
    passwordInput.addEventListener("click", passwordHandler);
    submitBtn.addEventListener("click", submitHandler);
})();