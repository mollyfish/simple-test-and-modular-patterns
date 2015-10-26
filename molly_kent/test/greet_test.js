'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../lib/greet');

describe('the greet function', function() {
 it('should return hello world', function() {
  expect(greet()).to.eql('hello world');
 })
 it('should solve all the world\'s problems');
});
