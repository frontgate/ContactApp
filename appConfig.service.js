
(function (){
    var app = angular.module("ContactApp");
    app.service("appDataServiceService",function (appNameService){
        this.name = appNameService;           
        this.author = "Koushik";
        this.company = "Java Brains";
        this.version = 1;
    });	
})();	