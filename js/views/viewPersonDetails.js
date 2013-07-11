var ViewImgProfile = Marionette.ItemView.extend({
  template: '#imageProfile',
  tagName: 'li',
 //className: 'img_profile'
});

ProfileList = Backbone.Marionette.CompositeView.extend({
  // tagName: "div",
  // className: "span1 grey_2 profile_list",
  template: "#profileList",
  itemView: ViewImgProfile,
 
  appendHtml: function(collectionView, itemView){
    collectionView.$("ul").append(itemView.el);
  }
});

var myApp = new Backbone.Marionette.Application();
 
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


