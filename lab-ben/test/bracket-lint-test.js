'use strict';

const expect = require('chai').expect;
const lint = require('../lib/bracket-lint.js');

describe('bracket-linter', function() {
  describe('#lint', function() {
    it('should respond with true for a valid string', () => {
      let string = '{}()[]';
      expect(lint(string)).to.be.true;
    });

    it('should resond with true for another valid string', () => {
      let string = '{[]}()';
      expect(lint(string)).to.be.true;
    });

    it('should respond with false for an invalid string', () => {
      let string = ']';
      expect(lint(string)).to.be.false;
    });

    it('should respond with false for an incomplete pair', () => {
      let string = '(';
      expect(lint(string)).to.be.false;
    });
  });
});
