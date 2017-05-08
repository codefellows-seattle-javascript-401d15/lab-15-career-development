'use strict';

const expect = require('chai').expect;
const Stack = require('../lib/stack.js');

describe('Stack', function() {
  describe('#pop', function() {
    it('should remove the head of the list', () => {
      let stack = new Stack([5, 7, 9, 54]);
      stack.pop();
      expect(stack.head.val).to.equal(9);
    });
    it('should also be valid for strings', () => {
      let stack = new Stack(['last', 'middle', 'first']);
      stack.pop();
      expect(stack.head.val).to.equal('middle');
    });
    it('should have a second value equal to the former third', () => {
      let stack = new Stack([1,2,4,6]);
      stack.pop();
      expect(stack.head.next.val).to.equal(2);
    });
  });

  describe('#peek', function() {
    it('should show the head value', () => {
      let stack = new Stack([1,4,5,6,9]);
      expect(stack.peek()).to.equal(9);
    });
    it('should also be valid for strings', () => {
      let stack = new Stack(['alpha', 'beta', 'gamma']);
      expect(stack.peek()).to.equal('gamma');
    });
    it('should show the head of a modified list', () => {
      let stack = new Stack([1,5,8,10]);
      stack.pop();
      expect(stack.peek()).to.equal(8);
    });
  });
});
