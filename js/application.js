define([
  'jquery',
  'views/renderChatView',
  'chat'
  // 'views/viewPersonDetails'
], function($, ChatViews, Chat) {

	var initialize = function(){
		visitorDetails = new ChatViews.VisitorDetails();
		chatView = new ChatViews.ChatView();
		chatContent = new ChatViews.ContentView(); 
	};	
	$("#beginChat").click(function(){
  		visitorDetails.renderTemplate();
  	});

	$("#begin_chat").live('click',function(){
	   $("#fillDetails").hide();
		chatView.render(); //render chat panel
		// appStart(); //create profiles region
  		myChat.lpc.requestChat();
	  	myChat.attachEvents(); //attach events to elements
	});

	 return { 
    	initialize: initialize
  	};
});
