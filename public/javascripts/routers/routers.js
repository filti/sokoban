var app = app || {};

(function($) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes: {
      '': 'index',
      'chat': 'chat',
      'ranking': 'ranking'
    },
    index: function() {
      new app.GameView;
    },
    chat: function() {
      new app.RoomView;
    }
  });
  app.Router = new Router();

  app.Router.on('route:index', app.AppView.render, app.AppView);
  app.Router.on('route:chat', app.RoomView.render, app.RoomView);
  $(function() {
    Backbone.history.start({pushState: true});
  });

})(jQuery);