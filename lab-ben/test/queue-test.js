'use strict';

const expect = require('chai').expect;
const Queue = require('../lib/queue.js');

describe('Queue', function() {
  describe('#dequeue', function() {
    it('should remove the last node in the list', () => {
      let queue = new Queue([1,5,8]);
      queue.dequeue();
      expect(queue.head.next.next).to.not.exist;
    });

    it('should function with strings', () => {
      let queue = new Queue(['last', 'middle', 'first']);
      queue.dequeue();
      expect(queue.head.next.val).to.equal('middle');
    });

    it('should remove the head value if there is only one item', () => {
      let queue = new Queue([4]);
      queue.dequeue();
      expect(queue.head).to.not.exist;
    });
  });
});
