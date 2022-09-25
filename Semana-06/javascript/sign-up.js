window.onload = function(){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var motiveError, inputContent, inputSelector, validateinputContent;
    // general methods
    function correctLength(inputC ,cant) {
        if (inputC.length <= cant) {
            validateinputContent = false;
            motiveError ='The content field doesnt reach the minumun of characters';
        }
    }
    function styleValidation(input, validate) {
        if (validate) {
            input.classList.add('ok-input');
            motiveError = '';
        } else  {   input.classList.add('error-input'); }
    }
    function removeStyles(input) {
        if (input.value == '') {
            input.classList.remove('ok-input');
            input.classList.remove('error-input');
        }
        input.classList.remove('ok-input');
        input.classList.remove('error-input');
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
        }
    }
    function hasNumAndLetters(inputC) {
        for(var i = 0; i < inputC.length; i++){
            if((inputC.charCodeAt(i) >= 97) && (inputC.charCodeAt(i) <= 122)){// lowercase letters
                validateinputContent = true;
            } else if((inputC.charCodeAt(i) >= 65) && ((inputC.charCodeAt(i) <= 90))){ //uppercase letters
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
        inputC = inputC.split(' ');
        for (var j = 0; j < inputC.length; j++) {
            for(var i = 0; i < inputC[i].length; i++){
                if((inputC[i].charCodeAt(i) >= 97) && (inputC[i].charCodeAt(i) <= 122)){// lowercase letters
                    validateinputContent = true;
                    hasLetter = true;
                } else if((inputC[i].charCodeAt(i) >= 65) && ((inputC[i].charCodeAt(i) <= 90))){ //uppercase letters
                    validateinputContent = true;
                    hasLetter = true;
                } else if((inputC[i].charCodeAt(i) >= 48) && (inputC[i].charCodeAt(i) <= 57)){// numbers
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
        }
    }

    // AGREGAR VALIDATESTYLE A ONBLUR FALTANTES

    //validate NAME
    var inputName = document.querySelector('[name="name"]');
    inputName.onblur = function(){
        var nameContent = inputName.value;
        removeStyles(inputName);
        hasLetters(nameContent);
        correctLength(nameContent, 3);
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
        styleValidation(inputLastname, validateinputContent);
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
        var addressContent = (inputAddress.value).split(' ').join('');
        removeStyles(inputAddress);
        correctLength(addressContent, 5);
        hasNumAndLetters(addressContent);
        addressContent = inputAddress.value;
        hasNumOrLetters(addressContent);
    }
    inputAddress.onfocus = function(){
        removeStyles(inputAddress);
    }
    //validate Location
    var inputLocation = document.querySelector('[name="location"]');
    inputLocation.onblur = function() {
        var locationContent = inputLocation.value;
        removeStyles(inputLocation);
        correctLength(locationContent, 3);
        hasNumAndLetters(locationContent);
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
    //validate EMAIL
    var inputEmail = document.querySelector('[name="email"]');
    inputEmail.onblur = function() {
        if((emailInput.value).match(emailExpression)){
            
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