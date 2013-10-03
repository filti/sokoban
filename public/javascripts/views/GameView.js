var app = app || {};

(function($) {
  'use strict';

  app.GameView = Backbone.View.extend({
    el: '#sokoban',
    initialize: function() {
      this.render();
    },
    template: app.Templates[tp('game')],
    render: function() {console.log('game');
      this.$el.html(this.template({title: 'Sokoban'}));
      return this;
    }
  });
})(jQuery);