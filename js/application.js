define([
  'jquery',
  'views/renderChatView',
  'views/viewPersonDetails'
], function($, ChatViews) {
  
  
	var initialize = function(){
		visitorDetails = new ChatViews.VisitorDetails();
		chatView = new ChatViews.ChatView();
		chatContent = new ChatViews.ContentView();
	};	
	$("#beginChat").click(function(){
  		visitorDetails.renderTemplate();
  	});

	$("#aaa").live('click',function(){
	   $("#fillDetails").hide();
		chatView.render(); //render chat panel
		appStart(); //create profiles region
	  	//lpc.requestChat();
	  	//attachEvents(); //attach events to elements
	});

	// $(function(){
	//     $('#templates').load('html/templates.html');
	// });	

	// function begin_chat(){
	// 	$("#fillDetails").hide();
	// 	chatView.render(); //render chat panel
	// 	appStart(); //create profiles region
	//   	lpc.requestChat();
	//   	attachEvents(); //attach events to elements
	// }	

	// var render_user_details = function(){
	// 	visitorDetails.renderTemplate();
	// };
	 return { 
    	initialize: initialize,
    	//render_user_details: render_user_details
  	};


});

