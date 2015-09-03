'use strict';
module.exports = function() {
  var random = Math.random() * 100;
  return function() {
    return random;
  };
};