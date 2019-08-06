const { rotLeft } = require('../src/ctci-array-left-rotation');

describe("rotLeft", function() {
  it("", function() {
    expect( rotLeft([1, 2, 3, 4, 5], 4) ).toEqual([ 5, 1, 2, 3, 4 ]);
  });
});
