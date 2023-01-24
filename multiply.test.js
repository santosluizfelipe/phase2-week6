const multiply = require('./multiply.js')

describe('multiply', () => {
  it('adds 2 and 2', () => {
    expect(multiply(3,4)).toBe(12)
  });
});