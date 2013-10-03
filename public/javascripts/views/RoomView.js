var app = app || {};

(function($) {
  'use strict';

  app.RoomView = Backbone.View.extend({
    el: '#sokoban',
    initialize: function() {
      this.render();
      app.Messages.fetch();
    },
    events: {
      'click #room[name="post"]': function() {
        console.log(this);
      }
    },
    template: app.Templates[tp('room')],
    render: function() {console.log('room');
      this.$el.html(this.template());
      return this;
    }
  });
})(jQuery);