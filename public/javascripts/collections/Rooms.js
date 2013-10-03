var app = app || {};

(function() {
  'use strict';

  var Rooms = Backbone.Collection.extend({
    url: 'rooms',
    model: 'app.Rooms'
  });

  app.rooms = new Rooms();
})();