define(function (require) {
  'use strict';

  var menuItemUI = require('component/ui/menu_item');
  var menuContentUI = require('component/ui/menu_content');
  var menuData = require('component/data/menu');

  return initialize;

  function initialize() {
    menuItemUI.attachTo('.menu-item');
    menuContentUI.attachTo('.menu-content');
    menuData.attachTo(document)
  }
});
