define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(menuItems);

  function menuItems() {
    this.defaultAttrs({
      itemSelector: '.menu-item'
    });

    this.highlightSection = function (e, data) {
      this.$node.removeClass().addClass(data.section);
    }

    this.requestSectionChange = function (e) {
      this.trigger('uiNeedsMenuSection', {
        section: $(e.target).text().toLowerCase()
      });
    }

    this.after('initialize', function () {
      this.on('click', {
        itemSelector: this.requestSectionChange
      });

      this.on(document, 'dataMenuSection', this.highlightSection);
    });
  }
});
