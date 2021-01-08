const assert = require('assert')
const Math = require('../math.js')
const expect = require('chai').expect

describe('Math class', function() {
  it('Sum two numbers', function() {
    const math = new Math()

    expect(math.sum(5,5)).to.equal(10)
    
  })
} )