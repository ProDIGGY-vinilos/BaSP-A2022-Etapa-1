window.onload = function(){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var motiveError, validateinputContent, validateEmailContent, validateinputContent, access;

    function removeStyles(input) {
        motiveError = '';
        input.classList.remove('ok-input');
        input.classList.remove('error-input');
        setP(input);
    }
    function styleValidation(input, validate) {
        if (validate) {
            input.classList.add('ok-input');
            motiveError = '';
        } else  {
            input.classList.add('error-input');
        }
        if (input.value == '') {
            motiveError = 'Empty field';
            input.classList.remove('ok-input');
            input.classList.add('error-input');
        }
        setP(input);
    }
    function correctLength(inputC , cant) {
        if (inputC.length <= cant) {
            validateinputContent = false;
            motiveError = 'The content field doesnt reach the minumun of characters';
        }
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
    function setP(input) {
        var p = document.querySelector("[name=" + input.name + "-p"+"]");
        p.innerHTML = motiveError;
    }
    function hasSpaceFirst(inputC) {
        if (inputC.substring(0,1) == ' ') {
            validateinputContent = false;
            motiveError = 'Error there are a space in the first character';
        }
    }
    function alertBtn() {
        var pAll = document.querySelectorAll("form p");
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
            alert(':::Thanks for contacting us:::');
            access = true;
        } else{ access = false; }
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
    //validate EMAIL
    var inputEmail = document.querySelector('[name="email"]');
    inputEmail.onblur = function() {
        console.log(inputMessage.value);
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
    //validate SELECT
    var inputSelect = document.querySelector('select');
    inputSelect.onblur = function() {
        var selectContent = inputSelect.value;
        console.log(selectContent);
        removeStyles(inputSelect);
        if (selectContent == 'Contact area') {
            motiveError = 'Please select an option';
            validateinputContent = false;
        } else {validateinputContent = true;}
        styleValidation(inputSelect, validateinputContent);
    }
    inputSelect.onfocus = function(){
        removeStyles(inputSelect);
    }
    //validate MESSAGE
    var inputMessage = document.querySelector('textarea');
    inputMessage.onblur = function() {
        var messageContent = inputMessage.value;
        removeStyles(inputMessage);
        validateinputContent= true;
        styleValidation(inputMessage, validateinputContent);
    }
    inputMessage.onfocus = function(){
        removeStyles(inputMessage);
    }
    //btn SUBMIT
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
        removeStyles(inputEmail);
        validatePassContent = false;
        validateEmailContent = false;
    }
}