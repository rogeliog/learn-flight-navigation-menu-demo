define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(menuItem);

  function menuItem() {
    this.select = function (e) {
      this.trigger('uiMenuItemSelected', {
        value: this.$node.text()
      });
    }

    this.after('initialize', function () {
      this.on('click', this.select);
    });
  }
});
