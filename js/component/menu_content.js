define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(menuContent);

  function menuContent() {
    this.setText = function (e, data) {
      setTimeout(function () {
        this.$node.html(data.value);
        this.trigger('uiMenuContentRefreshServed', data);
      }.bind(this), 500);
    }

    this.after('initialize', function () {
      this.on(document, 'uiMenuContentRefreshRequested', this.setText);
    });
  }
});
