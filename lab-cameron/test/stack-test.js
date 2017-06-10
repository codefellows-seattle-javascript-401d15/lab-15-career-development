'use strict';

const balancedBrackets = require('../stack/balanced-brackets');
const chai = require('chai');
const expect = chai.expect;

describe('Stack Module', function() {
  describe('#balancedBrackets', function() {
    it('should return true when passed a string with balanced brackets', done => {
      let myString = '[{((({})([])))},{}{{{{{}}}}function(({}){})}]';
      let test = balancedBrackets(myString);
      expect(test).to.equal(true);
      done();
    });
    it('should return false when passed a string with unbalanced brackets', done => {
      let myString = '{}[](){';
      let test = balancedBrackets(myString);
      expect(test).to.equal(false);
      done();
    });
    it('should return a new error when passed an empty string', done => {
      let myString = '';
      let err = balancedBrackets(myString);
      expect(err.message).to.equal('no content to lint!');
      done();
    });
  });
});
