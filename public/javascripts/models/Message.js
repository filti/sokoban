var app = app || {};

(function() {
  'use strict';

  app.Message = Backbone.Model.extend({
    defaults: {
      name: 'anonymous',
      content: '',
      time: new Date()
    }
  });

})();