document.getElementById('login-submit').addEventListener('click',function(){
    //=========get user email=============
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // console.log(userEmail);

    //========get user password===========
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;
    // console.log(userPassword);
    //========check email and password===========
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        window.location.href = 'banking.html';
    }

});



