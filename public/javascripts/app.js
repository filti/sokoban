var app = app || {};

// slove template dir
function tp(template) {
  return './app/assets/templates/' + template;
}

$(function() {
  'use strict';

  $('#menu').sidr({
    source: '#navbar'
  });

  new app.AppView;
});