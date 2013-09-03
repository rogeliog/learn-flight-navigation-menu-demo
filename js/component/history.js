define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(history);

  function history() {
    this.defaultAttrs({
      nav: 'nav'
    });

    this.addToHistory = function (e, data) {
      this.$node.append('<li>' + data.value + '</li>');
    }

    this.after('initialize', function () {
      this.on(document, 'uiMenuContentRefreshServed', this.addToHistory);
    });
  }
});
