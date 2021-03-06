var myChat;

function Chat() {
  var lpc = {};
  this.checkAvailability = function(){ this.lpc.chatAvailability(); };

  this.startChat = function(){ this.lpc.requestChat(); };

  this.attachEvents = function() {
    var _this = this;

    $('#chatLine').bind('keypress', function (event) {
      if (event.keyCode == 13)
      {
        _this.sendText(); 
        return false;
      } 
    });

    $('#searchBtn').bind('click', function(){ _this.showSearchInput(); });

    $('#closeIcon').bind('click', function(){ _this.closeIcon(); });

    $("#searchText").bind('input', function(){ _this.search(); });
  };

  this.search = function(){
    var body = document.getElementById("chatArea");
    var text = document.getElementById("searchText").value;
    highlightSearchTerms(body, text, true, true, "", "");
  };
  this.showSearchInput = function(){
    document.getElementById("searchText").style = "display:block";
    document.getElementById("searchText").focus();
    document.getElementById("closeIcon").style = "display:block";
  };
  this.closeIcon = function(){
    removeHightlight(document.getElementById("chatArea"));
    document.getElementById("searchText").value = "";
    document.getElementById("searchText").style = "display:none";
    document.getElementById("closeIcon").style = "display:none";
  };

  this.addChatText = function(by, text) {
    this.addNewLine(by, text);
  };
  this.sendText = function() {
    var textObj = document.getElementById('chatLine');
    if(textObj.value!=''){
      this.lpc.addLine(textObj.value);
      this.addChatText(this.lpc.getVisitorName(), textObj.value);
      textObj.value='';
    }
    return true;
  };
  this.addNewLine = function(by, text) 
  {
    templateModel.set({by:by, text:text});
  };
}

var lpChatConfig = {
  apiKey: 'bde0c8f2ea324bf5bc6dd7a4e5da1063',
  lpNumber: '33590391',
  jsApiSrcDomain: 'dev.liveperson.net',

  onLoad : function() {
    window.myChat = new Chat();
    myChat.lpc= new lpChat();
  },

  onLine : function(line) { myChat.addChatText(line.by, line.text); },
  
  onError : function(errObj){ alert('Error occured. ' + errObj.text); },

  onAvailability: function(availObj){
    if( availObj.availability == true ){
      alert( 'we can start a chat' );
    } else {
      alert( 'account is offline' );
    }
  },

  onStart : function(agentId, agentName) { myChat.lpc.setVisitorName(person.attributes.firstName); },

  onAgentTyping : function(isTyping) {
    if(isTyping)$(".typing").show();
    else $(".typing").hide();  
  }
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


