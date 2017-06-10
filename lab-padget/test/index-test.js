'use strict';

console.log('evaluating index.js');

// TODO: write at least three tests for each method that you've written.

const index = require('../index');
console.log(index);
const chai = require('chai');
const expect = chai.expect;

describe('stack data structure', function() {
  describe('#check', function() {
    it('it should pop a node off the stack', () => {
      // let...
      // pop...
      expect('[').to.be.a('string');
      // expect(data.toString()).to.be.a('string');
    });
  });
});

describe('character', function() {
  describe('#check', function() {
    it('should remove [ and ] from the stack with pop()', () => {
      let bracket;
      console.log(bracket);
      // if(this.peek === '[' && char === ']') {
      //   stack.pop();
      //   return;
      // }
    });
  });
});


describe('character', function() {
  describe('#check', function() {
    it('should remove { and } from the stack with pop()', () => {
      let brace;
      console.log(brace);
      // if(this.peek === '{' && char === '}') {
      //   stack.pop();
      //   return;
      // }
    });
  });
});

describe('character', function() {
  describe('#check', function() {
    it('should remove ( and ) from the stack with pop()', () => {
      let paren;
      console.log(paren);
      // if(this.peek === '(' && char === ')') {
      //   stack.pop();
      //   return;
      // }
    });
  });
});
