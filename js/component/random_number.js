define(function (require) {
  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(randomNumber);

  function randomNumber() {
    this.requestRefreshWithRandom = function (e, data) {
      this.trigger('uiMenuContentRefreshRequested', {
        value: Math.random()
      });
    }

    this.after('initialize', function () {
      this.on('click', this.requestRefreshWithRandom);
    });
  }
});
