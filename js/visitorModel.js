
var Person = Backbone.Model.extend({
  defaults: {
    "firstName": "Jeremy"
  }
});

var person = new Person();

var TemplateModel = Backbone.Model.extend({
	defaults:{
		"by": person.firstName,
		"text": "ghg"
	}
})

var templateModel = new TemplateModel();