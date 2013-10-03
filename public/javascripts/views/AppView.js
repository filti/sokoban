var app = app || {};

(function($) {
  'use strict';

  app.AppView = Backbone.View.extend({
    el: 'body',
    initialize: function() {
      new app.GameView;
    },
    events: {
      'click a#game': 'game',
      'click a#chat': 'chat',
      'click a#ranking': 'ranking'
    },
    render: function() {
      return this;
    },
    game: function(event) {
      event.preventDefault();
      Backbone.history.navigate('', true);
    },
    chat: function(event) {
      event.preventDefault();
      Backbone.history.navigate('chat', true);
    },
    ranking: function(event) {
      event.preventDefault();
      Backbone.history.navigate('ranking', true);
    }
  });

})(jQuery);