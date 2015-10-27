'use strict';

var greet = exports = module.exports = function() {
  return 'insert evil laugh here';
};

console.log(greet());
// this will fire off when it gets required, so the console.log shows up in Node
// it also gets stored in the variable greet so it can be modified later
// HANDY for constructor functions!
