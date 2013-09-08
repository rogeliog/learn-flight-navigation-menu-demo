define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(menu);

  function menu() {
    this.setSelectedClass = function (e, data) {
      var className = data.section.toLowerCase();
      this.$node.removeClass().addClass(className);
    }

    this.after('initialize', function () {
      this.on(document, 'uiMenuContentRefreshServed', this.setSelectedClass);
    });
  }
});
