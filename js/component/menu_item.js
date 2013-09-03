define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(menuItem);

  function menuItem() {
    this.select = function (e) {
      this.trigger('uiMenuContentRefreshRequested', {
        value: this.$node.text()
      });
    }

    this.after('initialize', function () {
      this.on('click', this.select);
    });
  }
});