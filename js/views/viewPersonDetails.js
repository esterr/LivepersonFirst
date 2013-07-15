define(['jquery',
  'underscore',
  'backbone',
  // 'wreqr',
  // 'babysitter',
  'marionette',
  'models/person',
  'text!templates/profileList.html',
  'text!templates/imageProfile.html'],function($, _, Backbone, Marionette, PersonModel, ProfileList, ImageProfile){

    var persons = new PersonModel.Persons();
    persons.add(persons.length, 'Derick', 'Bailey', 'derickbailey@example.com', 'images/Desert.jpg', 'reading voltage books');
    persons.add(persons.length, 'Jone','kkk','jonekkk@example.com','images/Hydrangeas.jpg','sport: swim, run, rollers');
    persons.add(persons.length, 'Ronen','rr','ronenrr@example.com','images/Lighthouse.jpg','Develop computer software and games.');
    var personsDisplay = new PersonModel.PersonsDisplay();
    personsDisplay.display("ol", persons);

    var ViewImgProfile = Marionette.ItemView.extend({
      template: ImageProfile,
      tagName: 'li',
      className: 'span10 offset2'
    });

    ProfileList = Marionette.CompositeView.extend({
      // tagName: "div",
      // className: "span1 grey_2 profile_list",
      template: ProfileList,
      itemView: ViewImgProfile,
     
      appendHtml: function(collectionView, itemView){
        collectionView.$("ul").append(itemView.el);
      }
    });

    var myApp = new Marionette.Application();
     
    myApp.addRegions({
      mainRegion: "#listProfile"
    });

    myApp.addInitializer(function(options){
      var profileList = new ProfileList({
        collection: options.persons
      });
      myApp.mainRegion.show(profileList);
    });

    function appStart(){
      myApp.start({persons: personsDisplay});
    }
});

