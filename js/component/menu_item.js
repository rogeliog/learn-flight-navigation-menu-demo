define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(menuItem);

  function menuItem() {
    this.select = function (e) {
      var value = this.$node.text();
      this.trigger('uiMenuContentRefreshRequested', {
        section: value,
        markup: '<b>' + value + '</b>'
      });
    }

    this.after('initialize', function () {
      this.on('click', this.select);
    });
  }
});
