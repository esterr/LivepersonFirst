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
     
       if(isTyping)  
        alert("agent is currently typing");  
     
  } 

  function addChatText(by,text){
    addNewLine(by,text);
   
  }

  var lpChatConfig = {
    apiKey: '625cfc9fbe2641feaf091b7376414784',
    lpNumber: 'P36913473',
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


