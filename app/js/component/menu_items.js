define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(menuItems);

  function menuItems() {
    this.defaultAttrs({
      itemSelector: '.menu-item'
    });

    this.changeSection = function (e, data) {
      var className = data.section.toLowerCase();
      this.$node.removeClass().addClass(className);
    }

    this.requestChange = function (e) {
      var value = $(this.target).text();
      this.trigger('uiSectionChangeRequested', {
        section: value,
      });
    }

    this.after('initialize', function () {
      this.on('click', {
        'itemSelector': this.requestChange
      });
      this.on(document, 'dataSectionChangeServed', this.changeSection);
    });
  }
});
