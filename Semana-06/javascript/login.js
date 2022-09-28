window.onload = function(){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var validatePassContent, validateEmailContent;

    function redirect(link) {
        location.href=link;
    }
    function setP(input) {
        var p = document.querySelector("[name=" + input.name + "-p"+"]");
        p.innerHTML = motiveError;
    }
    function styleValidation(input, validate) {
        if (validate) {
            input.classList.add('ok-input');
            motiveError = '';
        } else  {
            input.classList.add('error-input');
        }
        if (input.value == '') {
            motiveError = '';
            input.classList.remove('ok-input');
            input.classList.remove('error-input');
        }
        setP(input);
    }
    function removeStyles(input) {
        motiveError = '';
        input.classList.remove('ok-input');
        input.classList.remove('error-input');
        setP(input);
    }
    function hasNumAndLetters(inputC) {
        for(var i = 0; i < inputC.length; i++){
            if((inputC.charCodeAt(i) >= 97) && (inputC.charCodeAt(i) <= 122) || inputC.charCodeAt(i) == 241){// lowercase letters
                validatePassContent = true;
            } else if((inputC.charCodeAt(i) >= 65) && ((inputC.charCodeAt(i) <= 90)) || inputC.charCodeAt(i) == 209){ //uppercase letters
                validatePassContent = true;
            } else if((inputC.charCodeAt(i) >= 48) && (inputC.charCodeAt(i) <= 57)){// numbers
                validatePassContent = true;
            }
            else {
                validatePassContent = false;
                motiveError = 'The content field has invalid characters';
                break;
            }
        }
    }
    function correctLength(inputC , cant) {
        if (inputC.length <= cant) {
            validatePassContent = false;
            motiveError = 'The content field doesnt reach the minumun of characters';
        } else {validatePassContent = true;}
    }
    //validate email
    var emailInput = document.querySelector('[name="email"]');
    emailInput.onblur = function() {
        removeStyles(emailInput);
        if ((emailInput.value).match(emailExpression)) {
            validateEmailContent = true;
        } else {
            validateEmailContent = false;
            motiveError = 'Invalid email format';
        }
        styleValidation(emailInput, validateEmailContent);
    }
    emailInput.onfocus = function(){
        removeStyles(emailInput);
    }

    //validate password
    var passInput = document.querySelector('[name="pass"]');
    passInput.onblur = function() {
        var passContent = passInput.value;
        removeStyles(passInput);
        correctLength(passContent, 7);
        if(validatePassContent){hasNumAndLetters(passContent);}
        styleValidation(passInput, validatePassContent);
    }
    passInput.onfocus = function(){
        passInput = document.querySelector('[name="pass"]');
        removeStyles(passInput)
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
            setTimeout(redirect('../views/index.html'), 5000);
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
        removeStyles(emailInput);
        removeStyles(passInput);
        validatePassContent = false;
        validateEmailContent = false;
    }
}