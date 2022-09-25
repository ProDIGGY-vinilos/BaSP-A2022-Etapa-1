window.onload = function(){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var validatePassContent, validateEmailContent;

    //validate email
    var emailInput = document.querySelector('[name="email"]');
    emailInput.onblur = function() {
        emailInput.classList.remove('ok-input');
        emailInput.classList.remove('error-input');
        if ((emailInput.value).match(emailExpression)) {
            emailInput.classList.add('ok-input');
            validateEmailContent = true;
        } else {
            emailInput.classList.add('error-input');
            validateEmailContent = false;
        }
        if (emailInput.value == '') {
            emailInput.classList.remove('ok-input');
            emailInput.classList.remove('error-input');
            validateEmailContent = false;
        }
    }
    emailInput.onfocus = function() {
        emailInput = document.querySelector('[name="email"]');
        emailInput.classList.remove('ok-input');
        emailInput.classList.remove('error-input');
    }

    //validate password
    var passInput = document.querySelector('[name="pass"]');
    passInput.onblur = function() {
        passInput.classList.remove('ok-input');
        passInput.classList.remove('error-input');
        passContent = (passInput.value).toLowerCase();
        for(var i = 0; i < passContent.length;i++){
            if((passContent.charCodeAt(i) >= 97) && (passContent.charCodeAt(i) <= 122)){
                validatePassContent = true;
            }
            else if((passContent.charCodeAt(i) >= 48) && ((passContent.charCodeAt(i) <= 57))){
                validatePassContent = true;
            }
            else {
                validatePassContent = false;
            }
        }
        if (validatePassContent) {
            passInput.classList.add('ok-input');
        } else { passInput.classList.add('error-input');    }
        if (passInput.value == '') {
            passInput.classList.remove('ok-input');
            passInput.classList.remove('error-input');
            validatePassContent = false;
        }
    }
    passInput.onfocus = function(){
        passInput = document.querySelector('[name="pass"]');
        passInput.classList.remove('ok-input');
        passInput.classList.remove('error-input');
    }
    //button onclick
    var loginBtn = document.querySelector('#submit-btn');
    loginBtn.onclick = function(e) {
        e.preventDefault();
        emailContent = (document.querySelector('[name="email"]')).value;
        passContent = (document.querySelector('[name="pass"]')).value;
        if (validatePassContent && validateEmailContent) {
            alert('Login successfull!');
            alert('Welcome: '+emailContent+' Pass: '+passContent);
        } else{
            if (!validatePassContent) {
                alert('Password incorrect: '+ passContent);
            } if(!validateEmailContent) {
                alert('Email incorrect: '+ emailContent);
            }
        }
    }
    //reset fields
    var resetBtn = document.querySelector('#reset-btn');
    resetBtn.onclick = function () {
        emailInput.classList.remove('ok-input');
        emailInput.classList.remove('error-input');
        passInput.classList.remove('ok-input');
        passInput.classList.remove('error-input');
        validatePassContent = false;
        validateEmailContent = false;
    }
}