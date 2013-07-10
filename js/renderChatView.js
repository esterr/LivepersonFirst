
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
    //var data = this.model.toJSON();
    //var Myhtml = compiledTemplate(data);
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
  myTemplate: $('#chat_area').html(),
  initialize: function(){
    //this.model.on('change', this.render, this);
  },

  close: function(){
    this.stopListening();
  },

  render: function(){
    lpc.requestChat();
  	var compiledTemplate = _.template($('#chat_area').html());
    var data = this.model.toJSON();
    var Myhtml = compiledTemplate(data);
    this.$el.html(Myhtml);
    $("#chatArea").lionbars(); 
  }
});

var chatView = new ChatView({
  model: person,
  el: $("#fillDetails")
});


//------------------------------------------

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

  var templateView = new TemplateView({
    model: templateModel
  });
var ViewImgProfile = Marionette.ItemView.extend({
   template: '#templateView'
 });



// var pro = new ViewImgProfile({
//   model:templateModel
// });

function addNewLine(by,text)
{
  templateModel.set({by:by,text:text});
}


//   // initialize: function(){

//     // bind the model change to re-render this view
//     // this.model.on('change', this.render, this);
//     // this.render();
//   //   alert("you in initialize");
//   // },

//   // render: function(){
//   //   this.$el.append(html)
//   // }
// });

// function SetImgProfile(index){

//   var view = new ViewImgProfile({
//     model: persons.at(index)
//   });

//   view.render();

//   $('.profile_list > ul').append(view.el);

// }