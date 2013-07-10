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

MyApp = new Backbone.Marionette.Application();
 
MyApp.addRegions({
  mainRegion: "#listProfile"
});

MyApp.addInitializer(function(options){
  var profileList = new ProfileList({
    collection: options.persons
  });
  MyApp.mainRegion.show(profileList);
});

function appStart(){
  MyApp.start({persons: personsDisplay});
}


