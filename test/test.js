const expect = require('chai').expect;
const app = require('../app');

describe('Flatten Array', function() {
  describe('Testing Flatten function', function() {
    it('It should return [ 1, 2, 3, 4 ]', function() {
      let arr = [[1,2,[3]],4];
      let result = app.flatten(arr);
      expect(result).to.be.an('array').that.includes(1,2,3,4);
      expect(result).to.not.include(5);
    });

    it('It should return same array [[1,2,[3]],4]', function() {
      let arr = [[1,2,[3]],4];
      let result = app.flatten(arr);
      expect(result).to.not.deep.own.include(arr);
    });
  });
});