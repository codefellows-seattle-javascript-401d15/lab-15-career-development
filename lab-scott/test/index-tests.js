'use strict'

const Index = require('../index')
const chai = require('chai')
const expect = chai.expect

describe('index module', function(){
  describe('bracketBalance function', function(){
    it('should return \'Passed\'', done => {
      expect(Index.bracketBalance('{}([])')).to.equal('Passed')
      done()
    })
    it('should return Missing ]', done => {

      // console.log('in log', Index.bracketBalance('{{}()}['));
      expect(Index.bracketBalance('{{}()}[')).to.equal('Missing ]')
      done()
    })
    it('should return Missing )', done => {
      expect(Index.bracketBalance('{{}()}(()')).to.equal('Missing )')
      done()
    })
  })
})
