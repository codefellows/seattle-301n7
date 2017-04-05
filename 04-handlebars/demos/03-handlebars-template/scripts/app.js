var sourceHtml = $('#template').html();
var handleBarsTemplate = Handlebars.compile(sourceHtml);

var data = {
  siteName:  'Code Fellows Demo',
  admin: 'toasty',
  body: '<p>Hello World from handlebars!</p>'
};

var data2 = {
  siteName: 'another site',
  admin: 'steeve mcqueen',
  body: '<p>another template render</p>'
};

var finalHtml = handleBarsTemplate(data);
$('#content').append(finalHtml);
$('#content').append(handleBarsTemplate(data2));
