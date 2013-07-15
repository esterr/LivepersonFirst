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

  var person = new VisitorDetailsModel.Person();
  var contentChat = new VisitorDetailsModel.ContentChat(); 

  VisitorDetails = Backbone.View.extend({
    el: $("#fillDetails"),

    render: function(){
      // var compiledTemplate = _.template($('#userDetails').html());
      this.$el.html(userDetailsTemplate);
    },

    renderTemplate: function(){ 
      visitorDetails.render();
    },

    update: function(){
      person.set({ firstName: $("#firstName").val()});
    }
  });

  ChatView = Backbone.View.extend({
   el: $("#pannel_chat"),
   model: person,

    render: function(){
     var compiledTemplate = _.template(chatPanelTemplate);
      var data = this.model.toJSON();
      var myhtml = compiledTemplate(data);
      this.$el.html(myhtml);
      $("#chatArea").lionbars(); 
    }
  });

  // var chatView = new ChatView({
  //   model: person,
  //   // el: $("#pannel_chat")
  // });


  // function renderChatView(){
  //   startChat();
  //   chatView.render();
  //   attachEvents();
  // }
ContentView = Backbone.View.extend({
  model: contentChat,
  el: $("#chatArea"),
  initialize: function(){   
    this.model.on('change', this.render, this);
},
  close: function(){
    this.stopListening();
  },
  render: function(){
    //this.$el = $("#chatArea"); 
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



// //------------------------------------------------------------


// //------------------------------------------------------------

// TemplateView = Backbone.View.extend({
//   initialize: function(){   
//     this.model.on('change', this.render, this);
// },
//   close: function(){
//     this.stopListening();
//   },
//   render: function(){
//     this.$el = $("#chatArea"); 
//     var compiledTemplate = _.template($('#templateView').html());
//     var data = this.model.toJSON();
//     var Myhtml = compiledTemplate(data);
//     this.$el.append(Myhtml);
//   }
// });

// //------------------------------------------------------------

// var templateView = new TemplateView({
//   model: templateModel
// });

// //------------------------------------------------------------

// var ViewImgProfile = Marionette.ItemView.extend({
//    template: '#templateView'
//  });

// //------------------------------------------------------------

// function addNewLine(by,text)
// {
//   templateModel.set({by:by,text:text});
// }