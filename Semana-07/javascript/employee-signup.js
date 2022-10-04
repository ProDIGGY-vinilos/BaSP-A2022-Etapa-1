window.onload = function(){
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var api = 'https://basp-m2022-api-rest-server.herokuapp.com/signup?';
    var motiveError, validateinputContent, validateEmailContent, access;
    var nameContent, lastnameContent, dniContent, birthdateContent, phoneContent, addressContent, locationContent,
    zipContent, emailContent, passContent, passRContent;
    var inputName = document.querySelector('[name="name"]');;
    var inputLastname = document.querySelector('[name="lastName"]');
    var inputDni = document.querySelector('[name="dni"]');
    var inputBirthdate = document.querySelector('[name="birthdate"]');
    var inputPhone = document.querySelector('[name="phone"]');
    var inputAddress = document.querySelector('[name="address"]');
    var inputLocation = document.querySelector('[name="city"]');
    var inputZip = document.querySelector('[name="zip"]');
    var inputEmail = document.querySelector('[name="email"]');
    var inputPass = document.querySelector('[name="password"]');
    var inputPassR = document.querySelector('[name="passr"]');


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
            motiveError = 'Empty field';
            input.classList.remove('ok-input');
            input.classList.add('error-input');
        }
        setP(input);
    }
    function removeStyles(input) {
        motiveError = '';
        input.classList.remove('ok-input');
        input.classList.remove('error-input');
        //validateinputContent = false;
        setP(input);
    }
    function hasLetters(inputC) {
        for(var i = 0; i < inputC.length; i++){
            if((inputC.charCodeAt(i) >= 97) && (inputC.charCodeAt(i) <= 122)){// lowercase letters
                validateinputContent = true;
            } else if((inputC.charCodeAt(i) >= 65) && ((inputC.charCodeAt(i) <= 90))){ // uppercase letters
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
            } else if((inputC.charCodeAt(i) >= 65) && ((inputC.charCodeAt(i) <= 90)) || inputC.charCodeAt(i) == 209){// uppercase letters
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
                if((input.charCodeAt(i) >= 97) && (input.charCodeAt(i) <= 122) || input.charCodeAt(i) == 241){//lowercase letters
                    validateinputContent = true;
                    hasLetter = true;
                } else if((input.charCodeAt(i) >= 65) && ((input.charCodeAt(i) <= 90)) || input.charCodeAt(i) == 209){//uppercase letters
                    validateinputContent = true;
                    hasLetter = true;
                } else if((input.charCodeAt(i) >= 48) && (input.charCodeAt(i) <= 57)){//numbers
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
            // for (var i = 0; i < pAll.length; i++) {
            //     var labelInput = (document.querySelector("[for="+ inputAll[i].name +"]")).innerHTML;
            //     alert(labelInput+ ': ' +inputAll[i].value);
            // }
            access = true;
        } else{ access = false; }
    }
    function redirect(link) {
        location.href=link;
    }
    function haveLocalStorage(name) {
        if(localStorage.getItem(name)){
            return true;
        }   else {    return false;   }
    }
    function loadLocalStorage(input, localStorageName) {
        input.value = localStorage.getItem(localStorageName);
    }
    if (haveLocalStorage(inputName.name) &&
        haveLocalStorage(inputLastname.name) &&
        haveLocalStorage(inputDni.name) &&
        haveLocalStorage(inputBirthdate.name) &&
        haveLocalStorage(inputPhone.name) &&
        haveLocalStorage(inputAddress.name) &&
        haveLocalStorage(inputLocation.name) &&
        haveLocalStorage(inputZip.name) &&
        haveLocalStorage(inputEmail.name) &&
        haveLocalStorage(inputPass.name)) {
        loadLocalStorage(inputName, inputName.name); loadLocalStorage(inputLastname, inputLastname.name);
        loadLocalStorage(inputDni,inputDni.name); loadLocalStorage(inputBirthdate, inputBirthdate.name);
        loadLocalStorage(inputPhone, inputPhone.name); loadLocalStorage(inputAddress, inputAddress.name);
        loadLocalStorage(inputLocation, inputLocation.name); loadLocalStorage(inputZip, inputZip.name);
        loadLocalStorage(inputEmail, inputEmail.name); loadLocalStorage(inputPass, inputPass.name);
        loadLocalStorage(inputPassR, inputPass.name);
    }
    function urlGenerator() {
        var attribute;
        var inputs = document.getElementsByTagName("input");
        var urlDone = [];
        for (var j = 0; j < inputs.length - 1; j++) {
            attribute = inputs[j].getAttribute("name");
            if (attribute == 'birthdate') {
                birthdateContent = (inputs[j].value);
                var date = birthdateContent.split('-');
                var year = date.shift();
                date.push(year);
                birthdateContent = date.join('/');
                urlDone[j] = "dob="+birthdateContent;
            }
            else {
                urlDone[j] = attribute + '=' + inputs[j].value.trim();
            }
        }
        return urlDone;
    }
    //validate NAME
    inputName.onblur = function(){
        nameContent = inputName.value;
        removeStyles(inputName);
        hasLetters(nameContent);
        if(validateinputContent){
            correctLength(nameContent, 3);
            if(validateinputContent){
                hasSpaceFirst(nameContent);
            }
        }
        styleValidation(inputName, validateinputContent);
    }
    inputName.onfocus = function(){
        removeStyles(inputName);
    }
    //validate LASTNAME
    inputLastname.onblur = function(){
        lastnameContent = inputLastname.value;
        removeStyles(inputLastname);
        hasLetters(lastnameContent);
        if(validateinputContent){
            correctLength(lastnameContent, 3);
            if(validateinputContent){
                hasSpaceFirst(lastnameContent);
            }
        }
        styleValidation(inputLastname, validateinputContent);
    }
    inputLastname.onfocus = function(){
        removeStyles(inputLastname);
    }
    //validate DNI
    inputDni.onblur = function(){
        dniContent = inputDni.value;
        removeStyles(inputDni);
        hasNumbers(dniContent);
        if(validateinputContent){
            rangeLength(dniContent, 8, 8);
        }
        styleValidation(inputDni, validateinputContent);
    }
    inputDni.onfocus = function(){
        removeStyles(inputDni);
    }
    //validate Birthdate
    inputBirthdate.onblur = function() {
        removeStyles(inputBirthdate);
        birthdateContent = new Date((inputBirthdate.value));
        var monthDiff = Date.now() - birthdateContent.getTime();
        var ageDateTime = new Date(monthDiff);
        var year = ageDateTime.getUTCFullYear();
        var age = Math.abs(year - 1970);
        if (age >= 18 && age < 100) {
            validateinputContent = true;
        } else {
            validateinputContent = false;
            motiveError = 'Invalid age';
        }
        birthdateContent = (inputBirthdate.value);
        styleValidation(inputBirthdate, validateinputContent);
    }
    inputBirthdate.onfocus = function(){
        removeStyles(inputBirthdate);
    }
    //validate Phone
    inputPhone.onblur = function(){
        phoneContent = inputPhone.value;
        removeStyles(inputPhone);
        hasNumbers(phoneContent);
        if(validateinputContent){
            rangeLength(phoneContent, 10, 10);
        }
        styleValidation(inputPhone, validateinputContent);
    }
    inputPhone.onfocus = function(){
        removeStyles(inputPhone);
    }
    //validate Address
    inputAddress.onblur = function(){
        addressContent = ((inputAddress.value).split(' ')).join('');
        removeStyles(inputAddress);
        correctLength(addressContent, 5);
        if(validateinputContent){
            hasNumAndLetters(addressContent);
            if(validateinputContent){
                addressContent = (inputAddress.value);
                hasNumOrLetters(addressContent);
                if(validateinputContent){
                    hasSpaceFirst(addressContent);
                }
            }
        }
        styleValidation(inputAddress, validateinputContent);
    }
    inputAddress.onfocus = function(){
        removeStyles(inputAddress);
    }
    //validate Location
    inputLocation.onblur = function() {
        locationContent = ((inputLocation.value).split(' ')).join('');
        removeStyles(inputLocation);
        correctLength(locationContent, 3);
        if(validateinputContent){
            hasNumAndLetters(locationContent);
            if(validateinputContent){
                locationContent = inputLocation.value;
                hasSpaceFirst(locationContent);
            }
        }
        styleValidation(inputLocation, validateinputContent);
    }
    inputLocation.onfocus = function(){
        removeStyles(inputLocation);
    }
    //validate Postal Code
    inputZip.onblur = function() {
        zipContent = inputZip.value;
        removeStyles(inputZip);
        hasNumbers(zipContent);
        if(validateinputContent){
            rangeLength(zipContent, 4, 5);
        }
        styleValidation(inputZip, validateinputContent);
    }
    inputZip.onfocus = function(){
        removeStyles(inputZip);
    }
    //validate EMAIL
    inputEmail.onblur = function() {
        removeStyles(inputEmail);
        emailContent = inputEmail.value;
        if ((emailContent).match(emailExpression)) {
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
    inputPass.onblur = function() {
        passContent = inputPass.value;
        removeStyles(inputPass);
        correctLength(passContent, 7);
        if(validateinputContent){
            hasNumAndLetters(passContent);
        }
        styleValidation(inputPass, validateinputContent);
    }
    inputPass.onfocus = function(){
        removeStyles(inputPass);
    }
    //validate PASSWORD REPEAT
    inputPassR.onblur = function() {
        passRContent = inputPassR.value;
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
            var url = urlGenerator();
            var urlComplete = url.filter(String);
            urlComplete = url.join('&');
            fetch(api+urlComplete)
                .then(function(response){
                    return response.json();
                })
                .then(function(data){
                    if(data.success){
                        alert(data.msg);
                        alert(' ID: '+data.data.id+'\n NAME: '+data.data.name+'\n LASTNAME: '+data.data.lastName+
                        '\n DNI:'+data.data.dni+'\n BIRTHDATE: '+data.data.dob+'\n PHONE: '+data.data.phone+
                        '\n ADDRESS: '+data.data.address+'\n LOCATION: '+data.data.city+'\n POSTAL CODE: '+data.data.zip+
                        '\n EMAIL: '+data.data.email+'\n PASSWORD: '+data.data.password);
                        date = data.data.dob.split('/');
                        var month = date.shift();
                        var day = date.shift();
                        date.push(month);
                        date.push(day);
                        date = date.join('-');
                        localStorage.setItem(inputName.name, data.data.name);
                        localStorage.setItem(inputLastname.name, data.data.lastName);
                        localStorage.setItem(inputDni.name, data.data.dni);
                        localStorage.setItem(inputBirthdate.name, date);
                        localStorage.setItem(inputPhone.name, data.data.phone);
                        localStorage.setItem(inputAddress.name, data.data.address);
                        localStorage.setItem(inputLocation.name, data.data.city);
                        localStorage.setItem(inputZip.name, data.data.zip);
                        localStorage.setItem(inputEmail.name, data.data.email);
                        localStorage.setItem(inputPass.name, data.data.password);
                    } else {
                        var errorA = data.errors;
                        var errorS = '';
                        for (var i = 0; i < errorA.length; i++) {
                            errorS += errorA[i].msg+'\n';
                        }
                        throw new Error(errorS);
                    }
                })
                .catch(function(error){
                        alert(error);
                })
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