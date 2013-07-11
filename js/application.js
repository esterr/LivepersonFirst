$(function(){
    $('#templates').load('html/templates.html');
});
function begin_chat(){
	$("#fillDetails").hide()
	chatView.render();
	lpc.requestChat();
	appStart();
}