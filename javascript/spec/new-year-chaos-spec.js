
const { minimumBribes } = require('../src/new-year-chaos');

describe("", function() {
  it("", function() {
    expect( minimumBribes([2, 1, 5, 3, 4]) ).toBe(3);
    expect( minimumBribes([2, 5, 1, 3, 4]) ).toBe("Too chaotic");
    expect( minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]) ).toBe("Too chaotic");
    expect( minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]) ).toBe(7);
    expect( minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]) ).toBe(4);
  });
});
