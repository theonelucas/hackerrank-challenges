const { hourglassSum } = require('../src/2d-array');

describe("", function() {
  it("", function() {
    expect(hourglassSum([
      [1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 0, 0],
      [1, 1, 1, 0, 0, 0],
      [0, 0, 2, 4, 4, 0],
      [0, 0, 0, 2, 0, 0],
      [0, 0, 1, 2, 4, 0]
  ])).toBe(19);
  });
});
