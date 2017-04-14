var getResource = function(url, resource) {
  $.ajax({ url }) //equivalent of {url: url}
  .done((data) => {
    data.results.forEach(item => {
      $('ul#' + resource).append(`<li>${item.name}</li>`);
    });
    if (data.next) setTimeout(() => getResource(data.next, resource), 1000);
  }) ;
};
$(() => {
  getResource('https://swapi.co/api/people', 'people');
  getResource('https://swapi.co/api/starships', 'starships');
  getResource('https://swapi.co/api/vehicles', 'vehicles');
});
