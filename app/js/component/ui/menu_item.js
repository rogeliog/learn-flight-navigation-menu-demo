define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(menuItems);

  function menuItems() {
    this.defaultAttrs({
      activeClass: 'active'
    });

    this.highlightSection = function (e, data) {
      this.$node.removeClass(this.attr.activeClass);

      if (this.$node.hasClass(data.section)) {
        this.$node.addClass(this.attr.activeClass);
      }
    }

    this.requestChange = function (e) {
      this.trigger('uiNeedsMenuSection', {
        section: $(e.target).text().toLowerCase()
      });
    }

    this.after('initialize', function () {
      this.on('click', this.requestChange);
      this.on(document, 'dataMenuSection', this.highlightSection);
    });
  }
});
