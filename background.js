function removeByID(id) {
  document.getElementById(id).style.display="none";
}

function removeByClass(id) {
  var elements = document.getElementsByClassName(id);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display="none";
  }
}

function focusKongregate() {
  removeByID('headerwrap');
  removeByID('gamepage_header');
  removeByID('subwrap');
  removeByClass('sitemessage');
  removeByClass('game_page_admindev_controls');
  removeByClass('game_details_outer');
  removeByClass('game_page_wrap');
}


chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {file: 'kongrefocus.js'});
});


