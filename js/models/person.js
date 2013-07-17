define(['jquery',
  'underscore',
  'backbone'], function($, _, Backbone){

  Person = Backbone.Model.extend({
    default: {
      id : null,
      firstName: 'you',
      lastName: 'you',
      email: 'you_you@example.com',
      img: 'images/Desert.jpg',
      hobby: 'someThing'
    }
  });

  Persons = Backbone.Collection.extend({
    Model: Person,

    add: function(_id, _firstName, _lastName, _email, _img, _hobby){
      Backbone.Collection.prototype.add.call(this, 
        new Person({
          id: this.length,
          firstName: _firstName,
          lastName: _lastName,
          email: _email,
          img: _img,
          hobby: _hobby
        })
      );
    }
  });

PersonsDisplay = Backbone.Collection.extend({
  Model: Person,

  display: function(text, personsList){
    var disPersons = new Array();
    var pattern = new RegExp(text, "i");
    personsList.each(function(person){
      if(pattern.test(person.get("hobby")))
        disPersons.push(person);
    });
    this.add(disPersons);
    // $.each(personsList, function(person){
    //   if(person.hobby.indexOf(text) != -1)
    //       this.add(person); 
    // });
  }
});

  return {
    Person: Person,
    Persons: Persons,
    PersonsDisplay: PersonsDisplay 
  }

});
