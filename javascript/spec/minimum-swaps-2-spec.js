const { minimumSwaps } = require('../src/minimum-swaps-2');

describe("", function() {
  it("", function() {
    expect( minimumSwaps([4, 3, 1, 2]) ).toBe(3);
    expect( minimumSwaps([2, 3, 4, 1, 5]) ).toBe(3);
    expect( minimumSwaps([1, 3, 5, 2, 4, 6, 7]) ).toBe(3);
  });
});
