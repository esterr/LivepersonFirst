VisitorDetails = Backbone.View.extend({
  initialize: function(){
  },

  render: function(){
  	var compiledTemplate = _.template($('#userDetails').html());
    this.$el.html(compiledTemplate);
  },

  uu: function(){ 
  	visitorDetails.render();
  },

  update: function(){
  	person.set({ firstName: $("#firstName").val()});
  }
});

visitorDetails = new VisitorDetails({
  el: $("#fillDetails")
});

//------------------------------------------------------------

ChatView = Backbone.View.extend({
  // myTemplate: $('#chat_area').html(),
  initialize: function(){
  },

  close: function(){
    this.stopListening();
  },

  render: function(){
  	var compiledTemplate = _.template($('#chat_area').html());
    var data = this.model.toJSON();
    var myhtml = compiledTemplate(data);
    this.$el.html(myhtml);
    $("#chatArea").lionbars(); 
  }
});

var chatView = new ChatView({
  model: person,
  el: $("#pannel_chat")
});


//------------------------------------------------------------

TemplateView = Backbone.View.extend({
  initialize: function(){   
    this.model.on('change', this.render, this);
},
  close: function(){
    this.stopListening();
  },
  render: function(){
    this.$el = $("#chatArea"); 
    var compiledTemplate = _.template($('#templateView').html());
    var data = this.model.toJSON();
    var Myhtml = compiledTemplate(data);
    this.$el.append(Myhtml);
  }
});

//------------------------------------------------------------

var templateView = new TemplateView({
  model: templateModel
});

//------------------------------------------------------------

var ViewImgProfile = Marionette.ItemView.extend({
   template: '#templateView'
 });

//------------------------------------------------------------

function addNewLine(by,text)
{
  templateModel.set({by:by,text:text});
}
