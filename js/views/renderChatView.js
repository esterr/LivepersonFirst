define([
  'jquery',
  'underscore',
  'backbone',
  'libs/jquery-lionbars',
  'models/visitorModel',
  'text!templates/userDetails.html',
  'text!templates/chatPanel.html',
  'text!templates/chatContent.html'
], 
function($, _, Backbone, lionbars, VisitorDetailsModel, userDetailsTemplate, chatPanelTemplate, chatContent){

  VisitorDetails = Backbone.View.extend({
    el: $("#fillDetails"),

    render: function(){
      this.$el.html(userDetailsTemplate);
    },

    renderTemplate: function(){ 
      visitorDetails.render();
    },

    update: function(){
      VisitorDetailsModel.person.set({ firstName: $("#firstName").val()});
    }
  });

  ChatView = Backbone.View.extend({
   el: $("#pannel_chat"),
   model: VisitorDetailsModel.person,

    render: function(){
     var compiledTemplate = _.template(chatPanelTemplate);
      var data = this.model.toJSON();
      var myhtml = compiledTemplate(data);
      this.$el.html(myhtml);
      $("#chatArea").lionbars(); 
    }
  });

ContentView = Backbone.View.extend({
  model: VisitorDetailsModel.contentChat,
  
  initialize: function(){   
    this.model.on('change', this.render, this);
},
  close: function(){
    this.stopListening();
  },
  render: function(){
    this.$el = $("#chatArea"); 
    var compiledTemplate = _.template(chatContent);
    var data = this.model.toJSON();
    var Myhtml = compiledTemplate(data);
    this.$el.append(Myhtml);
  }
});

//------------------------------------------------------------


  return {  
    VisitorDetails: VisitorDetails,
    ChatView: ChatView,
    ContentView: ContentView
  }
  
});
