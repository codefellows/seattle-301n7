$(() => {
  $.ajax({
    url: '/data/notes.json'
  }).done(function(data) {
    console.log('request done: ' + Date.now());
    data.forEach((note) => {
      $('#notes').append(`<li>${note.body}</li>`);
    });
  });
  console.log('request started: ' + Date.now());
});
