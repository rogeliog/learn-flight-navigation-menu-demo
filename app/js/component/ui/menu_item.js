define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(menuItems);

  function menuItems() {
    this.highlightSection = function (e, data) {
      this.$node.removeClass('active');
      if (this.$node.hasClass(data.section)) {
        this.$node.addClass('active');
      }
    }

    this.requestChange = function (e) {
      this.trigger('uiSectionChangeRequested', {
        section: $(e.target).text().toLowerCase()
      });
    }

    this.after('initialize', function () {
      this.on('click', this.requestChange);
      this.on(document, 'dataSectionChangeServed', this.highlightSection);
    });
  }
});
