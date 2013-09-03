define(function (require) {
  'use strict';

  var menuItem = require('component/menu_item');
  var menuContent = require('component/menu_content');
  var menu = require('component/menu');

  return initialize;

  function initialize() {
    menu.attachTo('#main');
    menuItem.attachTo('.menu-item');
    menuContent.attachTo('.menu-content');
  }
});
