/*
 * This is the function that actually highlights a text string by
 * adding HTML tags before and after all occurrences of the search
 * term. You can pass your own tags if you'd like, or if the
 * highlightStartTag or highlightEndTag parameters are omitted or
 * are empty strings then the default <font> tags will be used.
 */
function doHighlight(bodyText, searchTerm, highlightStartTag, highlightEndTag) 
{
  // the highlightStartTag and highlightEndTag parameters are optional
  if ((!highlightStartTag) || (!highlightEndTag)) {
    highlightStartTag = "<font style='color:blue; background-color:yellow;'>";
    highlightEndTag = "</font>";
  }
  
  // find all occurences of the search term in the given text,
  // and add some "highlight" tags to them (we're not using a
  // regular expression search, because we want to filter out
  // matches that occur within HTML tags and script blocks, so
  // we have to do a little extra validation)
  var newText = "";
  var i = -1;
  var lcSearchTerm = searchTerm.toLowerCase();
  var lcBodyText = bodyText.toLowerCase();
    
  while (bodyText.length > 0) {
    i = lcBodyText.indexOf(lcSearchTerm, i+1);
    if (i < 0) {
      newText += bodyText;
      bodyText = "";
    } else {
      // skip anything inside an HTML tag
      if (bodyText.lastIndexOf(">", i) >= bodyText.lastIndexOf("<", i)) {
        // skip anything inside a <script> block
        if (lcBodyText.lastIndexOf("/script>", i) >= lcBodyText.lastIndexOf("<script", i)) {
          newText += bodyText.substring(0, i) + highlightStartTag + bodyText.substr(i, searchTerm.length) + highlightEndTag;
          bodyText = bodyText.substr(i + searchTerm.length);
          lcBodyText = bodyText.toLowerCase();
          i = -1;
        }
      }
    }
  }
  
  return newText;
}

/*
 * This function remove the highlight tags form the body.
 * @bodyElement is required.
 */
function removeHightlight(bodyElement)
{
  var regex = /<(\/)?font[a-zA-Z\s=\"\:\;\-]*>/ig;
  var body = bodyElement.innerHTML;
  var result = body.replace(regex, "");
  bodyElement.innerHTML = result;
}

/*
 * This is sort of a wrapper function to the doHighlight function.
 * It takes the searchText that you pass, optionally splits it into
 * separate words, and transforms the text on the current web page.
 * Only the "searchText" parameter is required; all other parameters
 * are optional and can be omitted.
 */
function highlightSearchTerms(bodyElement, searchText, treatAsPhrase, warnOnFailure, highlightStartTag, highlightEndTag)
{
  removeHightlight(bodyElement);
  // if the treatAsPhrase parameter is true, then we should search for 
  // the entire phrase that was entered; otherwise, we will split  // search string so that each word is searched for and highlighted
  // individually

  if (searchText != "" && searchText.length > 0 && searchText != null) {
    if (treatAsPhrase) {
      searchArray = [searchText];
    } else {
      searchArray = searchText.split(" ");
    }
    
    if (!bodyElement || typeof(bodyElement.innerHTML) == "undefined") {
      if (warnOnFailure) {
        alert("Sorry, for some reason the text of this page is unavailable. Searching will not work.");
      }
      return false;
    }
    
    var bodyText = bodyElement.innerHTML;
    for (var i = 0; i < searchArray.length; i++) {
      bodyText = doHighlight(bodyText, searchArray[i], highlightStartTag, highlightEndTag);
    }
    
    bodyElement.innerHTML = bodyText;
  }

  return true;
}