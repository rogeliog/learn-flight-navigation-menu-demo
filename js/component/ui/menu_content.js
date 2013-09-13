define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(menuContent);

  function menuContent() {
    this.setText = function (e, data) {
      this.$node.html(data.markup);
    }

    this.after('initialize', function () {
      this.on(document, 'dataMenuSection', this.setText);
    });
  }
});
