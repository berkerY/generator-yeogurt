'use strict';

var App = App || {};
App.Views = App.Views || {};

App.Views.<%= _.classify(name) %> = Backbone.View.extend({

  tagName: 'div',

  id: '',

  className: '',

  template: JST['<%= templateFile %>.<% if (jsTemplate === 'underscore') { %>jst<% } else if (jsTemplate === 'handlebars') { %>hbs<% } else if (jsTemplate === 'jade') { %>jade<% } else if (jsTemplate === 'swig') { %>swig<% } %>'],

  events: {},

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  }

});
