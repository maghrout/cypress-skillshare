describe("My First Passing Test", function() {
  it("Does not do much!", function() {
    expect(true).to.equal(true);
  });
});

describe("My First Failing Test", function() {
  it("Does not do much!", function() {
    expect(true).to.equal(false);
  });
});
