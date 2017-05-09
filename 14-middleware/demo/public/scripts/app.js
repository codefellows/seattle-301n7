'use strict';

const addHeader = (ctx, next) => {
  $('#app').append('<h1>Middle Ware!!!!!1111</h1>');
  next();
};

const createList = (ctx, next) => {
  $('#app').append('<ul id="list"></ul>');
  next();
};

const processListItems = (ctx, next) => {
  ctx.items = (ctx.params.items || '').split('/');
  next();
};

const addListItems = ctx => {
  $('#list').append(ctx.items.map( item => `<li>${item}</li>`));
};

page('/', addHeader);
page('/list/:items*', addHeader, createList, processListItems, addListItems);

page()
