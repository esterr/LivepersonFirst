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

	return {
		Person: Person,
		ContentChat: ContentChat
	}
});