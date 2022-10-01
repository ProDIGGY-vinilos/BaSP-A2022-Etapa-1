var api = 'https://basp-m2022-api-rest-server.herokuapp.com/login';
var  email = 'rose@radiumrocket.com'
var pass = 'baSP2022'
var urlComplete = url+'?email='+email+'&password='+pass

fetch(urlComplete)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        alert(data.msg);
    })
    .catch(function(error){
        alert(error);
    })
