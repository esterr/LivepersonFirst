$(function(){
    $('#templates').load('html/templates.html');
});

function begin_chat(){
	$("#fillDetails").hide();
	chatView.render(); //render chat panel
	appStart(); //create profiles region
  	myChat.lpc.requestChat();
  	myChat.attachEvents(); //attach events to elements
}