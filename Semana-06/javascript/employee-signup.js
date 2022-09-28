window.onload = function(){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var motiveError, validateinputContent, validateEmailContent, access;
    // general methods
    function correctLength(inputC , cant) {
        if (inputC.length <= cant) {
            validateinputContent = false;
            motiveError = 'The content field doesnt reach the minumun of characters';
        } else {validateinputContent = true;}
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
    function hasLetters(inputC) {
        for(var i = 0; i < inputC.length; i++){
            if((inputC.charCodeAt(i) >= 97) && (inputC.charCodeAt(i) <= 122)){// lowercase letters
                validateinputContent = true;
            } else if((inputC.charCodeAt(i) >= 65) && ((inputC.charCodeAt(i) <= 90))){ //uppercase letters
                validateinputContent = true;
            } else {
                validateinputContent = false;
                motiveError = 'The content field has invalid characters';
                break;
            }
        }
    }
    function hasNumbers(inputC) {
        for(var i = 0; i < inputC.length; i++){
            if((inputC.charCodeAt(i) >= 48) && (inputC.charCodeAt(i) <= 57)){// numbers
                validateinputContent = true;
            }
            else {
                validateinputContent = false;
                motiveError = 'The content field has invalid characters';
                break;
            }
        }
    }
    function rangeLength(inputC, firstNum, secondNum){
        if (inputC.length < firstNum || inputC.length > secondNum) {
            validateinputContent = false;
            motiveError ='The content field doesnt reach the range of characters';
        } else {validateinputContent = true; }
    }
    function hasNumAndLetters(inputC) {
        for(var i = 0; i < inputC.length; i++){
            if((inputC.charCodeAt(i) >= 97) && (inputC.charCodeAt(i) <= 122) || inputC.charCodeAt(i) == 241){// lowercase letters
                validateinputContent = true;
            } else if((inputC.charCodeAt(i) >= 65) && ((inputC.charCodeAt(i) <= 90)) || inputC.charCodeAt(i) == 209){ //uppercase letters
                validateinputContent = true;
            } else if((inputC.charCodeAt(i) >= 48) && (inputC.charCodeAt(i) <= 57)){// numbers
                validateinputContent = true;
            }
            else {
                validateinputContent = false;
                motiveError = 'The content field has invalid characters';
                break;
            }
        }
    }
    function hasNumOrLetters(inputC) {
        var hasLetter = false;
        var hasNumber = false;
        var inputArray = inputC.split(' ');
        for (var input of inputArray) {
            for (var i = 0; i < input.length; i++) {
                if((input.charCodeAt(i) >= 97) && (input.charCodeAt(i) <= 122) || input.charCodeAt(i) == 241){// lowercase letters
                    validateinputContent = true;
                    hasLetter = true;
                } else if((input.charCodeAt(i) >= 65) && ((input.charCodeAt(i) <= 90)) || input.charCodeAt(i) == 209){ //uppercase letters
                    validateinputContent = true;
                    hasLetter = true;
                } else if((input.charCodeAt(i) >= 48) && (input.charCodeAt(i) <= 57)){// numbers
                    validateinputContent = true;
                    hasNumber = true;
                }
                else {
                    validateinputContent = false;
                    motiveError = 'The content field has invalid characters';
                    break;
                }
                }
                if (hasLetter && hasNumber) {
                    validateinputContent = false;
                    motiveError = 'The content field has invalid characters';
                    break;
                }
            hasLetter = false;
            hasNumber = false;
        }
    }
    function hasSpaceFirst(inputC) {
        if (inputC.substring(0,1) == ' ') {
            validateinputContent = false;
            motiveError = 'Error there are a space in the first character';
        }
    }
    function alertBtn() {
        var pAll = document.querySelectorAll("main p");
        var aux = 'ok';
        for (var i = 0; i < pAll.length; i++) {
           pValue = pAll[i].innerHTML;
           if((pValue != '') ){
                aux = (pAll[i].attributes.name.nodeValue).split('-');
                var inputP = (document.querySelector("[for="+ aux[0] +"]")).innerHTML;
                alert('Error in: '+inputP+ ': ' +pValue);
           }
        }
        if(aux == 'ok'){
            var inputAll = document.querySelectorAll('input');
            alert(':::Welcome:::');
            for (var i = 0; i < pAll.length; i++) {
                var labelInput = (document.querySelector("[for="+ inputAll[i].name +"]")).innerHTML;
                alert(labelInput+ ': ' +inputAll[i].value);
            }
            access = true;
        } else{ access = false; }
    }
    function redirect(link) {
        location.href=link;
    }
    //validate NAME
    var inputName = document.querySelector('[name="name"]');
    inputName.onblur = function(){
        var nameContent = inputName.value;
        removeStyles(inputName);
        hasLetters(nameContent);
        correctLength(nameContent, 3);
        hasSpaceFirst(nameContent);
        styleValidation(inputName, validateinputContent);
    }
    inputName.onfocus = function(){
        removeStyles(inputName);
    }
    //validate LASTNAME
    var inputLastname = document.querySelector('[name="lastname"]');
    inputLastname.onblur = function(){
        var lastnameContent = inputLastname.value;
        removeStyles(inputLastname);
        hasLetters(lastnameContent);
        correctLength(lastnameContent, 3);
        hasSpaceFirst(lastnameContent);
        styleValidation(inputLastname, validateinputContent);
        console.log(inputLastname.name);
    }
    inputLastname.onfocus = function(){
        removeStyles(inputLastname);
    }
    //validate DNI
    var inputDni = document.querySelector('[name="dni"]');
    inputDni.onblur = function(){
        var dniContent = inputDni.value;
        removeStyles(inputDni);
        hasNumbers(dniContent);
        correctLength(dniContent, 7);
        styleValidation(inputDni, validateinputContent);
    }
    inputDni.onfocus = function(){
        removeStyles(inputDni);
    }
    //validate Birthdate
    var inputBirthdate = document.querySelector('[name="birthdate"]');
    inputBirthdate.onblur = function() {
        removeStyles(inputBirthdate);
        var birthdateContent = new Date((inputBirthdate.value));
        var monthDiff = Date.now() - birthdateContent.getTime();
        var ageDateTime = new Date(monthDiff);
        var year = ageDateTime.getUTCFullYear();
        var age = Math.abs(year - 1970);
        if (age > 18 && age < 100) {
            validateinputContent = true;
        } else {
            validateinputContent = false;
            motiveError = 'Invalid age';
        }
        styleValidation(inputBirthdate, validateinputContent);
    }
    inputBirthdate.onfocus = function(){
        removeStyles(inputBirthdate);
    }
    //validate Phone
    var inputPhone = document.querySelector('[name="phone"]');
    inputPhone.onblur = function(){
        var phoneContent = inputPhone.value;
        removeStyles(inputPhone);
        hasNumbers(phoneContent);
        rangeLength(phoneContent, 10, 10);
        styleValidation(inputPhone, validateinputContent);
    }
    inputPhone.onfocus = function(){
        removeStyles(inputPhone);
    }
    //validate Address
    var inputAddress = document.querySelector('[name="address"]');
    inputAddress.onblur = function(){
        var addressContent = ((inputAddress.value).split(' ')).join('');
        removeStyles(inputAddress);
        correctLength(addressContent, 5);
        hasNumAndLetters(addressContent);
        addressContent = (inputAddress.value);
        hasNumOrLetters(addressContent);
        hasSpaceFirst(addressContent);
        styleValidation(inputAddress, validateinputContent);
    }
    inputAddress.onfocus = function(){
        removeStyles(inputAddress);
    }
    //validate Location
    var inputLocation = document.querySelector('[name="location"]');
    inputLocation.onblur = function() {
        var locationContent = ((inputLocation.value).split(' ')).join('');
        removeStyles(inputLocation);
        correctLength(locationContent, 3);
        hasNumAndLetters(locationContent);
        locationContent = inputLocation.value;
        hasSpaceFirst(locationContent);
        styleValidation(inputLocation, validateinputContent);
    }
    inputLocation.onfocus = function(){
        removeStyles(inputLocation);
    }
    //validate Postal Code
    var inputPC = document.querySelector('[name="postalcode"]');
    inputPC.onblur = function() {
        var pcContent = inputPC.value;
        removeStyles(inputPC);
        hasNumbers(inputPC);
        rangeLength(pcContent, 4, 5);
        styleValidation(inputPC, validateinputContent);
    }
    inputPC.onfocus = function(){
        removeStyles(inputPC);
    }
    //validate EMAIL
    var inputEmail = document.querySelector('[name="email"]');
    inputEmail.onblur = function() {
        removeStyles(inputEmail);
        if ((inputEmail.value).match(emailExpression)) {
            validateEmailContent = true;
        } else {
            validateEmailContent = false;
            motiveError = 'Invalid email format';
        }
        styleValidation(inputEmail, validateEmailContent);
    }
    inputEmail.onfocus = function(){
        removeStyles(inputEmail);
    }
    //validate PASSWORD
    var inputPass = document.querySelector('[name="pass"]');
    inputPass.onblur = function() {
        var passContent = inputPass.value;
        removeStyles(inputPass);
        correctLength(passContent, 7);
        if(validateinputContent){hasNumAndLetters(passContent);}
        styleValidation(inputPass, validateinputContent);
    }
    inputPass.onfocus = function(){
        removeStyles(inputPass);
    }
    //validate PASSWORD REPEAT
    var inputPassR = document.querySelector('[name="passr"]');
    inputPassR.onblur = function() {
        var passRContent = inputPassR.value;
        var passContent = (document.querySelector('[name="pass"]')).value;
        removeStyles(inputPassR);
        if ((passRContent).match(passContent)) {
            validateinputContent = true;
        } else {
            validateinputContent = false;
            motiveError = 'Password doesnt match';
        }
        styleValidation(inputPassR, validateinputContent);
    }
    inputPassR.onfocus = function(){
        removeStyles(inputPassR);
    }
    var loginBtn = document.querySelector('#submit-btn');
    loginBtn.onclick = function(e) {
        e.preventDefault();
        alertBtn();
        if (access) {
            setTimeout(redirect('../views/index.html'), 5000);
        }
    }
    //reset fields
    var resetBtn = document.querySelector('#reset-btn');
    resetBtn.onclick = function () {
        removeStyles(inputName);
        removeStyles(inputLastname);
        removeStyles(inputDni);
        removeStyles(inputBirthdate);
        removeStyles(inputPhone);
        removeStyles(inputAddress);
        removeStyles(inputLocation);
        removeStyles(inputPC);
        removeStyles(inputEmail);
        removeStyles(inputPass);
        removeStyles(inputPassR);
        validatePassContent = false;
        validateEmailContent = false;
    }
}