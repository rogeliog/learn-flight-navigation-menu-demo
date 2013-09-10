define(function (require) {
  'use strict';

  var menuItemUI = require('component/ui/menu_item');
  var menuContentUI = require('component/ui/menu_content');
  var menuSectionData = require('component/data/menu_section');

  return initialize;

  function initialize() {
    menuItemUI.attachTo('.menu-item');
    menuContentUI.attachTo('.menu-content');
    menuSectionData.attachTo(document)
  }
});
