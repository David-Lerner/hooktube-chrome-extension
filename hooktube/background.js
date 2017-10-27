// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  //Declaring variables
  var targ,newTarg;

  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    targ=tabs[0].url;
    var toBeOmitted="youtube.com";
    var toBeAddded="hooktube.com";
    newTarg=targ.replace(toBeOmitted,toBeAddded);   
	
    return newTarg;
  });

  chrome.tabs.query({ active: true, lastFocusedWindow: true }, function (tabs) {
    chrome.tabs.update({url:newTarg});
  });
});