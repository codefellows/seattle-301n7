var addAwesomeElement = function(newItem) {
  var $awesomeList = $('#js-awesome-list');
  $awesomeList
    .append($awesomeList
      .children()
      .first()
      .clone()
      .html(newItem));
};

var addAwesomeListElement = function(newItem) {
  var li = $('<li></li>');
  $('#js-awesome-list').append(li.html(newItem));
};


$(document).ready(function() {
  var $awesomeList = $('#js-awesome-list');
  var $lis = $awesomeList.children();
  var $singleLi = $($lis[2]);
  var $clone = $singleLi.clone();
  $clone.html('301n7');
  $singleLi.append($clone);

  addAwesomeElement('more coffee');
  addAwesomeElement('pinball');
  addAwesomeElement('ranier');
  addAwesomeListElement('sleep');
});
