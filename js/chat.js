 var lpc;
 function myOnLine ( line ) {
    addChatText(line.by, line.text);
  }

  function myOnError(errObj){
    alert('Error occured. ' + errObj.text);
  }

  function myOnStart(agentId, agentName) {  
     lpc.setVisitorName(person.attributes.firstName);  
  }  
  
  function myonAgentTyping(isTyping) {
<<<<<<< HEAD
       if(isTyping)  
        alert("agent is currently typing");  
     
=======
       if(isTyping)$(".typing").show();
       else $(".typing").hide();  
>>>>>>> a27bcdad16dd27327b1451ed7a026c39b92bc075
  } 

  function addChatText(by,text){
    addNewLine(by,text);
   
  }

  var lpChatConfig = {
    apiKey: '74ddbb2a99d64f8dbeb73520c621fe69',
    lpNumber: 'P53643872',
    jsApiSrcDomain: 'dev.liveperson.net',

    onLoad : function() {
      window.lpc= new lpChat();
    },

    onLine : myOnLine,
    onError : myOnError,
    onAvailability: myOnAvailability,
    onStart : myOnStart,
    onAgentTyping : myonAgentTyping
  };

  lpChatConfig.lpAddScript = function(src, ignore) {
    var c = lpChatConfig;
    if(typeof(c.lpProtocol)=='undefined'){
      c.lpProtocol = "https";
    }

    if (typeof(src) == 'undefined' || typeof(src) == 'object') {
      src = c.lpChatSrc ? c.lpChatSrc : '/hcp/html/jschatapiv2.js';
    }

    if (src.indexOf('http') != 0) {
      src = c.lpProtocol + "://" + c.jsApiSrcDomain + src + '?site=' + c.lpNumber;
    } else {
      if (src.indexOf('site=') < 0) {
        if (src.indexOf('?') < 0) {
          src = src + '?';
        } else {
          src = src + '&';
          src = src + 'site=' + c.lpNumber;
        }
      }
    }

    var s = document.createElement('script');
    s.setAttribute('type', 'text/javascript');
    s.setAttribute('charset', 'iso-8859-1');
    s.setAttribute('src', src);
    document.getElementsByTagName('head').item(0).appendChild(s);

  }

  if (window.attachEvent) {
    window.attachEvent('onload', lpChatConfig.lpAddScript);
  } else {
    window.addEventListener('load', lpChatConfig.lpAddScript, false);
  }

  function checkAvailability() {
    lpc.chatAvailability( );
  }

  function myOnAvailability(availObj){
    if( availObj.availability == true ){
      alert( 'we can start a chat' );
    } else {
      alert( 'account is offline' );
    }
  }

  function sendText() {
    var textObj = document.getElementById('chatLine');
    if(textObj.value!=''){
      lpc.addLine(textObj.value);
      addChatText(lpc.getVisitorName(), textObj.value);
      textObj.value='';
    }
    return true;
  }

function startChat(){
    lpc.requestChat();
}

function attachEvents(){
  $('#chatLine').bind('keypress', function (event) {
      if (event.keyCode == 13)
      {
        sendText(); 
        return false;
      } 
  });
}

function search(){
  var body = document.getElementById("chatArea");
  var text = document.getElementById("searchText").value;
  highlightSearchTerms(body, text, true, true, "", "");
}

function showSearchInput(){
  document.getElementById("searchText").style="display:block";
  document.getElementById("searchText").focus();
  document.getElementById("closeIcon").style="display:block";
}


function closeIcon(){
  removeHightlight(document.getElementById("chatArea"));
  document.getElementById("searchText").value="";
  document.getElementById("searchText").style="display:none";
  document.getElementById("closeIcon").style="display:none";
}
