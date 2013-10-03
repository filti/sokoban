var app = app || {};

(function() {
  'use strict';

  app.MessageList = Backbone.Collection.extend({
    model: app.Message,
    comparator: 'time'
  });

})();

app.Messages = new app.MessageList;