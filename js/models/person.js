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

var persons = new Persons();

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

var personsDisplay = new PersonsDisplay();

persons.add(persons.length, 'Derick', 'Bailey', 'derickbailey@example.com', 'images/Desert.jpg', 'reading voltage books');

persons.add(persons.length, 'Jone','kkk','jonekkk@example.com','images/Hydrangeas.jpg','sport: swim, run, rollers');

persons.add(persons.length, 'Ronen','rr','ronenrr@example.com','images/Lighthouse.jpg','Develop computer software and games.');

personsDisplay.display("ol", persons);

