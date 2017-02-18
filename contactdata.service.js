(function () {
    var app = angular.module("ContactApp");
    app.service("ContactDataSvc", function ($http) {
        var self = this;

        self.getContacts = function (){        
            var promise1 = $http.get('http://localhost:3000/contacts');
			var promise2 = promise1.then(function (response){
				return response.data;
			});
            return promise2;            
        }

        self.updateContact = function (data){
           return $http.put('http://localhost:3000/contacts/'+data.id,data)
            .then(function(response){
                console.log(response);
            })
        }

        self.addContact = function (data){
           return $http.post('http://localhost:3000/contacts/',data)
            .then(function(response){
                console.log(response);
            })
        }
    });
})();