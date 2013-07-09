
VisitorDetails = Backbone.View.extend({
  myTemplate: $('#userDetails').html(),
  initialize: function(){
    // this.render();
  },

  close: function(){
    this.stopListening();
  },

  render: function(){
  	var compiledTemplate = _.template(this.myTemplate);
    var data = this.model.toJSON();
    var Myhtml = compiledTemplate(data);
    this.$el.html(Myhtml);
  },

  uu: function(){ 	
  	visitorDetails.render();
  },

  update: function(){
  	person.set({ firstName: $("#firstName").val()});
  }
});

visitorDetails = new VisitorDetails({
  model: person,
  el: $("#fillDetails")
});


//------------------------------------------------------------

ChatView = Backbone.View.extend({
  myTemplate: $('#showChat').html(),
  initialize: function(){
    //this.model.on('change', this.render, this);
  },

  close: function(){
    this.stopListening();
  },

  render: function(){
  	var compiledTemplate = _.template(this.myTemplate);
    var data = this.model.toJSON();
    var Myhtml = compiledTemplate(data);
    this.$el.html(Myhtml);
  }
});

var chatView = new ChatView({
  model: person,
  el: $("#fillDetails")
});


