const { repeatedString } = require('../src/repeated-string');

describe("repeatedString", function() {
  it("", function() {
    expect( repeatedString('aba', 10) ).toBe(7);
    expect( repeatedString('a', 1000000000000) ).toBe(1000000000000);
  });
});
