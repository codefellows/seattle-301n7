var handleClick = function(event) {
  event.preventDefault();
  var $note = $(event.target);
  $note.parent().remove();
};

$(function() {
  $('#note-list').on('click', 'a[href="/remove-note"]', handleClick);

  $('form#note-form').on('submit', function(e) {
    e.preventDefault();
    var $form = $(e.target);
    var $noteBody = $form.find('input[name="note-body"]');
    var $note = $('li.template').first().clone();
    $note.removeClass('template');
    $note.prepend($noteBody.val());
    $noteBody.val('');
    $('#note-list').append($note);
  });
});
