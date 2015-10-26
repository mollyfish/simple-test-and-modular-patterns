'use strict';

var greet = exports = module.exports = function() {
  return 'hello world';
};

console.log(greet());
// this will fire off when it gets required, and it also gets stored in the variable greet
// HANDY for constructor functions!
