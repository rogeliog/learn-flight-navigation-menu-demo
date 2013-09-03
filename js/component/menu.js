define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(menu);

  function menu() {
    this.defaultAttrs({
      nav: 'nav'
    });

    this.setSelectedClass = function (e, data) {
      this.$node.addClass('in-tab');
      this.select('nav').removeClass().addClass(data.value);
    }

    this.after('initialize', function () {
      this.on('uiMenuItemSelected', this.setSelectedClass);
    });
  }
});
