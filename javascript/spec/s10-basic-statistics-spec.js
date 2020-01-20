const { processData } = require('../src/s10-basic-statistics');

describe("", function() {
  it("", function() {
    expect( processData(10, [ 64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060 ]) ).toBe('43900.6 44627.5 4978');
  });
});
