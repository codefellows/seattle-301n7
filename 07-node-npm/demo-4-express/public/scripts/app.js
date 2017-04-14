$(() => {
  $('#data-form').on('submit', function(e) {
    e.preventDefault();
    const input = $('input[name="text-body"]');
    $.ajax({
      url: '/data',
      method: 'POST',
      data: JSON.stringify({body: input.val()})
    }).done(function(data) {
      input.val('');
      console.log(data);
    });
  });
});
