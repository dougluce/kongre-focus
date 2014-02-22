function removeByID(id) {
  document.getElementById(id).style.display="none";
}

function removeByClass(id) {
  var elements = document.getElementsByClassName(id);
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.display="none";
  }
}

removeByID('headerwrap');
removeByClass('gamepage_header_outer');
removeByClass('game_details_outer');
removeByClass('game_page_wrap');
removeByID('subwrap');
removeByID('chat_container_cell');
