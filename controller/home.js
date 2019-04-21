(function() {
    var app = angular.module("test");
 
    var sayHello = function(){
        alert("Hello Varsha");
     }
 
     app.controller("home", sayHello);
    
 }());