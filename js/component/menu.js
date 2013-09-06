define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(menu);

  function menu() {
    this.setSelectedClass = function (e, data) {
      this.$node.removeClass().addClass(data.section);
    }

    this.after('initialize', function () {
      this.on(document, 'uiMenuContentRefreshServed', this.setSelectedClass);
    });
  }
});
