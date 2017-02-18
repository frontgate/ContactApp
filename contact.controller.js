(function (){
	var app = angular.module("ContactApp");
	app.controller("ContactCtrl",ContactCtrl);

	function ContactCtrl(ContactDataSvc){
		var self = this;
		self.editMode = false;
		self.addMode = false;

		ContactDataSvc.getContacts()
		.then(function(data){
			self.contacts = data;
		});		
		
		this.selectContact = function(index){
			this.selectedContact = this.contacts[index];
			this.successMessage = undefined;
			this.errorMessage = undefined;
		}

		this.toggleEditMode = function()	{
			this.editMode = !this.editMode;
		}

		this.updateContact = function(){
			this.toggleEditMode();
			var userData = this.selectedContact;
			if(self.addMode){
				ContactDataSvc.addContact(userData)
				.then(function(){
					self.successMessage = "Data created successfully !!";
				},
				function(){
					self.errorMessage = "There was an error. Please try again !!";
			});

			self.addMode = false;
			}else{
				ContactDataSvc.updateContact(userData)
				.then(function(){
					self.successMessage = "Data updated successfully !!";
				},
				function(){
					self.errorMessage = "There was an error. Please try again !!";
			});
			}
			
		}

		this.addContact = function(){
			this.editMode = true;
			self.addMode = true;
			this.selectedContact = {
				"id":new Date().toTimeString()
			};

		}
	}
})();