const { dynamicArray } = require('../src/dynamic-array');

describe("", function() {
  it("", function() {
    expect( dynamicArray(2, [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ]) ).toBe(7);
  });
});
