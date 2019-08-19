(function () {
    const loginInput = document.getElementById("inputEmail"),
        passwordInput = document.getElementById("inputPassword"),
        submitBtn = document.querySelector(".btn btn-lg btn-primary btn-block");



    setLogAndPass();
    initComponent();
    loginInput.addEventListener("click", loginHandler);
    passwordInput.addEventListener("click", passwordHandler);
    submitBtn.addEventListener("click", submitHandler);
})();