var app = app || {};

(function() {
  'use strict';

  app.Room = Backbone.Model.extend({
    model: app.Message,
    defaults: {
      name: 'untitled'
    }
  });
})();