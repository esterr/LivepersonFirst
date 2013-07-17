define(["backbone"],function(Backbone){
	var Person = Backbone.Model.extend({
	  defaults: {
	    "firstName": "Jeremy"
	  }
	});

	var ContentChat = Backbone.Model.extend({
		defaults:{
			"by": "",
			"text": "ghg"
		}
	})
  var person = new Person();
  var contentChat = new ContentChat(); 
	return {
		person: person,
		contentChat: contentChat
	}
});