define(function (require) {
  'use strict';

  var menuItem = require('component/menu_item');
  var menuContent = require('component/menu_content');
  var randomNumber = require('component/random_number');
  var menu = require('component/menu');
  var history = require('component/history');

  return initialize;

  function initialize() {
    menu.attachTo('#main');
    menuItem.attachTo('.menu-item');
    menuContent.attachTo('.menu-content');
    randomNumber.attachTo('.random, .menu-content');

    history.attachTo('.history');
  }
});
