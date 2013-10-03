var app = app || {};

(function($) {
  'use strict';

  app.ChatView = Backbone.View.extend({
    tagName: 'li',
    className: 'comment',
    template: app.Templates[tp('message')],
    render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
  });

})(jQuery);